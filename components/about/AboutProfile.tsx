import Image from "next/image";

import {
  aboutEducation,
  aboutExperience,
  aboutProfile,
  aboutTechStack,
  aboutWorkAreas,
} from "@/content/about";
import { socialLinks } from "@/content/social";
import { cn } from "@/lib/utils";

function AboutSurface({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border backdrop-blur-2xl backdrop-saturate-125",
        className,
      )}
      id={id}
      style={{
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.04) 48%, rgba(255, 255, 255, 0.018) 100%), rgba(20, 21, 25, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.16)",
        borderRadius: "1.75rem",
        boxShadow:
          "inset 0 1px 0 rgba(255, 255, 255, 0.24), inset 0 -1px 0 rgba(0, 0, 0, 0.14), 0 20px 48px rgba(0, 0, 0, 0.26)",
      }}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/48">
      {children}
    </p>
  );
}

function ContactAction({
  href,
  icon,
  label,
}: {
  href: string;
  icon: "projects" | "contact" | "resume";
  label: string;
}) {
  const appIconSrc = {
    projects: "/app-icons/projects.svg",
    contact: undefined,
    resume: "/app-icons/resume.svg",
  }[icon];

  return (
    <a
      aria-label={label}
      className="group flex min-w-0 flex-col items-center gap-2 text-center transition active:scale-95"
      href={href}
    >
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[20%] text-white shadow-[0_8px_18px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5",
        )}
      >
        {appIconSrc ? (
          <Image alt="" aria-hidden="true" className="h-full w-full object-cover" height={44} src={appIconSrc} width={44} />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#64D2FF,#0A84FF)]">
            <svg aria-hidden="true" className="h-[62%] w-[62%]" viewBox="0 0 24 24">
              <path
                d="M4.75 5.5h14.5c1.24 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.01 2.25-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 16.25v-8.5C2.5 6.51 3.51 5.5 4.75 5.5Zm.2 2 6.28 4.86c.45.35 1.09.35 1.54 0l6.28-4.86H4.95Z"
                fill="currentColor"
              />
            </svg>
          </span>
        )}
      </div>
      <p className="text-xs font-semibold text-white/52 transition group-hover:text-white">{label}</p>
    </a>
  );
}

