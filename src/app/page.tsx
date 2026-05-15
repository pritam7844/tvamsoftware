import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AwardsSection from '@/components/sections/AwardsSection';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSection />
      <CtaSection />
    </>
  );
}
