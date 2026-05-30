import { HomeWidgetScreen } from "@/components/home/HomeWidgetScreen";
import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";

export default function HomePage() {
  return (
    <PageTransition className="gap-0">
      <SectionReveal>
        <HomeWidgetScreen />
      </SectionReveal>
    </PageTransition>
  );
}
