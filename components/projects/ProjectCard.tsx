import type { Project } from "@/types/project";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col p-4 transition duration-200 hover:border-white/18 hover:bg-[#2c2c2e]/44 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <Badge>{project.status}</Badge>
        <span className="max-w-28 text-right text-xs font-medium leading-5 text-white/34">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-white/58">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span className="rounded-xl bg-[#2c2c2e]/52 px-2.5 py-1 text-xs text-white/46" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        className="mt-5 inline-flex w-fit rounded-xl px-0 text-sm font-semibold text-[#8abfff] transition group-hover:text-white"
        href={project.links[0]?.href ?? "/projects"}
      >
        {project.links[0]?.label ?? "View details"}
      </a>
    </Card>
  );
}
