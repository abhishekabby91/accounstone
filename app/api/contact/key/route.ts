import { NextResponse } from 'next/server';

import { readKey } from '../key-config';

/**
 * Hands the Web3Forms access key to the contact form at submit time.
 *
 * Why the browser has to do the submitting: Web3Forms sits behind Cloudflare,
 * which serves a JS challenge to any server-side call. A request from Vercel's
 * serverless runtime never reaches their API - it gets a 403 challenge page
 * instead, whatever headers it carries, because what is being fingerprinted is
 * the TLS handshake rather than the User-Agent. A real browser clears that
 * challenge. So the key has to reach the browser; there is no header trick that
 * avoids it.
 *
 * That is also how Web3Forms is designed to be used - their own documentation
 * puts the key straight into client HTML, and it is public by construction.
 * What this route buys over hardcoding it is that the key still never enters
 * the repository (which is public) or the static bundle: it lives only in the
 * Vercel environment, and rotating it there takes effect without a redeploy.
 *
 * The protection against a scraped key is domain restriction, set in the
 * Web3Forms dashboard - not secrecy.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const { key, present, wellFormed } = readKey();

  if (!present || !wellFormed) {
    return NextResponse.json(
      { ok: false, reason: 'not_configured' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  return NextResponse.json(
    { ok: true, accessKey: key },
    { status: 200, headers: { 'Cache-Control': 'no-store' } },
  );
}
