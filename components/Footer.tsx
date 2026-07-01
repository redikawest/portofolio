"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-hairline/15">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-display font-bold text-ink">
            rw<span className="text-accent">.</span>
          </span>
          <p className="text-xs font-body text-muted/70">
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
              className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-ink border border-hairline/25 hover:border-accent/40 hover:bg-accent/5 transition-all shadow-sm"
            >
              <Icon size={14} />
            </a>
          ))}

          <div className="w-px h-4 bg-hairline/25 mx-1" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-ink border border-hairline/25 hover:border-accent/40 hover:bg-accent/5 transition-all shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
