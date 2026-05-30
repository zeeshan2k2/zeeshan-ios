type IPadFrameProps = {
  onPowerPress: () => void;
  onVolumeDown: () => void;
  onVolumeUp: () => void;
};

export function IPadFrame({ onPowerPress, onVolumeDown, onVolumeUp }: IPadFrameProps) {
  return (
    <div className="pointer-events-none hidden md:block">
      <button
        aria-label="Power"
        className="group pointer-events-auto absolute left-24 top-0 z-30 flex h-4 w-24 -translate-y-full items-end justify-center"
        onClick={onPowerPress}
        type="button"
      >
        <div className="h-1.5 w-20 rounded-t-full border border-b-0 border-white/12 bg-[#181a20] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.34)] transition-all duration-200 ease-out group-hover:h-3 group-hover:w-[5.6rem] group-hover:bg-[#23262d] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_16px_34px_rgba(0,0,0,0.46)] group-active:h-1.5 group-active:w-20 group-active:bg-[#14161b] group-active:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_18px_rgba(0,0,0,0.3)]" />
      </button>

      <button
        aria-label="Volume up"
        className="group pointer-events-auto absolute left-0 top-24 z-30 flex h-[4.75rem] w-4 -translate-x-full items-center justify-end"
        onClick={onVolumeUp}
        type="button"
      >
        <div className="h-16 w-1.5 rounded-l-full border border-r-0 border-white/12 bg-[#181a20] shadow-[inset_1px_0_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.34)] transition-all duration-200 ease-out group-hover:h-[4.5rem] group-hover:w-3 group-hover:bg-[#23262d] group-hover:shadow-[inset_1px_0_0_rgba(255,255,255,0.22),0_16px_34px_rgba(0,0,0,0.46)] group-active:h-16 group-active:w-1.5 group-active:bg-[#14161b] group-active:shadow-[inset_1px_0_0_rgba(255,255,255,0.1),0_6px_18px_rgba(0,0,0,0.3)]" />
      </button>
      <button
        aria-label="Volume down"
        className="group pointer-events-auto absolute left-0 top-44 z-30 flex h-[4.75rem] w-4 -translate-x-full items-center justify-end"
        onClick={onVolumeDown}
        type="button"
      >
        <div className="h-16 w-1.5 rounded-l-full border border-r-0 border-white/12 bg-[#181a20] shadow-[inset_1px_0_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.34)] transition-all duration-200 ease-out group-hover:h-[4.5rem] group-hover:w-3 group-hover:bg-[#23262d] group-hover:shadow-[inset_1px_0_0_rgba(255,255,255,0.22),0_16px_34px_rgba(0,0,0,0.46)] group-active:h-16 group-active:w-1.5 group-active:bg-[#14161b] group-active:shadow-[inset_1px_0_0_rgba(255,255,255,0.1),0_6px_18px_rgba(0,0,0,0.3)]" />
      </button>
    </div>
  );
}
