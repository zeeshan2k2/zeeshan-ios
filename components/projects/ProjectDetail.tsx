import type { Project } from "@/types/project";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="scroll-mt-8" id={project.slug}>
      <Card className="overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{project.status}</Badge>
              <Badge className="text-white/48">{project.category}</Badge>
            </div>

            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{project.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">{project.overview}</p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white">Problem / purpose</h3>
                <p className="mt-2 text-sm leading-6 text-white/56">{project.purpose}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">What I am building</h3>
                <p className="mt-2 text-sm leading-6 text-white/56">{project.buildSummary}</p>
              </div>
            </div>

            {project.isSourcePrivate ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#2c2c2e]/46 p-4 text-sm leading-6 text-white/58">
                Relive is a personal product in active development. The public page will focus on
                progress, screenshots, features, devlogs, and technical notes rather than source code.
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span className="rounded-xl bg-[#2c2c2e]/58 px-3 py-1.5 text-xs text-white/52" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button
                  href={link.href}
                  key={`${project.slug}-${link.label}`}
                  variant={link.type === "details" ? "primary" : "secondary"}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/18 p-5 sm:p-7 lg:border-l lg:border-t-0">
            <div className="rounded-3xl border border-dashed border-white/12 bg-[#1c1c1e]/48 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
                Screenshots / progress
              </p>
              <div className="mt-5 grid gap-3">
                {project.progress.map((item) => (
                  <div
                    className="rounded-2xl border border-white/8 bg-[#2c2c2e]/48 px-4 py-3 text-sm text-white/58"
                    key={`${project.slug}-${item}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-white">Highlights</h3>
              <ul className="mt-3 space-y-3">
                {project.highlights.map((highlight) => (
                  <li className="flex gap-3 text-sm leading-6 text-white/58" key={highlight}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/34" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#2c2c2e]/42 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
                Current status
              </p>
              <p className="mt-2 text-sm leading-6 text-white/58">{project.currentStatus}</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
