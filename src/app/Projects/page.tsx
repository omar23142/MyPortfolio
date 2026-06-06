"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaSearch,
  FaCode,
  FaBrain,
  FaGamepad,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5 } from "react-icons/si";

interface Project {
  title: string;
  name: string;
  category: "web" | "dsa" | "game";
  categoryLabel: string;
  description: string;
  longDescription: string;
  architecture: string[];
  keyChallenges: string[];
  language: string;
  html_url: string;
  live_url?: string;
  tags: string[];
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Bulls & Cows Full-Stack Game",
    name: "Bulls-and-Cows-game-cs50-finall-project-",
    category: "game",
    categoryLabel: "Featured (CS50)",
    description: "A full-stack Bulls & Cows code-breaking game with Flask backend, WebSocket multiplayer, and a help system that reveals or removes digits.",
    longDescription: "A Bulls & Cows game built with Flask (Python) on the back end and vanilla HTML/CSS/JS on the front. Supports both local play and multiplayer via WebSocket. Includes a hint system that can remove wrong digits or reveal correct ones. The Flask server handles game logic, score tracking, and leaderboard persistence.",
    architecture: [
      "Flask REST API for game validation, scoring, and leaderboard storage.",
      "WebSocket-based multiplayer matching and real-time turn sync.",
      "Vanilla JavaScript frontend with CSS3 transitions for the game board."
    ],
    keyChallenges: [
      "Syncing game state between two WebSocket clients reliably during multiplayer matches.",
      "Designing the hint system to intelligently pick which digit to reveal or remove without breaking the game logic."
    ],
    language: "Python / Flask / JS",
    html_url: "https://github.com/omar23142/Bulls-and-Cows-game-cs50-finall-project-",
    tags: ["Full-Stack", "Flask", "Python", "JavaScript", "HTML5/CSS3", "Game Loops", "REST API"],
    featured: true,
  },
  {
    title: "Cloud Next.js Dashboard",
    name: "cloud-Nextjs",
    category: "web",
    categoryLabel: "Frontend & Web",
    description: "A cloud monitoring dashboard built with Next.js and TypeScript.",
    longDescription: "A dark-themed cloud provider dashboard UI built with Next.js App Router and Tailwind CSS. Displays live server status cards, CPU and RAM usage charts, storage thresholds, and deployment history. Uses glassmorphism styling for a modern look.",
    architecture: [
      "Next.js App Router for layout definitions and route organization.",
      "TypeScript interfaces defining data models for servers, metrics, and status payloads.",
      "Tailwind CSS utility classes for the dark theme and glassmorphic card styles."
    ],
    keyChallenges: [
      "Keeping glassmorphic card backgrounds performant across browsers without repaint lag.",
      "Designing a responsive status grid that works across desktop and mobile layouts."
    ],
    language: "TypeScript",
    html_url: "https://github.com/omar23142/cloud-Nextjs",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Dashboard", "UI/UX", "Responsive Design"],
    featured: true,
  },
  {
    title: "E-joy Extension Clone",
    name: "E-joy",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A clone of the E-joy language learning browser extension for interactive vocabulary building from video subtitles.",
    longDescription: "A web app that mimics the E-joy language learning extension. Lets users watch videos with dual subtitles, click words to see translations, and save vocabulary to a personal bank. Built with React and TypeScript.",
    architecture: [
      "Dual-subtitle parser that syncs translated text with video timestamps.",
      "Click-to-translate popup that fetches definitions and phonetic transcriptions.",
      "Local vocabulary bank stored in the browser for review and practice."
    ],
    keyChallenges: [
      "Aligning subtitle overlays precisely with the video player without breaking native controls.",
      "Highlighting translated words in subtitles in real time as the video plays."
    ],
    language: "TypeScript",
    html_url: "https://github.com/omar23142/E-joy",
    tags: ["React", "TypeScript", "Tailwind CSS", "Language Learning", "Browser Extension Clone", "Video Subtitles"],
    featured: true,
  },
  {
    title: "E-Commerce REST API",
    name: "e-commerce",
    category: "web",
    categoryLabel: "Backend API & Web",
    description: "A NestJS backend API with JWT auth, RBAC, product management, reviews, image uploads, and transactional emails.",
    longDescription: "A fully typed REST API built with NestJS, TypeORM, and PostgreSQL. Handles user authentication with JWT tokens, role-based access control (admin vs normal user), product CRUD with advanced filtering (search, price range, pagination), review system, Cloudinary image uploads, rate limiting, and Swagger documentation. Deployed on Vercel.",
    architecture: [
      "Modular NestJS structure with separate Users, Products, and Reviews feature modules.",
      "TypeORM entities with PostgreSQL migrations for schema versioning.",
      "Custom ApiFeature utility class for advanced product querying with TypeORM QueryBuilder."
    ],
    keyChallenges: [
      "Handling circular dependencies between Users and Reviews modules with NestJS forwardRef.",
      "Invalidating JWT tokens issued before a password change by tracking token timestamps in the database."
    ],
    language: "TypeScript",
    html_url: "https://github.com/omar23142/e-commerce",
    live_url: "https://e-commerce-zeta-henna-46.vercel.app",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT Auth", "Cloudinary", "Swagger"],
    featured: true,
  },
  {
    title: "Natours Full-Stack App",
    name: "natours",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A full-stack tour booking app with Node.js/Express API, Pug templates, JWT auth, Mapbox maps, and Stripe payments.",
    longDescription: "A complete tour booking platform built with Node.js and Express. Server-rendered Pug templates on the frontend with a REST API backend. Features JWT authentication, Mapbox interactive maps, email notifications on booking, and Stripe payment integration. MongoDB with Mongoose for data persistence.",
    architecture: [
      "Express REST API combined with server-rendered Pug templates for the UI layer.",
      "Mongoose schemas for users, tours, bookings, and reviews with reference relationships.",
      "Security middleware: rate limiting, data sanitization, Helmet headers, and encrypted JWT cookies."
    ],
    keyChallenges: [
      "Embedding interactive Mapbox maps inside server-rendered Pug views while keeping layouts responsive.",
      "Handling JWT auth via cookies while securely integrating client-side Stripe checkout."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/natours",
    tags: ["Full-Stack", "Node.js", "Express", "MongoDB", "Pug Templates", "JWT Auth", "Stripe Payments"],
  },
  {
    title: "Weather Dashboard",
    name: "weather-site",
    category: "web",
    categoryLabel: "Frontend(Reactjs)",
    description: "A React weather app with Redux state management, i18n support, and live data from a weather API. Deployed on Vercel.",
    longDescription: "A React 19 weather dashboard that fetches live weather data via axios and displays forecasts, UV index, humidity, and barometric pressure. Uses Redux Toolkit for state management, i18next for multi-language support, and dayjs/moment for date formatting. Deployed live on Vercel.",
    architecture: [
      "React 19 with functional components and hooks for UI rendering.",
      "Redux Toolkit for centralized state management across weather data and user preferences.",
      "axios-based API layer with error handling and rate-limit awareness."
    ],
    keyChallenges: [
      "Managing API rate limits gracefully while still providing real-time weather updates.",
      "Building a responsive dashboard that works across mobile and desktop without sacrificing data density."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/weather-site",
    live_url: "https://weather-site-rho-seven.vercel.app/",
    tags: ["React", "Redux Toolkit", "axios", "i18next", "JavaScript", "Vercel"],
  },
  {
    title: "Interactive ToDo Planner",
    name: "ToDoList",
    category: "web",
    categoryLabel: "Frontend(Reactjs)",
    description: "A React task management app with status columns, search filters, and LocalStorage persistence. Deployed on Vercel.",
    longDescription: "A React 19 todo app for organizing daily tasks. Features color-coded status columns (todo, in progress, done), task search and filtering, and LocalStorage sync so nothing is lost on refresh. Built with Emotion for styled components. Deployed live on Vercel.",
    architecture: [
      "React 19 component tree with state lifted to parent components for shared data flow.",
      "LocalStorage persistence layer that saves and restores the full task list on page load.",
      "Search and filter logic that matches tasks by title and category in real time."
    ],
    keyChallenges: [
      "Implementing drag-and-drop reordering of tasks between status columns without external libraries.",
      "Keeping the UI responsive on small screens while displaying multiple task columns."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/ToDoList",
    live_url: "https://to-do-list-one-kappa-19.vercel.app/",
    tags: ["React", "Emotion", "LocalStorage", "CSS3 Transitions", "Task Management"],
  },
  {
    title: "A* Algorithm 8-Puzzle Solver",
    name: "8puzzle",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A Java solver for the 8-puzzle using A* search with Manhattan and Hamming heuristics.",
    longDescription: "Solves the 8-puzzle sliding tile game by finding the shortest sequence of moves using the A* search algorithm. Uses a priority queue (min-heap) to explore states and Manhattan/Hamming distance as heuristics. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Min-heap priority queue prioritizing the most promising puzzle states.",
      "Manhattan and Hamming distance heuristics to guide the search toward the goal.",
      "Board state tracking with node back-linking to reconstruct the solution path."
    ],
    keyChallenges: [
      "Preventing out-of-memory errors when the search space grows large by pruning duplicate board states.",
      "Ensuring the solver always returns the optimal (shortest) solution path."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/8puzzle",
    tags: ["Algorithms", "A* Search", "Heuristics", "Java", "Priority Queue", "Min-Heap"],
  },
  {
    title: "Seam Carving Image Resizer",
    name: "seam",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "Content-aware image resizing using seam carving with dual-gradient energy calculation and dynamic programming.",
    longDescription: "Resizes images by removing low-energy seams (paths of pixels) instead of cropping or scaling. Uses dual-gradient energy calculation to find the least important pixels, then dynamic programming to find the optimal seam path. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Dual-gradient energy function that identifies low-importance pixel regions.",
      "Dynamic programming DP table for finding the optimal vertical and horizontal seam paths.",
      "Pixel coordinate buffers that reconstruct the image after seam removals."
    ],
    keyChallenges: [
      "Computing optimal seams in linear time using DP to handle large images efficiently.",
      "Removing seams cleanly without visible artifacts or distortion in the output image."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/seam",
    tags: ["Computer Vision", "Java", "Dynamic Programming", "Graph Shortest Path", "Image Processing"],
  },
  {
    title: "WordNet Semantic Graph",
    name: "wordnet",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A semantic network of nouns built as a DAG, computing shortest ancestral paths using BFS.",
    longDescription: "Models the WordNet lexical database as a directed acyclic graph where nouns are nodes and hypernym (is-a) relationships are edges. Computes shortest ancestral paths between words using BFS and finds lowest common ancestors. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Directed Acyclic Graph (DAG) built from WordNet noun and hypernym relationships.",
      "Shortest Ancestral Path (SAP) algorithm using BFS to find distances between word nodes.",
      "Cycle detection during graph construction to ensure the DAG property is maintained."
    ],
    keyChallenges: [
      "Running BFS efficiently across a large graph with thousands of nodes and edges.",
      "Detecting and handling cycles in the input data to maintain a valid DAG structure."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/wordnet",
    tags: ["Java", "Graphs", "BFS", "Directed Acyclic Graphs", "Data Structures", "NLP"],
  },
  {
    title: "Kd-Tree Spatial Indexer",
    name: "kdtree",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A 2D spatial search tree for range queries and nearest-neighbor lookups using recursive space partitioning.",
    longDescription: "A 2D-tree (k-d tree) implementation that stores 2D points and supports orthogonal range queries and nearest-neighbor search. The tree partitions space recursively along alternating X and Y axes, pruning entire branches that can't contain relevant points. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Kd-Tree that alternates splitting along X and Y axes at each level.",
      "Rectangle-based pruning that skips irrelevant branches during range and neighbor queries.",
      "Recursive nearest-neighbor search tracking the closest point found so far."
    ],
    keyChallenges: [
      "Pruning correctly so entire subtrees are skipped when they can't contain a nearer point.",
      "Handling edge cases where points lie exactly on the splitting line."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/kdtree",
    tags: ["Algorithms", "Computational Geometry", "Kd-Tree", "Binary Search Tree", "Java"],
  },
  {
    title: "Percolation Monte Carlo Simulator",
    name: "percolation",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A Monte Carlo simulator for percolation thresholds using weighted quick-union with path compression.",
    longDescription: "Models a grid where each cell can be 'open' or 'blocked' and runs Monte Carlo simulations to estimate the percolation threshold (the point at which water can flow from top to bottom). Uses a weighted quick-union (Union-Find) data structure with path compression. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Weighted Quick-Union with path compression for nearly constant-time connectivity checks.",
      "Monte Carlo engine that randomly opens sites and checks for percolation.",
      "Statistical analysis computing mean, standard deviation, and confidence intervals."
    ],
    keyChallenges: [
      "Avoiding the 'backwash' problem where the virtual bottom site falsely indicates percolation through top-connected open sites.",
      "Ensuring connectivity queries remain fast even on large N-by-N grids."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/percolation",
    tags: ["Java", "Union-Find", "Disjoint Set", "Monte Carlo Simulation", "Physics Modeling"],
  },
  {
    title: "Network Flow Baseball Eliminator",
    name: "baseball",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A max-flow min-cut solver that determines mathematical playoff elimination using Ford-Fulkerson.",
    longDescription: "Applies network flow theory to determine whether a baseball team is mathematically eliminated from winning its division. Builds a flow network with source, game nodes, team nodes, and sink, then runs Ford-Fulkerson (or Edmonds-Karp) to compute max flow. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Flow network model mapping remaining games as edges between team nodes.",
      "Ford-Fulkerson algorithm (with capacity scaling) for max-flow computation.",
      "Min-cut analysis to produce a certificate of elimination (the subset of teams that block the team)."
    ],
    keyChallenges: [
      "Designing the flow network correctly so that game capacities and team win limits are accurately represented.",
      "Translating the min-cut result into a human-readable elimination explanation."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/baseball",
    tags: ["Java", "Graphs", "Network Flow", "Max-Flow Min-Cut", "Ford-Fulkerson"],
  },
  {
    title: "Collinear Pattern Recognizer",
    name: "collinear",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A computational geometry algorithm that finds line segments of 4+ collinear points using slope sorting.",
    longDescription: "Given a set of 2D points, finds all line segments that contain at least 4 collinear points. Uses a merge-sort based approach: for each point, sorts all other points by slope and scans for runs of equal slopes. Reduces complexity from O(N^4) to O(N^2 log N). Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Point data structure with slope calculation between any two points.",
      "Merge-sort based slope sorting for each reference point to group collinear candidates.",
      "Sub-segment filtering to avoid reporting the same line segment multiple times."
    ],
    keyChallenges: [
      "Handling vertical lines where slopes are infinite (division by zero).",
      "Avoiding duplicate line segments when the same line is found from different reference points."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/collinear",
    tags: ["Java", "Algorithms", "Computational Geometry", "Sorting", "Mergesort"],
  },
  {
    title: "Deque & Randomized Queue",
    name: "queues",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "Generic deque (doubly-linked list) and randomized queue (resizing array) with constant-time operations.",
    longDescription: "Implements two generic data structures: a Deque with constant-time insert/remove at both ends using a doubly-linked list, and a Randomized Queue that returns elements in random order using a resizing array. Supports iteration, independent iterators, and nested iteration. Part of Princeton University's algorithms curriculum.",
    architecture: [
      "Doubly-linked list for O(1) add/remove at both front and back.",
      "Resizing array with randomized index selection for the randomized queue.",
      "Independent iterator implementations supporting nested loops."
    ],
    keyChallenges: [
      "Supporting multiple independent iterators over the randomized queue without shared state corruption.",
      "Maintaining constant-time operations for all Deque methods while keeping memory usage bounded."
    ],
    language: "Java",
    html_url: "https://github.com/omar23142/queues",
    tags: ["Java", "Data Structures", "Linked Lists", "Resizing Arrays", "Generics"],
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "dsa" | "game">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects", count: projectsData.length },
    { id: "game", label: "Featured (CS50)", count: projectsData.filter((p) => p.category === "game").length },
    { id: "web", label: "Full-Stack & Web", count: projectsData.filter((p) => p.category === "web").length },
    { id: "dsa", label: "Algorithms & DS", count: projectsData.filter((p) => p.category === "dsa").length },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const langBadge = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "typescript": return "bg-blue-50 text-blue-700 border-blue-200";
      case "javascript": return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "java": return "bg-orange-50 text-orange-800 border-orange-200";
      default: return "bg-zinc-50 text-zinc-700 border-zinc-200";
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 pb-20">
      <main className="relative max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-semibold uppercase mb-4"
          >
            <FaCode className="text-xs" /> Portfolio Showcase
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-700"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            A curated showcase of full-stack web applications, interactive software,
            and high-performance data structures &amp; algorithms implementations.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl mb-10">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {cat.id === "game" && <FaGamepad />}
                  {cat.id === "web" && <FaCode />}
                  {cat.id === "dsa" && <FaBrain />}
                  {cat.label}
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id
                        ? "bg-blue-700/50 text-blue-100"
                        : "bg-slate-100 text-zinc-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
            <input
              type="text"
              placeholder="Search by name, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 cursor-pointer"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.name}
                  whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
                  onClick={() => setActiveProject(project)}
                  className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {project.categoryLabel}
                      </span>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${langBadge(project.language)}`}>
                        <FaCode />
                        <span>{project.language}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-50 border border-slate-100 text-zinc-500 text-[10px] px-2 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-slate-50 text-zinc-400 text-[9px] px-1.5 py-0.5 rounded-md font-bold self-center">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="flex items-center gap-1">
                        Behind The Code <FaExternalLinkAlt size={10} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-slate-200 rounded-3xl"
          >
            <div className="max-w-md mx-auto px-4">
              <FaCode className="mx-auto text-4xl text-zinc-300 mb-4" />
              <h3 className="text-base font-bold text-zinc-800">
                No matching projects found
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Try searching for alternate keywords like &quot;Java&quot;, &quot;TypeScript&quot;, or
                specific tags like &quot;Algorithms&quot; or &quot;CS50&quot;.
              </p>
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-black/60 cursor-pointer"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10"
              >
                <div className="bg-slate-900 text-white p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                      {activeProject.categoryLabel}
                    </span>
                    <button
                      onClick={() => setActiveProject(null)}
                      className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer transition-colors"
                      aria-label="Close details"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {activeProject.title}
                  </h2>
                  <div className="flex gap-2 items-center mt-3">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 font-semibold">
                      {activeProject.language}
                    </span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Project Overview
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Technical Architecture
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.architecture.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-zinc-600">
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px]">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Engineering Challenges Solved
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.keyChallenges.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-zinc-600">
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-600 font-bold text-[10px]">
                            &check;
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Technologies &amp; Paradigms
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 border border-slate-200 text-zinc-700 text-xs px-3 py-1 rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Review and clone this repository on GitHub.
                  </span>
                  <div className="flex gap-2 w-full sm:w-auto">
                    {activeProject.live_url && (
                      <a
                        href={activeProject.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                      >
                        View Live
                      </a>
                    )}
                    <a
                      href={activeProject.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <FaGithub className="text-sm" /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
