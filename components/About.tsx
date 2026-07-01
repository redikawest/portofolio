"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const techPills = [
  "Laravel", "Next.js", "React.js", "Express.js",
  "PHP", "TypeScript", "JavaScript",
  "PostgreSQL", "MySQL", "Redis",
  "Tailwind CSS", "Docker",
];

const stats = [
  { value: 4, suffix: "+", label: "EXPERIENCE", unit: "yrs" },
  { value: 7, suffix: "+", label: "PROJECTS", unit: "shipped" },
  { value: 5, suffix: "", label: "COMPANIES", unit: "" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const { ref: statsRef, isInView: statsVisible } = useInView(0.3);

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
            className="font-mono text-xs tracking-widest text-muted mb-4"
          >
            ABOUT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-ink mb-12 max-w-2xl leading-tight"
          >
            Building things for the web.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-muted text-lg leading-relaxed font-body">
                I&apos;m{" "}
                <span className="text-ink font-medium">Redika Westama Putra</span>, a Fullstack
                Web Engineer with 4+ years of experience crafting production-grade web
                applications. I specialize in bridging elegant frontends with high-performance
                backend systems.
              </p>
              <p className="text-muted text-lg leading-relaxed font-body">
                My core stack is{" "}
                <span className="text-ink font-medium">Laravel and Next.js</span>, backed by
                PostgreSQL or MySQL. I care about code quality, developer experience, and shipping
                things that work.
              </p>

              {/* Shimmer tech pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {techPills.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                    className="group relative px-3 py-1.5 rounded-lg text-xs font-mono text-muted overflow-hidden border border-hairline/25 bg-surface hover:text-accent hover:border-accent/40 transition-colors duration-300 shadow-sm"
                  >
                    {/* shimmer sweep on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-transform duration-700 ease-in-out" />
                    <span className="relative">{tech}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Status readout */}
            <motion.div variants={fadeUp} ref={statsRef as React.Ref<HTMLDivElement>} className="space-y-8">
              <div className="rounded-xl border border-hairline/20 bg-surface font-mono text-sm overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-hairline/15 bg-canvas/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] tracking-widest text-muted">record://about</span>
                </div>
                <div className="divide-y divide-hairline/10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between px-4 py-3">
                      <span className="text-muted text-xs tracking-wide">{stat.label}</span>
                      <span className="text-ink font-semibold">
                        <CountUp target={stat.value} suffix={stat.suffix} active={statsVisible} />
                        {stat.unit && <span className="text-muted font-normal ml-1.5">{stat.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Location", value: "Bali, Indonesia" },
                  { label: "Focus", value: "Fullstack Web Development" },
                  { label: "Status", value: "Open to opportunities" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-muted/70 w-20 shrink-0">{label}</span>
                    <span className="text-sm font-body text-ink">{value}</span>
                  </div>
                ))}
              </div>

              {/* Glass card accent */}
              <div className="glass-card rounded-2xl p-5 mt-4 shadow-sm">
                <p className="text-xs font-mono text-accent mb-1">Current role</p>
                <p className="text-sm font-body text-ink/80">
                  Fullstack Developer @{" "}
                  <span className="text-ink font-medium">All Good Bud</span>
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Bali, Indonesia · Contract
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
