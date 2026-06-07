import Image from "next/image";

import {
  aboutEducation,
  aboutExperience,
  aboutPrinciples,
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
        "relative overflow-hidden rounded-[2.15rem] border border-white/[0.07] bg-[rgba(28,28,30,0.5)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl",
        className,
      )}
      id={id}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]" />
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
  const iconPath = {
    projects:
      "M4.75 5.25A2.25 2.25 0 0 1 7 3h2.5c.7 0 1.36.33 1.78.89l.83 1.11H17A2.25 2.25 0 0 1 19.25 7.25v.5H4.75v-2.5Zm0 4h14.5l-.92 7.36A2.25 2.25 0 0 1 16.1 18.6H6.9a2.25 2.25 0 0 1-2.23-1.99L3.75 9.25h1Z",
    contact:
      "M12 12.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-7.25 7.25c.52-3.7 3.58-5.75 7.25-5.75s6.73 2.05 7.25 5.75a.75.75 0 0 1-.74.85H5.49a.75.75 0 0 1-.74-.85Z",
    resume:
      "M6.75 3.5h6.75l4.75 4.62V18.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2Zm6.45 1.7v4.15h4.25L13.2 5.2ZM8.25 13h7.5v1.5h-7.5V13Zm0 3h5.5v1.5h-5.5V16Z",
  }[icon];

  const iconClassName = {
    projects: "bg-[linear-gradient(180deg,#5EC8FF,#32ADE6_52%,#0A84FF)] shadow-[0_12px_28px_rgba(10,132,255,0.28),inset_0_1px_0_rgba(255,255,255,0.24)]",
    contact: "bg-[linear-gradient(180deg,#64D2FF,#0A84FF)] shadow-[0_12px_28px_rgba(10,132,255,0.28),inset_0_1px_0_rgba(255,255,255,0.24)]",
    resume: "bg-[linear-gradient(180deg,#62D7D0,#26AFA8_52%,#167B78)] shadow-[0_12px_28px_rgba(22,123,120,0.3),inset_0_1px_0_rgba(255,255,255,0.24)]",
  }[icon];

  return (
    <a className="group flex min-w-0 flex-col items-center gap-2" href={href}>
      <div className={cn("flex h-11 w-11 items-center justify-center rounded-full text-white transition group-hover:-translate-y-0.5 group-hover:brightness-110 group-active:scale-95", iconClassName)}>
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path d={iconPath} fill="currentColor" />
        </svg>
      </div>
      <p className="text-[0.68rem] font-semibold text-white/48 transition group-hover:text-white/72">{label}</p>
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
      <AboutSurface className="min-h-[26rem] p-5 sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_4%,rgba(10,132,255,0.32),transparent_20rem),radial-gradient(circle_at_88%_0%,rgba(191,90,242,0.18),transparent_16rem),linear-gradient(145deg,rgba(24,31,43,0.82),rgba(12,14,20,0.46)_58%,rgba(8,9,12,0.72))]" />
        <div className="relative z-10 grid min-h-[22rem] gap-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <Eyebrow>Contact Poster</Eyebrow>
              <h1 className="mt-5 max-w-[11ch] text-[clamp(3.2rem,7vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                {aboutProfile.name}
              </h1>
            </div>

            <div>
              <p className="max-w-3xl text-[clamp(1.45rem,3vw,2.35rem)] font-semibold leading-tight tracking-[-0.04em] text-white/92">
                {aboutProfile.headline}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/64">
                {aboutProfile.intro}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2.2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))] text-4xl font-semibold tracking-[-0.06em] text-white shadow-[0_18px_44px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)]">
              ZW
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold tracking-[-0.025em] text-white">{aboutProfile.role}</p>
              <p className="mt-1 text-sm font-medium text-white/46">{aboutProfile.location}</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 rounded-[1.55rem] bg-white/[0.06] p-3">
              <ContactAction href="/projects" icon="projects" label="Projects" />
              <ContactAction href="#contact" icon="contact" label="Contact" />
              <ContactAction href="/resume" icon="resume" label="Resume" />
            </div>
          </div>
        </div>
      </AboutSurface>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <AboutSurface className="p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(52,199,89,0.16),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
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

        <AboutSurface className="p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_0%,rgba(10,132,255,0.18),transparent_16rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
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

      <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="grid gap-4">
          <AboutSurface className="self-start p-5 sm:p-6" id="stack">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(28,28,30,0.18)_44%),radial-gradient(circle_at_90%_0%,rgba(191,90,242,0.16),transparent_20rem)]" />
            <div className="relative z-10">
              <Eyebrow>Technical Stack</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                Tools I reach for
              </h2>

              <div className="mt-4 grid gap-2.5 md:grid-cols-2">
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
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(10,132,255,0.2),transparent_18rem),radial-gradient(circle_at_90%_0%,rgba(100,210,255,0.12),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <Eyebrow>Contact Me</Eyebrow>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                  Let&apos;s connect
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/52">
                  Find my work, connect professionally, follow updates, or send an email.
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

        <div className="grid gap-4">
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

          <AboutSurface className="p-5">
            <div className="relative z-10">
              <Eyebrow>How I Work</Eyebrow>
              <div className="mt-4 space-y-3">
                {aboutPrinciples.map((principle) => (
                  <div className="rounded-[1.25rem] bg-black/20 px-4 py-3 text-sm leading-6 text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={principle}>
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </AboutSurface>
        </div>
      </div>
    </div>
  );
}
