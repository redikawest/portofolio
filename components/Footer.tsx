"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-display font-bold text-gray-900 dark:text-white">
            rw<span className="text-indigo-500">.</span>
          </span>
          <p className="text-xs font-body text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Redika Westama Putra
          </p>
        </div>

        <div className="flex items-center gap-2">
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
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <Icon size={14} />
            </a>
          ))}

          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
