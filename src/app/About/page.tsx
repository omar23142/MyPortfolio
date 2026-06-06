"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaBrain,
  FaArrowRight,
  FaLaptopCode,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiLinux,
  SiTypescript
} from "react-icons/si";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <FaLaptopCode className="text-blue-500 w-5 h-5" />,
      skills: [
        { name: "ReactJS", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML5 & CSS3", icon: <FaCode className="text-[#E34F26]" /> },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="text-emerald-500 w-5 h-5" />,
      skills: [
        { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <FaCode className="text-zinc-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      ],
    },
    {
      title: "Systems & Security",
      icon: <FaShieldAlt className="text-amber-500 w-5 h-5" />,
      skills: [
        { name: "Linux Systems", icon: <SiLinux className="text-[#FCC624]" /> },
        { name: "Network Auditing", icon: <FaTerminal className="text-zinc-700" /> },
        { name: "Security Protocols", icon: <FaShieldAlt className="text-zinc-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      ],
    },
  ];

  const pillars = [
    {
      title: "Solid Foundations",
      description: "My CS degree gave me a solid grasp of data structures, algorithms, and how systems work under the hood. I use that knowledge to write better queries and solve tricky problems.",
      icon: <FaBrain className="text-indigo-600 w-6 h-6" />,
      tag: "CS Theory",
    },
    {
      title: "Backend & APIs",
      description: "I build API services that are clean and dependable. Whether it's NestJS, Express, or PostgreSQL, I care about data integrity, type safety, and APIs that other developers enjoy working with.",
      icon: <FaServer className="text-emerald-600 w-6 h-6" />,
      tag: "Backend Dev",
    },
    {
      title: "Frontend & UI",
      description: "A good backend deserves a solid frontend. I use Next.js, React, and Tailwind CSS to build responsive interfaces that are fast and accessible.",
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
      tag: "Frontend Dev",
    },
    {
      title: "Security & Networking",
      description: "I keep security in mind from the start. My knowledge of Linux, networking protocols, and encryption helps me build and deploy apps that are harder to break into.",
      icon: <FaShieldAlt className="text-amber-600 w-6 h-6" />,
      tag: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-zinc-900 pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-semibold mb-4">
            <FaGraduationCap className="w-3.5 h-3.5" />
            CS Graduate &bull; Damascus University
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            About <span className="text-blue-600">Myself</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl font-light">
            I build software &mdash; backend APIs, frontend interfaces, and everything in between.
          </p>
          <div className="w-24 h-1 bg-blue-600 rounded-full mt-6 mx-auto md:mx-0" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 bg-white border border-zinc-100 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaCode className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-zinc-900 mb-1">Omar Almugawish</h2>
              <p className="text-sm text-blue-600 font-medium mb-6">Software Engineer & CS Graduate</p>

              <hr className="border-zinc-100 my-6" />

              <div className="space-y-4 text-sm text-zinc-600">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-zinc-400 w-5 h-5" />
                  <span>BS in Computer Science<br /><span className="text-xs text-zinc-400">Damascus University</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-zinc-400 w-5 h-5" />
                  <span>Damascus, Syria</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-zinc-400 w-5 h-5" />
                  <span>almgoshomar10@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center justify-between text-xs text-zinc-400">
              <span>Ready for opportunities</span>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white border border-zinc-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                Hey there! I'm Omar.
              </h3>
              <p>
                I studied Computer Science at Damascus University, and that's where I got hooked on building things with code. I like understanding how systems work end to end &mdash; from database queries to API design to the UI that users actually see.
              </p>
              <p>
                I work across the stack, but here are a few things I focus on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Backend & APIs:</strong> Designing schemas and services that don't fall apart when traffic picks up.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Security:</strong> Catching vulnerabilities early instead of patching them later.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Frontend:</strong> Building interfaces that are responsive, accessible, and don't feel slow.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Code Quality:</strong> Writing TypeScript and NestJS that's readable and doesn't need a rewrite next month.</span>
                </li>
              </ul>
              <p>
                I'm still learning every day &mdash; reading about networking, trying new tools, and breaking things just to fix them again.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="text-sm text-zinc-500 font-medium">
                Curious about my milestones?
              </div>
              <Link href="/TimeLine" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Explore my timeline
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-2">What I Do Best</h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">
              What I focus on day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-zinc-50 rounded-xl">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 bg-zinc-100/50 px-2.5 py-1 rounded-full uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-zinc-100 rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-zinc-950">Technical Arsenal</h2>
              <p className="text-zinc-500 text-sm font-light mt-1">
                Languages, frameworks, and tools I use regularly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 border-b border-zinc-50 pb-2.5">
                  {category.icon}
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-2 bg-[#f8fafc] border border-zinc-100 rounded-xl text-zinc-700 text-xs font-medium"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-sm font-light mb-4">
            Want to work together?
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full text-sm font-semibold transition-all"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
