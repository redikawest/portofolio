"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/hooks/useAnimationVariants";

const techPills = [
  "Laravel", "Next.js", "React.js", "Express.js",
  "PHP", "TypeScript", "JavaScript",
  "PostgreSQL", "MySQL", "Redis",
  "Tailwind CSS", "Docker",
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "7+", label: "Projects Shipped" },
  { value: "5", label: "Companies" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-widest text-indigo-500 mb-4"
          >
            ABOUT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 max-w-2xl leading-tight"
          >
            Building things for the web.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
                I&apos;m{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Redika Westama Putra
                </span>
                , a Fullstack Web Engineer with 4+ years of experience crafting
                production-grade web applications. I specialize in bridging
                elegant frontends with high-performance backend systems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
                My core stack is{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Laravel and Next.js
                </span>
                , backed by PostgreSQL or MySQL. I care about code
                quality, developer experience, and shipping things that work.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-body leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800" />

              <div className="space-y-4">
                {[
                  { label: "Location", value: "Bali, Indonesia" },
                  { label: "Focus", value: "Fullstack Web Development" },
                  { label: "Status", value: "Open to opportunities" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-500 w-20 shrink-0">
                      {label}
                    </span>
                    <span className="text-sm font-body text-gray-700 dark:text-gray-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
