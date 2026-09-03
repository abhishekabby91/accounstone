/**
 * `/services/cfo-support` never existed as a page, but it is indexed.
 *
 * Search Console shows it holding 17 impressions at position 56.9 — Google
 * found it through the ten internal links that once pointed at it (see
 * CLAUDE.md and knowledge/company/scope-boundaries.md §1) and kept the URL
 * even though it has always 404'd.
 *
 * That matters more than a normal dead URL: it advertises a CFO service
 * Accounstone does not offer and that scope-boundaries.md explicitly forbids
 * claiming. A 404 means "maybe this comes back" and Google retries for a long
 * time; 410 Gone is the unambiguous signal that removes it faster.
 *
 * Do not turn this into a page. If CFO support is ever genuinely offered
 * (CLAUDE.md open item 4), that is a data change plus a real page, decided by
 * the owner.
 */
export const dynamic = 'force-static';

export function GET() {
  return new Response(
    'Gone. Accounstone does not offer CFO support services.',
    { status: 410, headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
}
