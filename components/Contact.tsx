"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function MagneticButton({
  children,
  className,
  disabled,
  type,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * 0.28, y: (e.clientY - cy) * 0.28 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm font-body bg-surface border border-hairline/25 text-ink placeholder:text-muted/60 transition-all duration-200 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/15 shadow-sm";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-muted/[0.04] blur-[100px]"
          animate={{ scale: [1.1, 0.95, 1.1], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container-max relative">
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
            CONTACT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-ink mb-6 max-w-xl leading-tight"
          >
            Let&apos;s work together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted font-body mb-16 max-w-md"
          >
            Have a project in mind or want to chat? I&apos;m open to new opportunities and
            collaborations.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-4xl">
            {/* Left: contact info */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div>
                <p className="text-xs font-mono text-muted/70 mb-2">EMAIL</p>
                <a
                  href="mailto:redikawest@gmail.com"
                  className="text-xl font-display font-semibold text-ink hover:text-accent transition-colors duration-200"
                >
                  redikawest@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-muted/70 mb-3">SOCIAL</p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      handle: "@redikawest",
                      href: "https://github.com/redikawest",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      handle: "Redika Westama Putra",
                      href: "https://linkedin.com/in/redikawest",
                    },
                  ].map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm font-body text-muted hover:text-ink transition-colors duration-200"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-hairline/25 bg-surface group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200 shadow-sm">
                        <Icon size={15} />
                      </div>
                      <span>{handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-body text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                Available for full-time roles and freelance
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={fadeUp}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center">
                    <CheckCircle className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink mb-1">Message sent!</h3>
                    <p className="text-sm text-muted font-body">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-accent hover:text-accent/80 transition-colors"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-muted/70 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-muted/70 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted/70 mb-2">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm font-body text-paper bg-accent hover:bg-accent/90 disabled:opacity-60 transition-all duration-200"
                    style={{
                      boxShadow: loading ? "none" : "0 4px 20px rgba(196,98,45,0.3)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
