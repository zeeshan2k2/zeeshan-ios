import type { ReactNode } from "react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type AppWindowProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
};

export function AppWindow({ actions, children, description, eyebrow, title }: AppWindowProps) {
  return (
    <Card className="overflow-hidden ring-1 ring-white/[0.03]">
      <div className="border-b border-white/10 bg-[#1c1c1e]/82 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge>{eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm leading-6 text-white/58 sm:text-base sm:leading-7">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-2 lg:justify-end">{actions}</div> : null}
        </div>
      </div>

      <div className="bg-[#101116]/76 p-4 sm:p-6">{children}</div>
    </Card>
  );
}
