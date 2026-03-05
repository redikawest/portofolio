"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[3px] z-[9999] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 transition-all duration-100"
    />
  );
}
