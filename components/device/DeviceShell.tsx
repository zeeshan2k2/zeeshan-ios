import type { ReactNode } from "react";

import { IPadFrame } from "@/components/device/IPadFrame";
import { IPhoneFrame } from "@/components/device/IPhoneFrame";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteNav } from "@/components/layout/SiteNav";

type DeviceShellProps = {
  children: ReactNode;
};

export function DeviceShell({ children }: DeviceShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden px-0 text-white md:flex md:items-center md:justify-center md:px-4 md:py-6 lg:px-6">
      <div className="relative flex min-h-screen w-full flex-col bg-[#080a0f] md:h-[min(86vh,940px)] md:min-h-0 md:max-w-[1320px] md:rounded-[3.5rem] md:border md:border-white/14 md:bg-[#0a0b0f] md:p-3 md:shadow-[0_38px_140px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.12)] lg:p-4">
        <IPadFrame />

        <div className="relative min-h-screen flex-1 overflow-hidden md:min-h-0 md:rounded-[2.75rem] md:border md:border-white/10 md:bg-[#080a0f] md:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_26%_0%,rgba(115,151,255,0.2),transparent_30rem),radial-gradient(circle_at_92%_8%,rgba(255,255,255,0.08),transparent_22rem)]" />
          <div className="device-screen-scroll relative z-10 min-h-screen md:h-full md:min-h-0 md:overflow-y-auto md:overscroll-contain">
            <IPhoneFrame />
            <SiteNav />
            {children}
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}
