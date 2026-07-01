"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none">
      <div className="absolute inset-0 bg-hairline/10" />
      <div
        className="absolute left-0 top-0 h-full bg-accent transition-all duration-100"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 8px rgba(196,98,45,0.5)",
        }}
      />
      {/* Glowing tip */}
      <div
        className="absolute top-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{
          left: `${progress}%`,
          transform: "translateX(-50%) translateY(-50%)",
          background: "radial-gradient(circle, rgba(196,98,45,0.8) 0%, transparent 70%)",
          opacity: progress > 0 && progress < 100 ? 1 : 0,
          transition: "left 100ms, opacity 200ms",
        }}
      />
    </div>
  );
}
