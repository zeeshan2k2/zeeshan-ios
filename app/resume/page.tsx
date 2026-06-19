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
        <section
          className="relative overflow-hidden border backdrop-blur-2xl backdrop-saturate-125"
          style={{
            background:
              "linear-gradient(145deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.04) 48%, rgba(255, 255, 255, 0.018) 100%), rgba(20, 21, 25, 0.4)",
            borderColor: "rgba(255, 255, 255, 0.16)",
            borderRadius: "1.75rem",
            boxShadow:
              "inset 0 1px 0 rgba(255, 255, 255, 0.24), inset 0 -1px 0 rgba(0, 0, 0, 0.14), 0 20px 48px rgba(0, 0, 0, 0.26)",
          }}
        >
          <div className="relative z-10 p-3 sm:p-4">
            <ResumeViewer pdfPath={RESUME_PDF_PATH} />
          </div>
        </section>
      </SectionReveal>
    </PageTransition>
  );
}