function SocialDockAction({
  href,
  icon,
  label,
}: {
  href?: string;
  icon: "github" | "linkedin" | "x" | "email";
  label: string;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      aria-label={label}
      className={cn(
        "group flex h-14 w-14 items-center justify-center rounded-[1.25rem] text-white shadow-[0_14px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:brightness-110 active:scale-95 sm:h-16 sm:w-16",
        icon === "github" && "bg-[#1C1C1E]",
        icon === "linkedin" && "bg-[#0A66C2]",
        icon === "x" && "bg-black",
        icon === "email" && "bg-[linear-gradient(145deg,#64D2FF,#0A84FF)]",
      )}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {icon === "github" ? (
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24">
          <path
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.17c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.04c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "linkedin" ? (
        <span aria-hidden="true" className="text-[2rem] font-bold leading-none tracking-[-0.04em]">in</span>
      ) : null}
      {icon === "x" ? (
        <Image alt="" aria-hidden="true" className="h-6 w-6 object-contain" height={24} src="/icons/X.avif" width={24} />
      ) : null}
      {icon === "email" ? (
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24">
          <path
            d="M4.75 5.5h14.5c1.24 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.01 2.25-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 16.25v-8.5C2.5 6.51 3.51 5.5 4.75 5.5Zm.2 2 6.28 4.86c.45.35 1.09.35 1.54 0l6.28-4.86H4.95Z"
            fill="currentColor"
          />
        </svg>
      ) : null}
    </a>
  );
}

const socialDockLinks = [
  { icon: "github", label: "GitHub", href: socialLinks.find((link) => link.label === "GitHub")?.href },
  { icon: "linkedin", label: "LinkedIn", href: socialLinks.find((link) => link.label === "LinkedIn")?.href },
  { icon: "x", label: "X", href: socialLinks.find((link) => link.label === "X")?.href },
  { icon: "email", label: "Email", href: socialLinks.find((link) => link.label === "Email")?.href },
] as const;

export function AboutProfile() {
  return (
    <div className="space-y-4">
      <AboutSurface className="p-5 sm:p-7">
        <div className="relative z-10">
          <Eyebrow>Contact Poster</Eyebrow>

          <h1 className="mt-6 max-w-[12ch] text-[clamp(3.2rem,7vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
            {aboutProfile.name}
          </h1>

          <p className="mt-8 max-w-4xl text-[clamp(1.45rem,3vw,2.35rem)] font-semibold leading-tight tracking-[-0.04em] text-white/92">
            {aboutProfile.headline}
          </p>

          <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
            <div className="max-w-3xl space-y-3 text-base leading-7 text-white/64">
              {aboutProfile.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex items-end gap-5">
              <ContactAction href="/projects" icon="projects" label="Projects" />
              <ContactAction href="#contact" icon="contact" label="Contact" />
              <ContactAction href="/resume" icon="resume" label="Resume" />
            </div>
          </div>
        </div>
      </AboutSurface>

      <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <div className="grid gap-4">
          <AboutSurface className="p-5 sm:p-6">
            <div className="relative z-10">
              <Eyebrow>Experience</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                Current role
              </h2>

              <div className="mt-5 space-y-5">
                {aboutExperience.map((item) => (
                  <div className="rounded-[1.65rem] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={item.company}>
                    <div>
                      <div className="w-full">
                        <p className="text-lg font-semibold tracking-[-0.025em] text-white">{item.role}</p>
                        <p className="mt-1 text-sm font-medium text-white/46">{item.company}</p>

                        <div className="mt-4 rounded-[1.45rem] bg-white/[0.075] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)]">
                          <p className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/34">
                            Progression
                          </p>
                          <div className="space-y-3">
                            {item.progression.map((step, index) => (
                              <div className="grid grid-cols-[0.8rem_minmax(0,1fr)] gap-2.5" key={`${step.role}-${step.period}`}>
                                <div className="relative flex justify-center">
                                  <span
                                    className={cn(
                                      "mt-1.5 h-2 w-2 rounded-full",
                                      index === 0 ? "bg-[#34C759]" : "bg-white/28",
                                    )}
                                  />
                                  {index < item.progression.length - 1 ? (
                                    <span className="absolute top-4 h-[calc(100%+0.35rem)] w-px bg-white/14" />
                                  ) : null}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <p className="text-sm font-semibold leading-5 text-white/86">{step.role}</p>
                                    <span className="shrink-0 rounded-full bg-black/20 px-2 py-0.5 text-[0.62rem] font-semibold text-white/38">
                                      {step.label}
                                    </span>
                                  </div>
                                  <p className="mt-0.5 text-xs font-medium text-white/42">{step.period}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {item.details.map((detail) => (
                        <div className="flex gap-3" key={detail}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#34C759]" />
                          <p className="text-sm leading-6 text-white/58">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AboutSurface>

          <AboutSurface className="p-5">
            <div className="relative z-10">
              <Eyebrow>Education</Eyebrow>
              <div className="mt-4 space-y-3">
                {aboutEducation.map((item) => (
                  <div className="rounded-[1.25rem] bg-black/20 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={`${item.degree}-${item.school}`}>
                    <p className="text-sm font-semibold leading-5 text-white/86">{item.degree}</p>
                    <p className="mt-1 text-sm leading-5 text-white/48">{item.school}</p>
                    <p className="mt-2 text-xs font-semibold text-white/34">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </AboutSurface>
        </div>

        <AboutSurface className="p-4 sm:p-5">
          <div className="relative z-10">
            <Eyebrow>Selected Work Areas</Eyebrow>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
              What I work on
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {aboutWorkAreas.map((area) => (
                <div className="rounded-[1.45rem] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={area.title}>
                  <p className="text-sm font-semibold text-white/88">{area.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/52">{area.body}</p>
                </div>
              ))}
            </div>
          </div>
        </AboutSurface>
      </div>

      <AboutSurface className="p-5 sm:p-6" id="stack">
        <div className="relative z-10">
          <Eyebrow>Technical Stack</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
            Tools I reach for
          </h2>

          <div className="mt-4 grid gap-2.5 md:grid-cols-2 xl:grid-cols-3">
            {aboutTechStack.map((stack) => (
              <div className="rounded-[1.25rem] bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={stack.group}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/34">{stack.group}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {stack.items.map((item) => (
                    <span className="rounded-full bg-white/[0.07] px-2 py-0.5 text-[0.66rem] font-semibold text-white/50" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AboutSurface>

      <AboutSurface className="p-5 sm:p-6" id="contact">
        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <Eyebrow>Contact Me</Eyebrow>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
              Let&apos;s connect
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/52">
              Find my work, connect professionally, follow updates, or send an email. If you have any questions, feel free to ask.
            </p>
          </div>

          <div className="flex justify-center gap-3 rounded-[1.75rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:gap-4">
            {socialDockLinks.map((link) => (
              <SocialDockAction href={link.href} icon={link.icon} key={link.label} label={link.label} />
            ))}
          </div>
        </div>
      </AboutSurface>
    </div>
  );
}
