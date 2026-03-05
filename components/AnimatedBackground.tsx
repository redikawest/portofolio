"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle, #0ea5e9 0%, #6366f1 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-8"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, transparent 70%)",
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-5"
        style={{
          background:
            "radial-gradient(circle, #22d3ee 0%, #818cf8 60%, transparent 80%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
