"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";

import {
  aboutExperience,
  aboutProfile,
  aboutTechStack,
} from "@/content/about";
import { cn } from "@/lib/utils";

function AboutSurface({
  children,
  className,
  id,
}: {
  children: ReactNode;
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

function Eyebrow({ children }: { children: ReactNode }) {
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

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const contactTopicOptions = [
  "iOS app development",
  "Swift tutoring",
  "Code review",
  "Debugging help",
  "Architecture guidance",
  "Other",
];

export function AboutProfile() {
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [contactMessage, setContactMessage] = useState("");
  const [contactTopic, setContactTopic] = useState("");
  const [isTopicOpen, setIsTopicOpen] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!WEB3FORMS_ACCESS_KEY) {
      setContactStatus("error");
      setContactMessage("Contact form is not configured yet.");
      return;
    }

    if (!contactTopic) {
      setContactStatus("error");
      setContactMessage("Please select a topic.");
      return;
    }

    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New message from zeeshanwaheed.dev");
    formData.set("type", contactTopic);

    setContactStatus("sending");
    setContactMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Message failed to send.");
      }

      form.reset();
      setContactTopic("");
      setIsTopicOpen(false);
      setContactStatus("success");
      setContactMessage("Message sent. I'll get back to you soon.");
    } catch {
      setContactStatus("error");
      setContactMessage("Couldn't send the message. Please try again.");
    }
  }

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

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
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

        <AboutSurface className="p-5 sm:p-6" id="stack">
          <div className="relative z-10 flex h-full flex-col">
            <Eyebrow>Technical Stack</Eyebrow>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
              Tools I reach for
            </h2>

            <div className="mt-4 grid flex-1 auto-rows-fr gap-2.5 sm:grid-cols-2">
              {aboutTechStack.map((stack) => (
                <div className="rounded-[1.25rem] bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={stack.group}>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/52">{stack.group}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {stack.items.map((item) => (
                      <span className="rounded-full bg-white/[0.09] px-2 py-0.5 text-[0.72rem] font-semibold text-white/68" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AboutSurface>
      </div>

      <AboutSurface className="p-5 sm:p-6" id="contact">
        <div className="relative z-10">
          <div className="rounded-[1.65rem] bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-5">
            <Eyebrow>Contact Me</Eyebrow>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
              Let&apos;s connect
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/52">
              Need help with an iOS app, Swift learning, debugging, architecture, or Apple-platform product work? Send a quick note and I&apos;ll get back to you.
            </p>

            <form className="mt-5 grid gap-3" onSubmit={handleContactSubmit}>
              <input name="access_key" type="hidden" value={WEB3FORMS_ACCESS_KEY} />
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/38">
                    Name
                  </span>
                  <input
                    className="h-11 rounded-[1rem] border border-white/[0.08] bg-white/[0.06] px-3 text-sm font-medium text-white outline-none transition placeholder:text-white/28 focus:border-white/[0.18] focus:bg-white/[0.09]"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/38">
                    Email
                  </span>
                  <input
                    className="h-11 rounded-[1rem] border border-white/[0.08] bg-white/[0.06] px-3 text-sm font-medium text-white outline-none transition placeholder:text-white/28 focus:border-white/[0.18] focus:bg-white/[0.09]"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
              </div>

              <div className="relative grid gap-1.5">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/38">
                  What do you need help with?
                </span>
                <input name="type" type="hidden" value={contactTopic} />
                <button
                  aria-expanded={isTopicOpen}
                  className={cn(
                    "flex h-11 items-center justify-between gap-3 rounded-[1rem] border border-white/[0.08] bg-white/[0.06] px-3 pl-3.5 pr-5 text-left text-sm font-medium text-white outline-none transition focus:border-white/[0.18] focus:bg-white/[0.09]",
                    !contactTopic && "text-white/34",
                    isTopicOpen && "border-white/[0.18] bg-white/[0.09]",
                  )}
                  onClick={() => setIsTopicOpen((isOpen) => !isOpen)}
                  type="button"
                >
                  <span>{contactTopic || "Select a topic"}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-2xl leading-none text-white/62 transition",
                      isTopicOpen && "rotate-180 text-white/78",
                    )}
                  >
                    ▾
                  </span>
                </button>

                {isTopicOpen ? (
                  <div className="absolute left-0 right-0 top-[4.35rem] z-30 overflow-hidden rounded-[1rem] border border-white/[0.12] bg-[#17191d]/95 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                    {contactTopicOptions.map((topic) => (
                      <button
                        className={cn(
                          "flex h-9 w-full items-center rounded-[0.75rem] px-3 text-left text-sm font-medium text-white/66 transition hover:bg-white/[0.08] hover:text-white",
                          contactTopic === topic && "bg-white/[0.1] text-white",
                        )}
                        key={topic}
                        onClick={() => {
                          setContactTopic(topic);
                          setIsTopicOpen(false);
                        }}
                        type="button"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <label className="grid gap-1.5">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/38">
                  Message
                </span>
                <textarea
                  className="min-h-28 resize-none rounded-[1rem] border border-white/[0.08] bg-white/[0.06] px-3 py-3 text-sm font-medium leading-6 text-white outline-none transition placeholder:text-white/28 focus:border-white/[0.18] focus:bg-white/[0.09]"
                  name="message"
                  placeholder="Tell me what you’re building or stuck on."
                  required
                />
              </label>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition hover:bg-white/88 active:scale-[0.985] disabled:cursor-not-allowed disabled:bg-white/45 disabled:text-black/55 sm:w-fit sm:px-6"
                  disabled={contactStatus === "sending"}
                  type="submit"
                >
                  {contactStatus === "sending" ? "Sending..." : "Send message"}
                </button>

                {contactMessage ? (
                  <p
                    className={cn(
                      "text-sm font-medium",
                      contactStatus === "success" ? "text-[#34C759]" : "text-[#FF9F0A]",
                    )}
                  >
                    {contactMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </AboutSurface>
    </div>
  );
}
