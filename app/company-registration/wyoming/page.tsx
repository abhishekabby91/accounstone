import { Metadata } from 'next';
import RegistrationStatePage from '@/components/registration-state-page';
import { generateMetadata as genMeta } from '@/lib/seo';
import { registrationStates } from '@/lib/company-registration';

// Thin by design: the copy lives in lib/company-registration.ts and the render in
// components/registration-state-page.tsx. Explicit page files rather than a
// [state] dynamic segment, so the sitemap drift check in CLAUDE.md keeps working.
const state = registrationStates.find((s) => s.slug === 'wyoming')!;

export const metadata: Metadata = genMeta({
  title: state.title,
  description: state.description,
  path: `/company-registration/${state.slug}`,
});

export default function WyomingRegistrationPage() {
  return <RegistrationStatePage state={state} />;
}
