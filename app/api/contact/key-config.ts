// Web3Forms access keys are UUIDs. Checking the shape catches the two ways the
// value usually arrives wrong from a dashboard paste: surrounding quotes, and a
// trailing newline.
const KEY_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function readKey(): { key: string; present: boolean; wellFormed: boolean } {
  const raw = process.env.WEB3FORMS_ACCESS_KEY ?? '';
  const key = raw.trim().replace(/^["']|["']$/g, '');
  return { key, present: key.length > 0, wellFormed: KEY_SHAPE.test(key) };
}
