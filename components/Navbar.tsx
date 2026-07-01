"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useThemeContext } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "border-b shadow-sm" : "bg-transparent"
        )}
        style={
          scrolled
            ? {
                background: "rgb(var(--color-surface) / 0.85)",
                backdropFilter: "blur(20px)",
                borderColor: "rgb(var(--color-hairline) / 0.15)",
              }
            : {}
        }
      >
        {/* Accent line at top when scrolled */}
        {scrolled && (
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(196,98,45,0.5), transparent)",
            }}
          />
        )}

        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-display font-bold text-ink text-lg tracking-tight"
          >
            rw
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-body text-muted hover:text-ink transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Redika_Westama_Putra_CV.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-accent border border-accent/25 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
            >
              <Download size={12} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-ink border border-hairline/25 hover:border-hairline/40 hover:bg-canvas/60 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={15} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={15} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-ink border border-hairline/25 hover:bg-canvas/60 transition-all"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden border-b border-hairline/15 shadow-md"
            style={{
              background: "rgb(var(--color-surface) / 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 text-sm font-body text-muted hover:text-ink rounded-lg hover:bg-canvas/60 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-hairline/15">
                <a
                  href="/cv.pdf"
                  download="Redika_Westama_Putra_CV.pdf"
                  className="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-body text-accent hover:bg-accent/5 rounded-lg transition-all"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
