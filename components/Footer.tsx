"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/60 dark:border-gray-800/60 bg-white/30 dark:bg-gray-950/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-xs font-display">
                R
              </div>
              <span className="font-display font-bold text-gray-900 dark:text-white text-sm">
                Redika<span className="text-cyan-500">.</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-body">
              © {new Date().getFullYear()} Redika Westama Putra. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/redikawest", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/redikawest", label: "LinkedIn" },
              { icon: Mail, href: "mailto:redikawest@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
