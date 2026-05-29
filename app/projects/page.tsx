import type { Metadata } from "next";

import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Zeeshan Waheed across iOS engineering, local AI tooling, native UI systems, and product experiments.",
};

export default function ProjectsPage() {
  return (
    <PageTransition className="gap-8">
      <SectionReveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <Badge>Projects</Badge>
          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Native apps, local AI systems, and product experiments.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/62">
            A closer look at the projects behind the homepage cards, from Swift GenUI and ByteForge
            to Relive and early creative product work.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {projects.map((project) => (
            <Button href={`#${project.slug}`} key={project.slug} variant="ghost">
              {project.name}
            </Button>
          ))}
        </div>
      </SectionReveal>

      <div className="space-y-6">
        {projects.map((project) => (
          <SectionReveal key={project.slug}>
            <ProjectDetail project={project} />
          </SectionReveal>
        ))}
      </div>
    </PageTransition>
  );
}
