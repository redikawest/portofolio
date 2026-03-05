"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { cardHover } from "@/hooks/useAnimationVariants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.07,
          },
        },
      }}
      initial="rest"
      whileHover="hover"
      className="group relative card-glass rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Gradient accent line */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <motion.div
        variants={cardHover}
        className="flex flex-col h-full p-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/50 dark:to-violet-950/50 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-violet-500">
            {project.title.charAt(0)}
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl !== "" &&
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`${project.title} GitHub`}
              >
                <Github size={15} />
              </motion.a>
            }
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink size={15} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-body flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200/80 dark:border-gray-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}
