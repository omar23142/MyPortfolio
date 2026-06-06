"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaPhone, FaRegCopy, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("almgoshomar10@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 pb-24">
      <main className="relative max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-zinc-500"
          >
            Feel free to reach out if you have a project idea, a job opportunity, or just want to say hi.
          </motion.p>
        </div>

        <div className="max-w-lg mx-auto space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <FaEnvelope className="text-blue-600 w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
              <p className="text-sm font-semibold text-zinc-800 truncate mt-0.5 mb-2">
                almgoshomar10@gmail.com
              </p>
              <button
                onClick={copyEmail}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  copiedEmail
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-slate-50 text-zinc-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <FaRegCopy size={11} />
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <FaMapMarkerAlt className="text-emerald-600 w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-sm font-semibold text-zinc-800 mt-0.5 mb-2">Damascus, Syria</p>
              <a
                href="https://maps.google.com/?q=Damascus,Syria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 text-zinc-600 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-all"
              >
                <FaExternalLinkAlt size={10} />
                Open Map
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 rounded-xl">
              <FaGithub className="text-zinc-800 w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</p>
              <p className="text-sm font-semibold text-zinc-800 mt-0.5 mb-2">github.com/omar23142</p>
              <a
                href="https://github.com/omar23142/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 text-zinc-600 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-all"
              >
                <FaExternalLinkAlt size={10} />
                Visit Profile
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 rounded-xl">
              <FaPhone className="text-zinc-800 w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</p>
              <p className="text-sm font-semibold text-zinc-800 mt-0.5 mb-2">0936588463</p>
            </div>
          </div>

          <div className="bg-blue-700 rounded-3xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Let's Connect</h3>
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              I'm on GitHub and always open to discussing new projects or opportunities.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/omar23142/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors border border-white/10"
              >
                <FaGithub /> GitHub
              </a>
              <span className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Open for opportunities
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
