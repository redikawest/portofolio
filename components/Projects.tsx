"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="font-mono text-xs tracking-widest text-cyan-500 mb-3">
              PORTFOLIO
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Featured <span className="text-gradient">projects</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-body">
              A selection of things I&apos;ve built — from enterprise platforms to
              developer tools.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href="https://github.com/redikawest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-sm font-body text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View all on GitHub →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
