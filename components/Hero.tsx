"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#";

function useScramble(text: string, delay = 800) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < Math.floor(iteration)) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );
        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
        iteration += 0.35;
      }, 28);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return display;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const scrambled = useScramble("Web Engineer");

  const handleScroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -22, y: x * 22 });
    setGlarePos({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
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
          {/* Profile photo with 3D tilt */}
          <motion.div variants={fadeUp} className="shrink-0">
            <div
              ref={photoRef}
              className="relative"
              style={{ perspective: "800px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  transformStyle: "preserve-3d",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative"
              >
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-accent blur-2xl opacity-20 scale-110 animate-glow-pulse" />

                {/* Photo */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-2 ring-hairline/30 shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="Redika Westama Putra"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Glare overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-full transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
                      opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0,
                    }}
                  />
                </div>

                {/* Available badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-surface/90 text-accent border border-accent/25 shadow-sm whitespace-nowrap backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Available
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs tracking-widest text-muted mb-4"
            >
              FULLSTACK ENGINEER · BALI, INDONESIA
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6"
            >
              <span className="block text-ink">Fullstack</span>
              <span className="block text-gradient-hero font-mono">{scrambled}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted max-w-xl mb-10 font-body leading-relaxed"
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
                className="relative px-6 py-3 rounded-xl font-medium text-sm font-body text-paper overflow-hidden group bg-accent hover:bg-accent/90 transition-colors duration-200"
                style={{ boxShadow: "0 4px 20px rgba(196,98,45,0.3)" }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>

              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 rounded-xl font-medium text-sm font-body text-muted border border-hairline/30 hover:border-accent/40 hover:text-accent bg-surface hover:bg-accent/5 transition-all duration-200 shadow-sm"
              >
                Contact Me
              </button>

              <a
                href="/cv.pdf"
                download="Redika_Westama_Putra_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm font-body text-accent border border-accent/25 hover:border-accent/50 hover:bg-accent/5 bg-transparent transition-all duration-200"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-3"
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-muted hover:text-ink border border-hairline/30 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 shadow-sm"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Glowing scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-muted">
          Scroll
        </span>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hairline/40 to-transparent" />
          <motion.div
            className="absolute left-0 right-0 h-8"
            style={{
              background: "linear-gradient(to bottom, rgba(196,98,45,0), #C4622D, transparent)",
              boxShadow: "0 0 6px rgba(196,98,45,0.6)",
            }}
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
          />
        </div>
      </motion.button>
    </section>
  );
}
