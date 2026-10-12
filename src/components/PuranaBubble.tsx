import Link from "next/link";
import type { Purana } from "@/content/puranas";
import { bubbleColors, bubbleStyle } from "@/lib/bubble";

export default function PuranaBubble({
  purana,
  active = false,
}: {
  purana: Purana;
  active?: boolean;
}) {
  const color = bubbleColors[(purana.id - 1) % bubbleColors.length];

  // Shreemad Bhagwat (id 5) has its own complete, independent site —
  // always shown as available, linking out to it instead of to a local
  // page, regardless of its own `available` flag.
  if (purana.externalUrl) {
    return (
      <a
        href={purana.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={bubbleStyle(color, active)}
        className="group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="font-devanagari relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-extrabold text-white ring-1 ring-white/40">
          {purana.id}
        </span>
        <span className="relative min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide text-white/75">
            {purana.subtitle}
          </span>
          <span className="font-devanagari block truncate text-lg font-extrabold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
            {purana.title}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="relative shrink-0 rounded-full bg-white/15 px-2 py-1 text-[10px] font-bold text-white/90 ring-1 ring-white/30"
        >
          पृथक साइट ↗
        </span>
      </a>
    );
  }

  if (!purana.available) {
    return (
      <div
        className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-dashed border-foreground/20 bg-foreground/5 px-4 py-3 opacity-60"
        aria-label={`${purana.title} — जल्द आ रहा है`}
      >
        <span className="font-devanagari flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-extrabold text-foreground/60">
          {purana.id}
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {purana.subtitle}
          </span>
          <span className="font-devanagari block truncate text-base font-bold text-foreground/60">
            {purana.title}
          </span>
        </span>
        <span className="font-devanagari ml-auto shrink-0 rounded-full bg-foreground/10 px-2.5 py-1 text-[10px] font-bold text-foreground/60">
          जल्द ही
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/purana/${purana.id}`}
      style={bubbleStyle(color, active)}
      className="group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/40 to-transparent"
      />
      <span className="font-devanagari relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-extrabold text-white ring-1 ring-white/40">
        {purana.id}
      </span>
      <span className="relative min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-white/75">
          {purana.subtitle}
        </span>
        <span className="font-devanagari block truncate text-lg font-extrabold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
          {purana.title}
        </span>
      </span>
    </Link>
  );
}
