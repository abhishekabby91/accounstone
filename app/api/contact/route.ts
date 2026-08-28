import { NextResponse } from 'next/server';

/**
 * Contact form handler.
 *
 * Posts to Web3Forms server-side rather than from the browser. Web3Forms
 * access keys are designed to be public and their own docs put them straight
 * into client HTML, but this repository is public - a key committed here gets
 * scraped and used to spam the inbox. Keeping the call server-side means the
 * key lives only in the Vercel environment and never reaches the client
 * bundle, and it can be rotated without a deploy.
 *
 * Set WEB3FORMS_ACCESS_KEY in the Vercel project (Settings > Environment
 * Variables). Until it is set, this route returns 503 and the contact page
 * falls back to opening the visitor's mail client, which is what it did
 * before - so an unset key degrades rather than breaks.
 */

export const runtime = 'nodejs';

// Web3Forms access keys are UUIDs. Checking the shape catches the two ways the
// value usually arrives wrong from a dashboard paste: surrounding quotes, and a
// trailing newline.
const KEY_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function readKey(): { key: string; present: boolean; wellFormed: boolean } {
  const raw = process.env.WEB3FORMS_ACCESS_KEY ?? '';
  const key = raw.trim().replace(/^["']|["']$/g, '');
  return { key, present: key.length > 0, wellFormed: KEY_SHAPE.test(key) };
}

/**
 * Health check. Reports whether the form is wired up, and nothing else - never
 * the key itself. Without this there is no way to tell an unset environment
 * variable from a provider outage without submitting the live form and reading
 * the runtime logs, and on a low-traffic site those logs age out first.
 */
export async function GET() {
  const { present, wellFormed } = readKey();
  return NextResponse.json(
    {
      configured: present && wellFormed,
      keyPresent: present,
      keyWellFormed: wellFormed,
      note: present
        ? wellFormed
          ? 'The contact form is configured and will submit normally.'
          : 'WEB3FORMS_ACCESS_KEY is set but is not a valid UUID - check for stray quotes or whitespace.'
        : 'WEB3FORMS_ACCESS_KEY is not set on this deployment. The form falls back to the visitor mail client.',
    },
    { status: 200, headers: { 'Cache-Control': 'no-store' } },
  );
}

const MAX = { name: 200, email: 320, company: 200, phone: 60, service: 120, message: 5000 };

function clean(value: FormDataEntryValue | null, limit: number): string {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function POST(request: Request) {
  const { key: accessKey, present, wellFormed } = readKey();
  if (!present || !wellFormed) {
    return NextResponse.json(
      { ok: false, reason: 'not_configured', message: 'The form service is not configured yet.' },
      { status: 503 },
    );
  }

  let body: Record<string, string>;
  try {
    const data = await request.formData();

    // Honeypot: a real person never fills a field they cannot see.
    if (clean(data.get('botcheck'), 100)) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = clean(data.get('name'), MAX.name);
    const email = clean(data.get('email'), MAX.email);
    const message = clean(data.get('message'), MAX.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, reason: 'invalid', message: 'Name, email and message are all required.' },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { ok: false, reason: 'invalid', message: 'That email address does not look right.' },
        { status: 400 },
      );
    }

    const company = clean(data.get('company'), MAX.company);
    const phone = clean(data.get('phone'), MAX.phone);
    const service = clean(data.get('service'), MAX.service);

    body = {
      access_key: accessKey,
      subject: `Consultation request from ${name}`,
      from_name: 'Accounstone website',
      name,
      email,
      message,
      ...(company && { company }),
      ...(phone && { phone }),
      ...(service && { service_interest: service }),
    };
  } catch {
    return NextResponse.json(
      { ok: false, reason: 'invalid', message: 'That submission could not be read.' },
      { status: 400 },
    );
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!res.ok || !result?.success) {
      // Do not surface the provider's message to the visitor - it can contain
      // account detail. Log it for us, return something plain to them. This is
      // the only record of why a submission failed, so log the status and the
      // provider's own reason.
      console.error('Web3Forms rejected submission', res.status, JSON.stringify(result));
      return NextResponse.json(
        { ok: false, reason: 'upstream', message: 'The message could not be sent just now.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Web3Forms request failed', error);
    return NextResponse.json(
      { ok: false, reason: 'network', message: 'The message could not be sent just now.' },
      { status: 502 },
    );
  }
}
