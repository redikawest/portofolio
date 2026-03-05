"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/hooks/useAnimationVariants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding">
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
              GET IN TOUCH
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Let&apos;s <span className="text-gradient">work together</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-body">
              Have a project in mind or just want to chat? I&apos;m always open to
              discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* Left info */}
            <motion.div
              variants={fadeInLeft}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Info
                </h3>
                <a
                  href="mailto:redikawest@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-body"
                >
                  <Mail size={15} />
                  redikawest@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-3">
                  Social Links
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      href: "https://github.com/redikawest",
                      handle: "@redikawest",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/redikawest",
                      handle: "Redika Westama Putra",
                    },
                  ].map(({ icon: Icon, label, href, handle }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700/60 hover:border-cyan-300 dark:hover:border-cyan-700 bg-white/50 dark:bg-gray-900/30 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-all duration-200 group"
                      whileHover={{ x: 4 }}
                    >
                      <Icon
                        size={16}
                        className="text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors"
                      />
                      <div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 font-body">
                          {label}
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                          {handle}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    AVAILABLE
                  </span>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-400/80 font-body">
                  Open to full-time roles and freelance projects.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInRight} className="lg:col-span-3">
              <div className="card-glass rounded-2xl p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center py-8 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                      <CheckCircle className="text-emerald-500" size={32} />
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
                      className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors font-mono"
                    >
                      Send another →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 font-body">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-200 font-body"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 font-body">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-200 font-body"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 font-body">
                        Message
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-200 resize-none font-body"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm font-body text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-70"
                      whileHover={!loading ? { scale: 1.02, y: -1 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
