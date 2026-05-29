import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <SectionHeading
        description="Professional work is summarized carefully without exposing confidential client details."
        eyebrow="Experience"
        title="Enterprise iOS/client work"
      />

      <div className="space-y-4">
        {experience.map((item) => (
          <Card className="p-5" key={`${item.company}-${item.role}`}>
            <p className="text-sm font-medium text-white/42">{item.role}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.company}</h3>
            <p className="mt-3 text-sm leading-6 text-white/62">{item.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
