import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/content/social";

export function Contact() {
  const email = socialLinks.find((link) => link.label === "Email");
  const github = socialLinks.find((link) => link.label === "GitHub");

  return (
    <section className="rounded-3xl border border-white/10 bg-[#1c1c1e]/62 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/42">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Building for Apple platforms and local AI.</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Open to iOS engineering opportunities, product-minded collaborations, and technical conversations around native apps and local AI systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {email ? (
            <Button href={email.href} variant="primary">
              Email
            </Button>
          ) : null}
          {github ? (
            <Button href={github.href} variant="secondary">
              GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
