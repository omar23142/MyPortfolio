"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaLinkedin,
  FaRegCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("almgoshomar10@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  const contactDetails = [
    {
      icon: <FaEnvelope className="text-blue-600 w-5 h-5" />,
      label: "Email Address",
      value: "almgoshomar10@gmail.com",
      action: handleCopyEmail,
      actionText: copiedEmail ? "Copied!" : "Copy",
      isCopyable: true,
    },
    {
      icon: <FaMapMarkerAlt className="text-emerald-600 w-5 h-5" />,
      label: "Location",
      value: "Damascus, Syria",
      actionText: "Open Map",
      link: "https://maps.google.com/?q=Damascus,Syria",
    },
    {
      icon: <FaGithub className="text-zinc-800 w-5 h-5" />,
      label: "GitHub Profile",
      value: "github.com/omar23142",
      actionText: "Visit Profile",
      link: "https://github.com/omar23142/",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 pb-24">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-[120px] -z-10" />

      <main className="relative max-w-6xl mx-auto px-6 pt-16 z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FaEnvelope className="text-[10px]" /> Contact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 bg-clip-text text-transparent"
          >
            Let's Build Something Great
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light"
          >
            Have a project idea, a job opportunity, or just want to chat about software engineering? 
            Reach out through the form or any of my channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact details list - Column 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-xl font-bold text-zinc-800 mb-6">Contact Information</h2>

            {contactDetails.map((detail, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="p-3 bg-slate-50 rounded-xl flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {detail.label}
                  </span>
                  <span className="block text-sm font-semibold text-zinc-800 truncate mb-3">
                    {detail.value}
                  </span>

                  {/* Actions buttons */}
                  {detail.isCopyable ? (
                    <button
                      onClick={detail.action}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                        copiedEmail
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-slate-50 text-zinc-600 border-slate-200 hover:bg-slate-100 hover:text-zinc-800"
                      }`}
                    >
                      <FaRegCopy size={11} />
                      {detail.actionText}
                    </button>
                  ) : detail.link ? (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 text-zinc-600 hover:bg-slate-100 hover:text-zinc-800 border border-slate-200 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                    >
                      <FaExternalLinkAlt size={10} />
                      {detail.actionText}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}

            {/* Social box Card */}
            <div className="bg-gradient-to-tr from-blue-700 to-indigo-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-blue-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold mb-2">Let's Connect</h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-6 font-light">
                I'm active on GitHub and open to discussing engineering opportunities, collaborative builds, and technical consults.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/omar23142/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors cursor-pointer border border-white/10"
                >
                  <FaGithub /> GitHub
                </a>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold self-center ml-auto">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  Open for opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form - Column 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-zinc-800 mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-zinc-500 uppercase mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Collaboration Opportunities"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Hey Omar, I saw your portfolio and loved your Bulls & Cows final project. Let's discuss..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-zinc-800"
                />
              </div>

              {/* Submit / Status Box */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    submitSuccess
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 disabled:bg-blue-400"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching Message...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <FaCheckCircle className="text-sm animate-bounce" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={11} />
                      Transmit Message
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex gap-3 text-emerald-800 mt-4"
                  >
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold">Transmission Complete</h4>
                      <p className="text-[11px] text-emerald-600 leading-relaxed mt-1">
                        Thank you for reaching out! A simulated message has been processed successfully. 
                        For immediate queries, you can reach out directly via my email.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
