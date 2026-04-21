"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "@/hooks/useAnimationVariants";

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

const typeColors: Record<Experience["type"], string> = {
  "Full-time": "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40",
  "Freelance": "bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800/40",
  "Contract": "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/40",
  "Internship": "bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800/40",
};

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
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
            EXPERIENCE
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 max-w-xl leading-tight"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeUp}
                  custom={index}
                  className="relative sm:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 hidden sm:flex items-center justify-center -translate-x-[3px]">
                    <div className={`w-1.5 h-1.5 rounded-full ${exp.current ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"}`} />
                  </div>

                  {/* Date + type */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono border ${typeColors[exp.type]}`}>
                      {exp.type}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-500 dark:text-indigo-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Role + company */}
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-body text-indigo-500 dark:text-indigo-400 hover:underline"
                      >
                        {exp.company}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-sm font-body text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </span>
                    )}
                    <span className="text-gray-300 dark:text-gray-700">·</span>
                    <span className="text-sm font-body text-gray-500 dark:text-gray-500">
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 font-body leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
