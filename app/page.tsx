import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeedPreview } from "@/components/sections/FeedPreview";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <PageTransition className="gap-10">
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <FeaturedProjects />
      </SectionReveal>
      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <FeedPreview />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </PageTransition>
  );
}
