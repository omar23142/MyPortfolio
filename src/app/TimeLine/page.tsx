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
    subtitle: "Backend & Full-Stack Development",
    category: "project",
    categoryLabel: "Software Projects",
    description:
      "Shifted focus to full-stack development, building backend APIs and frontend apps with Node.js, Next.js, and TypeScript.",
    details: [
      "Built the Natours tour booking platform with Node.js, Express, MongoDB, and JWT authentication.",
      "Developed the E-joy language learning tool and the Cloud Next.js monitoring dashboard with TypeScript and Tailwind CSS.",
      "Focused on writing clean, type-safe code with optimized database queries and secure API design."
    ],
    techStack: ["Node.js", "Express", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    projectLink: "/Projects"
  },
  {
    year: "2025",
    period: "Algorithms & Logic Mastery",
    title: "Advanced Data Structures & Algorithms",
    subtitle: "Princeton University Algorithms Coursework",
    category: "academic",
    categoryLabel: "Advanced CS Theory",
    description:
      "Worked through Princeton's algorithms curriculum, implementing classic data structures and algorithms in Java.",
    details: [
      "Built a seam carving image resizer and a WordNet semantic graph analyzer using BFS on directed acyclic graphs.",
      "Developed a Kd-Tree for efficient 2D range and nearest-neighbor queries.",
      "Implemented A* search for the 8-puzzle, Union-Find for percolation simulation, and network flow for baseball elimination."
    ],
    techStack: ["Java", "Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming"],
    projectLink: "/Projects"
  },
  {
    year: "2024",
    period: "CS50 Certification",
    title: "CS50 Course",
    subtitle: "Harvard's Introduction to Computer Science",
    category: "milestone",
    categoryLabel: "Certification",
    description:
      "Completed Harvard's CS50 course, covering C, Python, SQL, and web development. Built a Bulls & Cows game as the final capstone.",
    details: [
      "Learned low-level memory management in C, SQL databases, and MVC web architecture.",
      "Built the Bulls & Cows multiplayer game as the final capstone project using JavaScript and Flask.",
      "Earned the CS50 certification after completing all problem sets and the final project."
    ],
    techStack: ["C Language", "Python", "SQL", "JavaScript", "HTML5/CSS3", "Game Loops"],
    projectLink: "/Projects"
  },
  {
    year: "2024",
    period: "CCNA & Linux+ Courses",
    title: "CCNA & Linux+ Certifications",
    subtitle: "Networking & System Administration",
    category: "milestone",
    categoryLabel: "Certification",
    description:
      "Studied for the CCNA (Cisco Certified Network Associate) and Linux+ certifications to strengthen networking and systems knowledge.",
    details: [
      "Covered routing and switching fundamentals, subnetting, VLANs, and network troubleshooting for CCNA.",
      "Learned Linux system administration including file systems, permissions, process management, and shell scripting.",
      "Applied networking concepts to understand how servers communicate, which helps with backend and deployment work."
    ],
    techStack: ["Cisco IOS", "Linux CLI", "Bash", "Networking Protocols", "TCP/IP", "Subnetting"]
  },
  {
    year: "2024",
    period: "Damascus University Graduation",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "Damascus University",
    category: "academic",
    categoryLabel: "Formal Education",
    description:
      "Earned a BS in Computer Science from Damascus University, covering operating systems, compilers, databases, and networking.",
    details: [
      "Studied operating system internals, threading, and concurrency in Linux environments.",
      "Built a syntactic parser as part of the Compiler Design coursework.",
      "Learned database normalization, SQL, network routing protocols, and network security fundamentals."
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
      <main className="relative max-w-5xl mx-auto px-6 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-semibold uppercase mb-4"
          >
            <FaCalendarAlt className="text-[10px]" /> Timeline
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-700"
          >
            My Professional Timeline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light"
          >
            A timeline of my education, certifications, and projects that show how I grew as a developer.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 ${
                selectedFilter === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-zinc-600 hover:text-zinc-900 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 pointer-events-none" />

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
                    <div className="absolute left-4 sm:left-1/2 top-1.5 w-9 h-9 rounded-full bg-white border-2 border-slate-200 -translate-x-1/2 flex items-center justify-center z-15 pointer-events-none">
                      {getCategoryIcon(milestone.category)}
                    </div>

                    <div className={`hidden sm:block w-[45%] ${isEven ? "order-1" : "order-3"}`} />

                    <div
                      className={`w-full sm:w-[45%] pl-12 sm:pl-0 order-2`}
                    >
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                            <FaCalendarAlt size={10} />
                            {milestone.period}
                          </span>
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                            {milestone.categoryLabel}
                          </span>
                        </div>

                        <div className="text-3xl font-extrabold text-blue-600/30 tracking-tight mb-2">
                          {milestone.year}
                        </div>

                        <h3 className="text-lg font-extrabold text-zinc-800">
                          {milestone.title}
                        </h3>
                        <span className="block text-xs font-semibold text-zinc-400 mt-0.5 mb-4">
                          {milestone.subtitle}
                        </span>

                        <p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
                          {milestone.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {milestone.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-2.5 text-xs text-zinc-600">
                              <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">&bull;</span>
                              <span className="leading-relaxed font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

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

                        {milestone.projectLink && (
                          <Link
                            href={milestone.projectLink}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            Explore related project
                            <FaArrowRight className="w-3 h-3" />
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
