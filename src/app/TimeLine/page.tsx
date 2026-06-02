"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaCalendarAlt,
  FaArrowRight,
  FaGamepad,
} from "react-icons/fa";
import Link from "next/link";

interface Milestone {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  category: "academic" | "project" | "milestone";
  categoryLabel: string;
  description: string;
  details: string[];
  techStack?: string[];
  projectLink?: string;
}

const milestonesData: Milestone[] = [
  {
    year: "2025 - Present",
    period: "2025 - Until Now",
    title: "Node.js & Full-Stack Projects",
    subtitle: "Enterprise Engineering & Backend Development",
    category: "project",
    categoryLabel: "Software Projects",
    description:
      "Transitioned into full-stack product development, building high-performance Node.js environments and advanced Next.js applications.",
    details: [
      "Engineered the 'Natours' tour booking platform using Node.js, Express, MongoDB, and robust JWT session protocols.",
      "Designed the 'E-joy' e-commerce platform and modern 'cloud-Nextjs' dashboard leveraging TypeScript, Next.js, and Tailwind CSS.",
      "Built clean, modular, and asynchronous architectures with focus on type-safety, database query optimizations, and API security."
    ],
    techStack: ["Node.js", "Express", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    projectLink: "/Projects"
  },
  {
    year: "2025",
    period: "Algorithms & Logic Mastery",
    title: "Advanced Data Structures & Algorithms",
    subtitle: "Complex Problem-Solving & Princeton Training",
    category: "academic",
    categoryLabel: "Advanced CS Theory",
    description:
      "Deep-dived into advanced computer science algorithms, mastering performance complexity, graph theory, and mathematical optimization.",
    details: [
      "Built low-energy seam carving resizers and semantic acyclic directed graph analyzers (WordNet) in Java.",
      "Developed spatial search structures (binary Kd-Trees) for efficient sub-linear orthogonal queries.",
      "Implemented A* heuristic puzzle solvers, disjoint weighted Quick-Union simulators (percolation), and network flow baseball schedulers."
    ],
    techStack: ["Java", "Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming"],
    projectLink: "/Projects"
  },
  {
    year: "2024",
    period: "CS50 Certification",
    title: "CS50 Course & Graduation",
    subtitle: "Harvard's Computer Science Foundation & Capstone",
    category: "milestone",
    categoryLabel: "Certification",
    description:
      "Graduated from Harvard's renowned CS50 computer science curriculum, finishing with a highly successful Capstone game project.",
    details: [
      "Mastered low-level memory allocation, pointer dynamics, SQL relational databases, and MVC web frames.",
      "Developed the 'Bulls and Cows Mind Game' capstone graduation project from scratch in clean client-side JavaScript.",
      "Received the certified CS50 credential validating robust multi-paradigm software foundations."
    ],
    techStack: ["C Language", "Python", "SQL", "JavaScript", "HTML5/CSS3", "Game Loops"],
    projectLink: "/Projects"
  },
  {
    year: "2024",
    period: "Damascus University Graduation",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "Formal BS Graduation in Damascus, Syria",
    category: "academic",
    categoryLabel: "Formal Education",
    description:
      "Completed rigorous four-year BS degree in Computer Science, mastering core computational engineering principles and systems foundations.",
    details: [
      "Studied Operating Systems internals, threads, Linux kernel configurations, and multi-process concurrency.",
      "Designed custom syntactic parser structures during extensive Compiler Design modules.",
      "Acquired deep capabilities in database normalization schemas (SQL), network routing protocols, and secure network layers."
    ],
    techStack: ["C / C++", "Java", "Assembly", "Databases", "Networking Layers", "Linux Systems"]
  }
];

export default function TimeLinePage() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "academic" | "project" | "milestone">("all");

  const filteredMilestones = useMemo(() => {
    if (selectedFilter === "all") return milestonesData;
    return milestonesData.filter((m) => m.category === selectedFilter);
  }, [selectedFilter]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <FaGraduationCap className="w-5 h-5 text-blue-600" />;
      case "project":
        return <FaCode className="w-5 h-5 text-emerald-600" />;
      case "milestone":
        return <FaGamepad className="w-5 h-5 text-amber-600" />;
      default:
        return <FaCalendarAlt className="w-5 h-5 text-zinc-500" />;
    }
  };

  const filterTabs = [
    { id: "all", label: "All Milestones" },
    { id: "academic", label: "Education & Theory" },
    { id: "project", label: "Projects & Builds" },
    { id: "milestone", label: "Key Graduations" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 pb-24">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />

      {/* Top Banner Gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <main className="relative max-w-5xl mx-auto px-6 pt-16 z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FaCalendarAlt className="text-[10px]" /> Timeline
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 bg-clip-text text-transparent"
          >
            My Professional Timeline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light"
          >
            A chronological mapping of my academic credentials, certifications, and technical projects
            demonstrating my software engineering growth.
          </motion.p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 ${
                selectedFilter === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-zinc-600 hover:text-zinc-900 border border-slate-200 shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Path Track */}
        <div className="relative">
          {/* Vertical Center Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Milestones Grid */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={milestone.title}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex flex-col sm:flex-row sm:justify-between items-start w-full"
                  >
                    {/* Centered Glowing Milestone Node */}
                    <div className="absolute left-4 sm:left-1/2 top-1.5 w-9 h-9 rounded-full bg-white border-2 border-slate-200 shadow-xs -translate-x-1/2 flex items-center justify-center z-15 pointer-events-none group-hover:scale-110 transition-transform">
                      {getCategoryIcon(milestone.category)}
                    </div>

                    {/* Left spacing column (desktop only) */}
                    <div className={`hidden sm:block w-[45%] ${isEven ? "order-1" : "order-3"}`} />

                    {/* Timeline Card Container - Column */}
                    <div
                      className={`w-full sm:w-[45%] pl-12 sm:pl-0 order-2 relative group`}
                    >
                      {/* Interactive Card */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                        {/* Interactive glow border accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-blue-500/10 pointer-events-none" />

                        {/* Top Meta info */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                            <FaCalendarAlt size={10} />
                            {milestone.period}
                          </span>
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                            {milestone.categoryLabel}
                          </span>
                        </div>

                        {/* Year Banner (stands out visually) */}
                        <div className="text-3xl font-extrabold text-blue-600/30 group-hover:text-blue-600/40 tracking-tight transition-colors mb-2">
                          {milestone.year}
                        </div>

                        {/* Titles */}
                        <h3 className="text-lg font-extrabold text-zinc-800 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                        <span className="block text-xs font-semibold text-zinc-400 mt-0.5 mb-4">
                          {milestone.subtitle}
                        </span>

                        {/* Narrative Description */}
                        <p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
                          {milestone.description}
                        </p>

                        {/* Details checklist bullet points */}
                        <ul className="space-y-2 mb-6">
                          {milestone.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-2.5 text-xs text-zinc-600">
                              <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">•</span>
                              <span className="leading-relaxed font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Badges */}
                        {milestone.techStack && (
                          <div className="flex flex-wrap gap-1 mb-6 border-t border-slate-50 pt-4">
                            {milestone.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="bg-slate-50 border border-slate-100 text-zinc-500 text-[9px] px-2 py-0.5 rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Direct link CTA to associated Project */}
                        {milestone.projectLink && (
                          <Link
                            href={milestone.projectLink}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/cta"
                          >
                            Explore related project
                            <FaArrowRight className="w-3 h-3 transform group-hover/cta:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
