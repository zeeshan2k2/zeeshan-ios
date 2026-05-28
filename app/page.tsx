import { projects } from "@/content/projects";
import { socialLinks } from "@/content/social";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-5 pb-10 pt-8 sm:px-8 sm:py-12 lg:px-10">
      <section className="flex flex-1 flex-col justify-center gap-8 sm:gap-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-white/45">
            {SITE_TITLE}
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-6xl">
            {SITE_NAME}
          </h1>
          <p className="mt-5 text-2xl font-medium text-white/86 sm:text-3xl">
            iOS Engineer building native apps and local AI tools.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
            {SITE_DESCRIPTION}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              className="rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/86 shadow-[0_16px_60px_rgba(0,0,0,0.28)] transition hover:border-white/22 hover:bg-white/[0.1]"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur"
              key={project.slug}
            >
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/62">
                {project.status}
              </div>
              <h2 className="text-lg font-semibold text-white">{project.name}</h2>
              <p className="mt-2 text-sm leading-6 text-white/58">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
