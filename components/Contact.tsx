"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { fadeUp, stagger } from "@/hooks/useAnimationVariants";

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
    <section id="contact" className="section-padding">
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
            CONTACT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 max-w-xl leading-tight"
          >
            Let&apos;s work together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-500 dark:text-gray-400 font-body mb-16 max-w-md"
          >
            Have a project in mind or want to chat? I&apos;m open to new
            opportunities and collaborations.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-4xl">
            {/* Left: contact info */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div>
                <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">
                  EMAIL
                </p>
                <a
                  href="mailto:redikawest@gmail.com"
                  className="text-xl font-display font-semibold text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  redikawest@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-3">
                  SOCIAL
                </p>
                <div className="flex flex-col gap-2">
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
                      className="inline-flex items-center gap-3 text-sm font-body text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
                    >
                      <Icon size={15} className="shrink-0" />
                      <span>{handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-body text-gray-500 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                    <CheckCircle className="text-emerald-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">
                      Message sent!
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-body bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-body bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-body bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm font-body text-white bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 transition-colors duration-200"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
