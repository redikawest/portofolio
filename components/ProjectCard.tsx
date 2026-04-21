"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Project } from "@/types";
import { fadeUp } from "@/hooks/useAnimationVariants";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-300 overflow-hidden cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Image with hover overlay */}
      <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.image ?? "/projects/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-indigo-900/70 flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Eye size={18} className="text-white" />
          </div>
          <span className="text-white text-xs font-mono tracking-widest uppercase">
            View Details
          </span>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-indigo-500/90 text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <span className="font-display font-bold text-lg text-gray-200 dark:text-gray-800 select-none shrink-0 ml-2">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-body flex-1 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-700">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
