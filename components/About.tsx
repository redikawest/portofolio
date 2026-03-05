"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Globe, Shield } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/hooks/useAnimationVariants";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Writing maintainable, well-structured code with SOLID principles and clean architecture patterns.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200/60 dark:border-cyan-800/40",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimizing for speed and scalability—from database query tuning to frontend bundle optimization.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200/60 dark:border-violet-800/40",
  },
  {
    icon: Globe,
    title: "Cloud Native",
    description:
      "Deploying and managing applications on AWS with Docker, CI/CD pipelines, and infrastructure as code.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
  },
  {
    icon: Shield,
    title: "Security Minded",
    description:
      "Implementing security best practices—OWASP guidelines, JWT auth, rate limiting, and secure API design.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200/60 dark:border-amber-800/40",
  },
];

const techPills = [
  "Laravel",
  "Next.js",
  "React.js",
  "Express.js",
  "PHP",
  "TypeScript",
  "Javascript",
  "Tailwind Css",
  "PostgreSQL",
  "MySQL",
  "Redis",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
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
              ABOUT ME
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Building the web,{" "}
              <span className="text-gradient">one layer at a time</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
                  I&apos;m a Fullstack Web Engineer with{" "}
                  <span className="text-gray-900 dark:text-white font-semibold">
                    4+ years of experience
                  </span>{" "}
                  crafting robust web applications that scale. I specialize in
                  bridging the gap between beautiful user interfaces and
                  high-performance backend systems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body mt-4">
                  My stack of choice revolves around{" "}
                  <span className="text-gray-900 dark:text-white font-semibold">
                    Laravel and Next.js
                  </span>
                  , backed by PostgreSQL for reliable data storage and AWS for
                  cloud infrastructure. I care deeply about developer experience,
                  code quality, and shipping products that users love.
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {techPills.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "4+", label: "Years Experience" },
                  { value: "50+", label: "Projects Shipped" },
                  { value: "20+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-body">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={fadeInRight}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className={`p-5 rounded-2xl border ${item.bg} ${item.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center mb-4 ${item.color}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
