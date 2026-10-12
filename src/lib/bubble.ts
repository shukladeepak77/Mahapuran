import type { CSSProperties } from "react";

// 18 distinct colours, one per Purana, cycling if ever extended.
export const bubbleColors = [
  "#c2410c", // saffron orange
  "#9f1239", // deep rose/crimson
  "#0f766e", // teal
  "#4338ca", // royal indigo
  "#b45309", // deep amber-gold (Shreemad Bhagwat — external link)
  "#15803d", // emerald green
  "#7e22ce", // royal purple
  "#be123c", // ruby red
  "#0369a1", // deep sky blue
  "#a16207", // bronze
  "#6d28d9", // violet
  "#047857", // forest green
  "#b91c1c", // brick red
  "#1d4ed8", // cobalt blue
  "#92400e", // sienna
  "#581c87", // deep purple
  "#065f46", // deep teal-green
  "#78350f", // deep brown-gold
];

export function bubbleStyle(color: string, active: boolean): CSSProperties {
  return {
    background: `linear-gradient(135deg, ${color}ea 0%, ${color}b8 55%, ${color}d8 100%)`,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: active
      ? "1px solid rgba(255,255,255,0.85)"
      : "1px solid rgba(255,255,255,0.4)",
    boxShadow: active
      ? "inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.15), 0 6px 18px rgba(0,0,0,0.28)"
      : "inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -8px 14px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.15)",
  };
}
