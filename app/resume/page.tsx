import type { Metadata } from "next";

import { PageTransition } from "@/components/motion/PageTransition";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { ResumeViewer } from "@/components/resume/ResumeViewer";
import { RESUME_PDF_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download the resume for Zeeshan Waheed.",
};

export default function ResumePage() {
  return (
    <PageTransition>
      <SectionReveal>
        <section className="relative overflow-hidden rounded-[2.15rem] border border-white/[0.07] bg-[rgba(28,28,30,0.5)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(38,175,168,0.24),transparent_20rem),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(28,28,30,0.2)_48%)]" />
          <div className="relative z-10 p-3 sm:p-4">
            <ResumeViewer pdfPath={RESUME_PDF_PATH} />
          </div>
        </section>
      </SectionReveal>
    </PageTransition>
  );
}
