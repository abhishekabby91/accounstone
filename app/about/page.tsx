import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'

export const metadata: Metadata = {
  title: 'About Us | AU Corporate',
  description:
    'AU Corporate helps foreign companies establish and operate in India with compliance, taxation, and advisory services.',
}

export default function AboutPage() {
  return <AboutHero />
}
