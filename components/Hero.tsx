"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { fadeUp, stagger } from "@/hooks/useAnimationVariants";

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16"
    >
      <motion.div
        className="w-full max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile photo */}
          <motion.div variants={fadeUp} className="shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 blur-xl opacity-30 scale-110" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full ring-4 ring-indigo-500/20 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Redika Westama Putra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 shadow-sm whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6"
            >
              <span className="block text-gray-900 dark:text-white">Fullstack</span>
              <span className="block text-gradient">Web Engineer</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-10 font-body leading-relaxed"
            >
              Building scalable web applications — from elegant frontends to robust
              backend architectures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="px-6 py-3 rounded-xl font-medium text-sm font-body text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 rounded-xl font-medium text-sm font-body text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 bg-transparent transition-colors duration-200"
              >
                Contact Me
              </button>
              <a
                href="/cv.pdf"
                download="Redika_Westama_Putra_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm font-body text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 bg-transparent transition-colors duration-200"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/redikawest", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/redikawest", label: "LinkedIn" },
                { icon: Mail, href: "mailto:redikawest@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
