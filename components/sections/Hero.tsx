import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";
import { socialLinks } from "@/content/social";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/constants";

const heroActions = ["View Projects", "View Resume", "GitHub", "Email"].map((label) =>
  socialLinks.find((link) => link.label === label),
);

const featuredNow = projects.filter((project) =>
  ["swift-genui", "relive"].includes(project.slug),
);

export function Hero() {
  return (
    <section className="grid gap-7 pt-1 lg:grid-cols-[1fr_24rem] lg:items-end">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
          {SITE_TITLE}
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-6xl">{SITE_NAME}</h1>
        <p className="mt-4 max-w-3xl text-2xl font-medium leading-tight text-white/90 sm:text-3xl">
          iOS Engineer building native apps and local AI tools.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
          {SITE_DESCRIPTION}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {heroActions.map((link, index) =>
            link ? (
              <Button
                href={link.href}
                key={link.label}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "ghost"}
              >
                {link.label}
              </Button>
            ) : null,
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#1c1c1e]/64 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/36">
          Recruiter scan
        </p>

        <div className="mt-4 grid gap-2">
          {["Swift / UIKit / SwiftUI", "Local AI tools + RAG", "Product-minded engineering"].map(
            (item) => (
              <div
                className="rounded-2xl border border-white/8 bg-[#2c2c2e]/54 px-4 py-3 text-sm font-medium text-white/72"
                key={item}
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div className="mt-5 border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/36">
            Best signals
          </p>
          <div className="mt-3 space-y-3">
            {featuredNow.map((project) => (
              <a
                className="block rounded-2xl border border-white/8 bg-black/18 p-3 transition hover:border-white/16 hover:bg-[#2c2c2e]/54"
                href={`/projects#${project.slug}`}
                key={project.slug}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white">{project.name}</span>
                  <Badge>{project.status}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-white/52">{project.category}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
