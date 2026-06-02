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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <FaLaptopCode className="text-blue-500 w-5 h-5" />,
      skills: [
        { name: "ReactJS", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML5 & CSS3", icon: <FaCode className="text-[#E34F26]" /> }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="text-emerald-500 w-5 h-5" />,
      skills: [
        { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <FaCode className="text-zinc-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> }
      ]
    },
    {
      title: "Systems & Security",
      icon: <FaShieldAlt className="text-amber-500 w-5 h-5" />,
      skills: [
        { name: "Linux Systems", icon: <SiLinux className="text-[#FCC624]" /> },
        { name: "Network Auditing", icon: <FaTerminal className="text-zinc-700" /> },
        { name: "Security Protocols", icon: <FaShieldAlt className="text-zinc-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> }
      ]
    }
  ];

  const pillars = [
    {
      title: "Solid Foundations",
      description: "My CS degree gave me a strong grasp of data structures, system internals, and how computers think. I love applying this logic to optimize queries and solve tricky algorithms.",
      icon: <FaBrain className="text-indigo-600 w-6 h-6" />,
      tag: "CS Theory"
    },
    {
      title: "Stable Backend & APIs",
      description: "I like building API services that are clean and reliable. Whether it's NestJS, Express, or PostgreSQL, I focus on data integrity, type-safety, and writing APIs that developers love to use.",
      icon: <FaServer className="text-emerald-600 w-6 h-6" />,
      tag: "Backend Dev"
    },
    {
      title: "Interactive Web Apps",
      description: "A great backend needs a great interface. I use Next.js, React, and Tailwind CSS to build fast, beautiful, and fully responsive layouts that feel incredibly snappy.",
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
      tag: "Frontend Dev"
    },
    {
      title: "Security & Networking",
      description: "Keeping user data safe is crucial. I leverage my knowledge of Linux, secure network protocols, and encryption standard practices to build and deploy apps that are locked down.",
      icon: <FaShieldAlt className="text-amber-600 w-6 h-6" />,
      tag: "Security"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-zinc-900 pb-20 relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-200/10 blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-200/10 blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-4">
            <FaGraduationCap className="w-3.5 h-3.5" />
            CS Graduate • Damascus University
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            About <span className="text-blue-600 relative inline-block">Myself</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl font-light">
            I'm a software engineer who loves building things that work well under the hood and look great on the screen.
          </p>
          <div className="w-24 h-1 bg-blue-600 rounded-full mt-6 mx-auto md:mx-0" />
        </motion.div>

        {/* Narrative / Personal Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Profile Quick Info Box */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

            <div>
              {/* Avatar placeholder / premium graphic */}
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 group hover:scale-105 transition-transform duration-300">
                <FaCode className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-zinc-900 mb-1">Omar Almugawish</h2>
              <p className="text-sm text-blue-600 font-medium mb-6">Software Engineer & CS Graduate</p>

              <hr className="border-zinc-100 my-6" />

              <div className="space-y-4 text-sm text-zinc-600">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                  <span>BS in Computer Science<br /><span className="text-xs text-zinc-400">Damascus University</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                  <span>Damascus, Syria</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                  <span>almgoshomar10@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center justify-between text-xs text-zinc-400">
              <span>Ready for opportunities</span>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            </div>
          </motion.div>

          {/* Core Biography / Philosophy */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white border border-zinc-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                Hey there! I'm Omar.
              </h3>
              <p>
                My journey into tech started with a lot of curiosity and a **Computer Science degree from Damascus University**. That's where I fell in love with coding—not just writing scripts, but figuring out how systems actually work behind the scenes, how to make databases query faster, and how to keep things safe and secure.
              </p>
              <p>
                I don't like limiting myself to just one area. I enjoy seeing the whole picture:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Database & Backend:</strong> Designing schemas and API services that don't fall apart when traffic hits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Practical Security:</strong> Thinking about security flaws early on, rather than as an afterthought.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Polished UI/UX:</strong> Building responsive, interactive web layers that look good and feel extremely snappy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <span><strong>Clean Code:</strong> Writing TypeScript and NestJS that is actually readable and easy to maintain.</span>
                </li>
              </ul>
              <p>
                I'm always learning new things, reading up on network protocols, or trying out new frontend patterns. For me, software is about solving real problems for real people.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="text-sm text-zinc-500 font-medium">
                Curious about my milestones?
              </div>
              <Link href="/TimeLine" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                Explore my timeline
                <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* The Four Pillars of Focus */}
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
              Merging computer science theory with practical, hands-on building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                {/* Visual accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-blue-500/10" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-zinc-400 bg-zinc-100/50 px-2.5 py-1 rounded-full uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
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

        {/* Technical Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-zinc-100 rounded-3xl p-8 md:p-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-zinc-950">Technical Arsenal</h2>
              <p className="text-zinc-500 text-sm font-light mt-1">
                Languages, frameworks, systems, and platforms that form my professional toolkit.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Constantly growing</span>
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
                      className="flex items-center gap-2 px-3 py-2 bg-[#f8fafc] border border-zinc-100 hover:border-blue-200 rounded-xl text-zinc-700 text-xs font-medium hover:bg-blue-50/30 hover:text-blue-700 transition-all duration-200 cursor-default"
                    >
                      <span className="text-base flex-shrink-0">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Navigation CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-sm font-light mb-4">
            Let's build something cool together!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full text-sm font-semibold shadow-sm transition-all"
            >
              Get in touch
            </Link>
            <Link
              href="/Experience"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 rounded-full text-sm font-semibold transition-all"
            >
              View experience
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
