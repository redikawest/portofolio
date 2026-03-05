"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { staggerContainer, fadeInUp, fadeIn } from "@/hooks/useAnimationVariants";

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium font-mono bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="block text-gray-900 dark:text-white">Fullstack</span>
          <span className="block text-gradient">Web Engineer</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          I build{" "}
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            scalable, high-performance
          </span>{" "}
          web applications — from elegant frontends to robust backend
          architectures.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            className="px-6 py-3 rounded-2xl font-medium text-sm font-body text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 rounded-2xl font-medium text-sm font-body text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/redikawest",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/redikawest",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:redikawest@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800/60 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
