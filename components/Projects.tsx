"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-widest text-muted mb-4"
          >
            PROJECTS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-ink mb-16 max-w-xl leading-tight"
          >
            Things I&apos;ve built.
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelected}
              />
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-12">
            <a
              href="https://github.com/redikawest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-muted hover:text-ink transition-colors duration-200 group"
            >
              View more on GitHub
              <span className="text-accent group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
