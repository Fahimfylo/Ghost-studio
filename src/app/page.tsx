import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyUs } from "@/components/sections/why-us";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsTicker } from "@/components/sections/testimonials-ticker";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { AIBlueprintSection } from "@/components/sections/ai-blueprint-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AIBlueprintSection />
      <ProcessSection />
      <WhyUs />
      <TeamSection />
      <TestimonialsTicker />
      <ContactFormSection />
    </>
  );
}
