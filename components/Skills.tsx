"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/hooks/useAnimationVariants";

const icons = { Monitor, Server, Database, Cloud };

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
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
              EXPERTISE
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              My <span className="text-gradient">tech stack</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-body">
              Technologies I&apos;ve worked with extensively to build production-ready
              systems.
            </p>
          </motion.div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = icons[category.icon as keyof typeof icons];
              return (
                <motion.div
                  key={category.name}
                  variants={scaleIn}
                  className="card-glass rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {Icon && <Icon size={18} />}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-body">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                              delay: i * 0.05,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-200/60 dark:border-gray-700/60">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200/80 dark:border-gray-700/60 cursor-default"
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                          transition: { duration: 0.15 },
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
