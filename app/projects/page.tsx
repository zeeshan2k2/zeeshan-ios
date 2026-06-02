import type { Metadata } from "next";

import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project archive for Zeeshan Waheed across professional iOS apps, showcase projects, and learning experiments.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <SectionReveal>
        <ProjectsArchive />
      </SectionReveal>
    </PageTransition>
  );
}
