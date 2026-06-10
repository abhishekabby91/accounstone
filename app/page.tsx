import Hero from "@/components/home/hero";
import SolutionsSection from "@/components/home/solutions-section";
import ServicesSection from "@/components/home/services-section";
import WhyAccounstone from "@/components/home/why-accounstone";
import CTASection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SolutionsSection />
      <ServicesSection />
      <WhyAccounstone />
      <CTASection />
    </main>
  );
}