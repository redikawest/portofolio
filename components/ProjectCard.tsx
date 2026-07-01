"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const x = (cx / rect.width - 0.5) * 2;
    const y = (cy / rect.height - 0.5) * 2;
    setTilt({ x: y * -8, y: x * 8 });
    setSpotlight({ x: cx, y: cy, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSpotlight((s) => ({ ...s, active: false }));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      ref={cardRef}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(project)}
    >
      <motion.div
        className="flex flex-col flex-1 rounded-2xl overflow-hidden bg-surface border border-hairline/15 shadow-sm"
        style={{ rotateX: tilt.x, rotateY: tilt.y, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Spotlight glow */}
        <div
          className="absolute inset-0 z-10 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            background: spotlight.active
              ? `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, rgba(196,98,45,0.06), transparent 70%)`
              : "none",
            opacity: spotlight.active ? 1 : 0,
          }}
        />

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "inset 0 0 0 1px rgba(196,98,45,0.3)" }}
        />

        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-canvas/60">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project.image ?? "/projects/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center border border-accent/25 bg-accent/10">
              <Eye size={18} className="text-accent" />
            </div>
            <span className="text-accent text-[10px] font-mono tracking-widest uppercase">
              View Details
            </span>
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-accent text-paper shadow-sm">
              Featured
            </span>
          )}

          {/* Domain tag */}
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-canvas/90 text-muted border border-hairline/25 backdrop-blur-sm">
            {project.domain}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display font-bold text-base text-ink group-hover:text-accent transition-colors duration-200 leading-snug mb-2">
            {project.title}
          </h3>

          <p
            className="text-xs text-muted leading-relaxed font-body flex-1 mb-4 overflow-hidden"
            style={{ maxHeight: "3.25em" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-canvas/40 text-muted border border-hairline/25"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-canvas/40 text-muted/70 border border-hairline/15">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
