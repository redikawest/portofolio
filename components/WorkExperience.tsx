// components/WorkExperience.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/hooks/useAnimationVariants";

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
  description: string;
  achievements: string[];
  techStack: string[];
  color: string;
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
    description: "",
    achievements: [
        "Developed RESTful APIs for CannDr Apps, ensuring secure and scalable backend services",
        "Developed the Web Admin Portal for CannDr Apps to streamline operational management and reporting.",
        "Designed and developed backend APIs for Pingpong Apps.",
        "Optimized Pingpong APIs and improved system performance through query and logic optimization",
        "Implemented real-time update features for Pingpong Apps to improve live data synchronization and user experience.",
        "Developed customer service system to replace Zendesk, reducing third-party dependency and operational costs.",
    ],
    techStack: ["Laravel", "Next.js", "TypeScript", "PHP", "PostgreSQL", "Redis"],
    color: "from-cyan-400 to-sky-500",
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
    description: "",
    achievements: [
        "Design and build Social WiFi Web using Laravel and React.js, handling both backend and frontend development",
        "Translated Figma designs into responsive and reusable frontend components",
        "Designed relational database schema and developed RESTful APIs",
        "Integrated frontend application with backend APIs to ensure seamless data flow and system reliability",
        "Implemented integration with UniFi Controller and OpenNDS to manage access point authentication and captive portal workflows",
        "Integrated email marketing services (Klaviyo & Mailchimp) for automated campaign and user engagement workflows",
        "Conducted manual testing and performed production deployment to ensure system stability",
    ],
    techStack: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Figma", "Mailchimp", "Open NDS", "Unifi"],
    color: "from-violet-400 to-purple-600",
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
    description: "",
    achievements: [
        "Developed RESTful APIs for Web Admin, Landing Page, and Mobile Applications using Express.js",
        "Designed and managed MongoDB database structure to support application data flow",
        "Deployed backend services using AWS Serverless architecture",
        "Collaborated with frontend and mobile developers to ensure seamless API integration",
    ],
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "REST API"],
    color: "from-emerald-400 to-teal-500",
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
    description: "",
    achievements: [
        "Developed and maintained backend services for the Climate Budget Tagging (CBT) platform using Laravel, ensuring secure and scalable API architecture",
        "Implemented frontend features using React.js and TypeScript, converting UI designs into reusable and maintainable components",
        "Integrated frontend and backend systems to enable reliable data processing",
        "Designed database schema using PostgreSQL",
    ],
    techStack: ["PHP", "Laravel", "Bootstrap", "jQuery", "MySQL"],
    color: "from-amber-400 to-orange-500",
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
    description: "",
    achievements: [
        "Developed and maintained the Seeds web application using Next.js, improving user experience",
        "Built and optimized the Seeds Admin Dashboard to streamline internal operations and improve data management efficiency",
        "Collaborated with backend teams to integrate RESTful APIs and ensure seamless data synchronization",
        "Implemented responsive UI and reusable components to improve development scalability and maintainability",
    ],
    techStack: ["NextJs", "TypeScript", "Tailwind Css", "Redux"],
    color: "from-cyan-400 to-sky-500",
  },
];

const typeColors: Record<Experience["type"], string> = {
  "Full-time":  "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40",
  "Freelance":  "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-200/60 dark:border-violet-800/40",
  "Contract":   "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40",
  "Internship": "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/40",
};

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
        <div className="container-max">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="font-mono text-xs tracking-widest text-cyan-500 mb-3">
                        CAREER
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Work <span className="text-gradient">experience</span>
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-body">
                        4+ years of building real-world products across agencies, startups, and enterprise teams.
                    </p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={fadeInLeft}
                                custom={index}
                                transition={{ delay: index * 0.1 }}
                                className="relative sm:pl-16"
                            >
                                <div className="absolute left-0 top-6 hidden sm:flex">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                                        <Briefcase size={18} className="text-white" />
                                    </div>
                                </div>

                                <motion.div
                                    className="card-glass rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 group"
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                                                    {exp.role}
                                                </h3>
                                                {exp.current && (
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                {exp.companyUrl ? (
                                                    <a href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline font-body"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={12} />
                                                    </a>
                                                ) : (
                                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-body">
                                                        {exp.company}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${typeColors[exp.type]}`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400 font-body">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            {exp.startDate} — {exp.endDate}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-body mb-5">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-2 mb-5">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400 font-body">
                                                <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
                                        {exp.techStack.map((tech) => (
                                            <span key={tech}
                                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200/80 dark:border-gray-700/60"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}