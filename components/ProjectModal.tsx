"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto bg-surface"
              style={{
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(196,98,45,0.15)",
                boxShadow: "0 0 40px rgba(196,98,45,0.08), 0 40px 80px rgba(0,0,0,0.12)",
              }}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-canvas text-muted hover:text-ink hover:bg-canvas/70 border border-hairline/25 transition-all duration-150"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative w-full h-56 sm:h-72 bg-canvas overflow-hidden">
                <Image
                  src={project.image ?? "/projects/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2">
                <p className="font-mono text-[10px] tracking-widest text-muted mb-1">
                  {project.domain}
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3 leading-tight">
                  {project.title}
                </h2>

                <p className="text-sm text-muted leading-relaxed font-body mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-accent/5 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium font-body text-paper bg-accent hover:bg-accent/90 transition-all duration-200"
                      style={{ boxShadow: "0 0 20px rgba(196,98,45,0.3)" }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium font-body text-muted border border-hairline/25 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
