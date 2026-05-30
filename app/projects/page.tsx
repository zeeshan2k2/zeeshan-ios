import type { Metadata } from "next";

import { AppWindow } from "@/components/layout/AppWindow";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Zeeshan Waheed across iOS engineering, local AI tooling, native UI systems, and product experiments.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <SectionReveal>
        <AppWindow
          actions={projects.map((project) => (
            <Button href={`#${project.slug}`} key={project.slug} variant="ghost">
              {project.name}
            </Button>
          ))}
          description="A closer look at the projects behind the home-screen widgets, from Swift GenUI and ByteForge to Relive and early creative product work."
          eyebrow="Projects"
          title="Native apps, local AI systems, and product experiments."
        >
          <div className="space-y-5">
            {projects.map((project) => (
              <ProjectDetail key={project.slug} project={project} />
            ))}
          </div>
        </AppWindow>
      </SectionReveal>
    </PageTransition>
  );
}
