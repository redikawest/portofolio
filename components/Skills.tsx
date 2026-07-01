"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Monitor, Server, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { Monitor, Server, Database, Cloud };

const SEGMENTS = 8;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SkillRow({ name, level, delay }: { name: string; level: number; delay: number }) {
  const filled = Math.round((level / 100) * SEGMENTS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      tabIndex={0}
      className="group flex items-center justify-between gap-4 py-2.5 border-b border-hairline/10 last:border-0 focus:outline-none"
    >
      <span className="text-sm font-mono text-ink/90 group-hover:text-accent group-focus:text-accent transition-colors">
        {name}
      </span>
      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <span key={i} className="w-2.5 h-1.5 rounded-[2px] bg-hairline/20 overflow-hidden">
              {i < filled && (
                <motion.span
                  className="block w-full h-full bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.15 + i * 0.03, duration: 0.3, ease: "easeOut" }}
                />
              )}
            </span>
          ))}
        </div>
        <span className="text-[10px] font-mono text-muted w-8 text-right opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
    </motion.div>
  );
}

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
            className="font-mono text-xs tracking-widest text-muted mb-4"
          >
            SKILLS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-ink mb-4 max-w-xl leading-tight"
          >
            My tech stack.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted/70 font-body text-sm mb-16">
            Hover or focus a skill to see proficiency
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-12">
            {skillCategories.map((group, gi) => {
              const Icon = ICONS[group.icon] ?? Monitor;
              return (
                <motion.div key={group.name} variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={16} className="text-accent" strokeWidth={1.75} />
                    <h3 className="text-xs font-mono tracking-widest text-muted uppercase">
                      {group.name}
                    </h3>
                    <div className="flex-1 h-px bg-hairline/15" />
                  </div>

                  <div>
                    {group.skills.map((skill, si) => (
                      <SkillRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={gi * 0.05 + si * 0.03}
                      />
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
