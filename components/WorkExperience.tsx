"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Freelance" | "Contract" | "Internship";
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
  techStack: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    role: "Fullstack Web Developer",
    company: "All Good Bud",
    companyUrl: "https://allgoodbud.com/",
    location: "Bali, Indonesia",
    type: "Contract",
    startDate: "Sept 2023",
    endDate: "Present",
    current: true,
    achievements: [
      "Developed RESTful APIs for CannDr Apps, ensuring secure and scalable backend services",
      "Developed the Web Admin Portal for CannDr Apps to streamline operational management and reporting",
      "Designed and developed backend APIs for Pingpong Apps",
      "Optimized Pingpong APIs and improved system performance through query and logic optimization",
      "Implemented real-time update features for Pingpong Apps to improve live data synchronization",
      "Developed customer service system to replace Zendesk, reducing third-party dependency and costs",
    ],
    techStack: ["Laravel", "Next.js", "TypeScript", "PHP", "PostgreSQL", "Redis"],
  },
  {
    id: "2",
    role: "Fullstack Web Developer",
    company: "GlobalXtreme",
    companyUrl: "https://globalxtreme.net/id",
    location: "Bali, Indonesia",
    type: "Contract",
    startDate: "Dec 2021",
    endDate: "Aug 2023",
    current: false,
    achievements: [
      "Designed and built Social WiFi Web using Laravel and React.js, handling both backend and frontend",
      "Translated Figma designs into responsive and reusable frontend components",
      "Designed relational database schema and developed RESTful APIs",
      "Integrated UniFi Controller and OpenNDS for captive portal authentication workflows",
      "Integrated Klaviyo & Mailchimp for automated email marketing and user engagement",
    ],
    techStack: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Mailchimp", "OpenNDS", "Unifi"],
  },
  {
    id: "3",
    role: "Backend Developer",
    company: "Sprout Digital Labs",
    companyUrl: "https://sprout.co.id/",
    location: "BSD, Indonesia",
    type: "Contract",
    startDate: "Aug 2021",
    endDate: "Dec 2021",
    current: false,
    achievements: [
      "Developed RESTful APIs for Web Admin, Landing Page, and Mobile Applications using Express.js",
      "Designed and managed MongoDB database structure to support application data flow",
      "Deployed backend services using AWS Serverless architecture",
      "Collaborated with frontend and mobile developers to ensure seamless API integration",
    ],
    techStack: ["Express.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    id: "4",
    role: "Fullstack Web Developer",
    company: "Etuya Enviro Alfa",
    companyUrl: "https://etuya.id",
    location: "Remote",
    type: "Freelance",
    startDate: "Jun 2024",
    endDate: "Feb 2026",
    current: false,
    achievements: [
      "Developed and maintained backend services for the Climate Budget Tagging (CBT) platform using Laravel",
      "Implemented frontend features using React.js and TypeScript, converting UI designs into reusable components",
      "Integrated frontend and backend systems to enable reliable data processing",
      "Designed database schema using PostgreSQL",
    ],
    techStack: ["Laravel", "PHP", "React.js", "PostgreSQL", "Bootstrap"],
  },
  {
    id: "5",
    role: "Frontend Developer",
    company: "Seeds",
    companyUrl: "https://seeds.finance/",
    location: "Remote",
    type: "Freelance",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    current: false,
    achievements: [
      "Developed and maintained the Seeds web application using Next.js, improving user experience",
      "Built and optimized the Seeds Admin Dashboard to streamline internal operations",
      "Collaborated with backend teams to integrate RESTful APIs and ensure seamless data synchronization",
      "Implemented responsive UI and reusable components to improve development scalability",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-mono text-xs tracking-widest text-muted mb-4"
          >
            EXPERIENCE
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-display text-4xl sm:text-5xl font-bold text-ink mb-16 max-w-xl leading-tight"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative max-w-3xl">
            {/* Timeline rule — drawn as an SVG path reveal */}
            <div className="absolute left-0 top-2 bottom-2 w-px hidden sm:block">
              <svg className="absolute inset-0 h-full w-px overflow-visible" viewBox="0 0 1 1" preserveAspectRatio="none">
                <line x1="0.5" y1="0" x2="0.5" y2="1" className="stroke-hairline/20" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                <motion.line
                  x1="0.5" y1="0" x2="0.5" y2="1"
                  className="stroke-accent"
                  strokeWidth={1.5}
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, index) => {
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                    className="relative sm:pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-4 hidden sm:flex items-center justify-center -translate-x-[3px] z-10">
                      {exp.current ? (
                        <div className="relative w-2.5 h-2.5">
                          <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                          <div className="relative w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(196,98,45,0.6)]" />
                        </div>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-canvas border border-hairline/40" />
                      )}
                    </div>

                    {/* Card */}
                    <div className="glass-card-hover rounded-2xl p-6 shadow-sm">
                      {/* Date + type */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-muted/70">
                          {exp.startDate} — {exp.endDate}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-hairline/30 text-muted bg-canvas/40">
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            HEAD
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <h3 className="font-display font-bold text-xl text-ink mb-0.5">
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-1.5 mb-4">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-body text-accent hover:text-accent/80 transition-colors"
                          >
                            {exp.company}
                            <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span className="text-sm font-body text-muted">{exp.company}</span>
                        )}
                        <span className="text-hairline/60">·</span>
                        <span className="text-sm font-body text-muted/70">{exp.location}</span>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted font-body leading-relaxed"
                          >
                            <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-hairline/60" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-canvas/40 text-muted border border-hairline/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
