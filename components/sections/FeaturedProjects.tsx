import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section className="space-y-6">
      <SectionHeading
        description="The quickest read on what I build: native UI systems, local AI tooling, personal iOS product work, and creative prototypes."
        eyebrow="Selected work"
        title="Featured projects"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
