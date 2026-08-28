import { NextResponse } from 'next/server';

import { readKey } from './key-config';

/**
 * Contact form diagnostics.
 *
 * This route used to POST to Web3Forms server-side, so the access key never
 * reached the browser. That design does not work: Web3Forms sits behind
 * Cloudflare, which answers a server-side call with a JS challenge rather than
 * passing it through. The failure looked exactly like a rejected key -
 *
 *     Web3Forms rejected submission 403 null
 *
 * - until the response body was captured and turned out to be Cloudflare's
 * "Just a moment..." interstitial. No header makes that pass; what is
 * fingerprinted is the TLS handshake, not the User-Agent. The form therefore
 * submits from the browser, which clears the challenge, and fetches the key
 * from /api/contact/key at submit time.
 *
 * What is left here is diagnosis, which is worth keeping: on the Hobby plan
 * Vercel holds runtime logs for one hour, so without an endpoint you can ask at
 * any time there is no way to tell an unset environment variable from a
 * provider outage after the fact.
 */

export const runtime = 'nodejs';

const SITE = 'https://www.accounstone.com';

/**
 * Health check. Reports whether the form is wired up, and nothing else - never
 * the key itself. (/api/contact/key serves the key, deliberately, to the form.)
 *
 * `?probe=1` additionally asks Web3Forms how it answers a *deliberately
 * invalid* key, which separates two failures without sending anyone a test
 * email: a JSON refusal means the request reaches their API and a real failure
 * would be about the key; a non-JSON 403 means Cloudflare answered instead and
 * the key is irrelevant.
 */
export async function GET(request: Request) {
  const { present, wellFormed } = readKey();
  const base = {
    configured: present && wellFormed,
    keyPresent: present,
    keyWellFormed: wellFormed,
    note: present
      ? wellFormed
        ? 'The contact form is configured and will submit normally.'
        : 'WEB3FORMS_ACCESS_KEY is set but is not a valid UUID - check for stray quotes or whitespace.'
      : 'WEB3FORMS_ACCESS_KEY is not set on this deployment. The form falls back to offering an email.',
  };

  if (new URL(request.url).searchParams.get('probe') !== '1') {
    return NextResponse.json(base, { status: 200, headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: SITE,
        Referer: `${SITE}/contact`,
      },
      body: JSON.stringify({
        // A syntactically valid key that is not anyone's. Web3Forms refuses it
        // without sending mail, so the probe has no side effect.
        access_key: '00000000-0000-4000-8000-000000000000',
        subject: 'connectivity probe',
        name: 'probe',
        email: 'probe@example.com',
        message: 'probe',
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const text = await res.text();
    let json: { message?: string } | null = null;
    try {
      json = JSON.parse(text);
    } catch {
      // Not JSON - a WAF interstitial rather than their API.
    }

    return NextResponse.json(
      {
        ...base,
        probe: {
          upstreamStatus: res.status,
          upstreamIsJson: json !== null,
          upstreamMessage: json?.message ?? null,
          bodySnippet: text.slice(0, 300),
          verdict:
            json !== null
              ? 'Reached the Web3Forms API from the server.'
              : 'Blocked before the Web3Forms API - an edge WAF answered. Expected: this is why the form submits from the browser.',
        },
      },
      { status: 200, headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    return NextResponse.json(
      { ...base, probe: { error: String(error), verdict: 'Could not reach api.web3forms.com at all.' } },
      { status: 200, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
