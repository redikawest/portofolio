"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/hooks/useAnimationVariants";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Laravel Livewire"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "Node.js", "Express.js", "PHP", "REST API", "Microservices"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "Eloquent ORM"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Nginx", "GitHub Actions", "AWS", "Linux", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
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
            SKILLS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 max-w-xl leading-tight"
          >
            My tech stack.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <h3 className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 mb-4 uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-body text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
