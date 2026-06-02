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
  FaFire,
  FaArrowRight,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5 } from "react-icons/si";

// Structure of our rich project metadata
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
  tags: string[];
  featured?: boolean;
}

// Complete, curated repository list combining the live GitHub feed, course projects, and custom highlights
const projectsData: Project[] = [
  {
    title: "Bulls & Cows Full-Stack Game",
    name: "Bulls-and-Cows-game-cs50-finall-project-",
    category: "game",
    categoryLabel: "Featured (CS50)",
    description: "An interactive full-stack implementation of the classic Bulls & Cows code-breaking game. Built with HTML, CSS, JavaScript, and a Flask (Python) backend.",
    longDescription: "A fully immersive, full-stack mind-challenge that puts players' code-breaking abilities to the test. Features a responsive frontend using vanilla HTML5, CSS3 transitions, and JavaScript, backed by a Flask (Python) server handling game validation, scores, and statistics.",
    architecture: [
      "Flask (Python) REST backend managing secure scoreboards and leaderboard logic.",
      "Modular client-side state machine handling immediate game states and input validation.",
      "Custom CSS3 transition framework driving dynamic game board movements.",
      "Audio API integration providing interactive sound feedback loops."
    ],
    keyChallenges: [
      "Integrating a seamless asynchronous fetch structure between the vanilla JS front-end and Flask API server.",
      "Optimizing Python game scoring metrics to handle database leaderboards cleanly under rapid query requests."
    ],
    language: "Python / Flask / JS",
    html_url: "https://github.com/omar23142/Bulls-and-Cows-game-cs50-finall-project-",
    tags: ["Full-Stack", "Flask", "Python", "JavaScript", "HTML5/CSS3", "Game Loops", "REST API"],
    featured: true,
  },
  {
    title: "Cloud Next.js Application",
    name: "cloud-Nextjs",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A premium cloud resource monitoring dashboard built using Next.js and TypeScript, designed to show system statuses.",
    longDescription: "A fully polished glassmorphic interface mocking a modern Cloud Service Provider dashboard. It presents interactive server status matrices, metric charts, storage thresholds, and deployment timelines in an outstanding, accessible user interface.",
    architecture: [
      "Next.js App Router for optimized directory structures, layout definitions, and static assets.",
      "TypeScript types defining strict interface models for network payloads and status thresholds.",
      "Vibrant dark-themed visual grids leveraging tailwind CSS's utility layer."
    ],
    keyChallenges: [
      "Implementing high-performance glassmorphic cards with complex background filters without causing repainting lags in older browsers.",
      "Designing complex state grids mapping CPU/RAM usage levels dynamically."
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
    description: "A web application clone of the E-joy language learning browser extension, built for interactive language acquisition.",
    longDescription: "A specialized front-end application replicating core language learning extension workflows. It translates terms interactively, parses vocabulary from dual-subtitle video players, and structures vocabulary lists using advanced context cue cards.",
    architecture: [
      "Dual subtitle text matching engines syncing video timestamp milestones with textual lines.",
      "Interactive popup dictionaries fetching vocabulary definitions and phonetic transcriptions.",
      "Custom vocabulary bank systems persisting learned cards inside browser databases."
    ],
    keyChallenges: [
      "Devising pixel-perfect overlay widgets that align neatly with live media players without interfering with default video controls.",
      "Implementing instant vocabulary keyword mapping algorithms that highlight words in subtitles in real time."
    ],
    language: "TypeScript",
    html_url: "https://github.com/omar23142/E-joy",
    tags: ["React", "TypeScript", "Tailwind CSS", "Language Learning", "Browser Extension Clone", "Video Subtitles"],
    featured: true,
  },
  {
    title: "Online E-Commerce Store",
    name: "e-commerce",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A gorgeous modern web storefront showcasing category navigation, product filters, and persistent carts.",
    longDescription: "A full-featured online e-commerce storefront prototype. It implements intuitive multi-category product filtering, dynamic cart calculations, elegant hover zoom micro-animations, and full mock checkouts, emphasizing fluid UX transitions.",
    architecture: [
      "Modular components for grids, filters, navigation bars, and responsive slide-in sidebars.",
      "Local state synchronizer persisting customer selections across browser reloads.",
      "Dynamic catalog search matching title keywords and price boundaries seamlessly."
    ],
    keyChallenges: [
      "Synchronizing global cart status elements smoothly across independent UI components without causing redundant tree renders.",
      "Refining image placement grids to support standard adaptive layout formats on all mobile devices."
    ],
    language: "TypeScript",
    html_url: "https://github.com/omar23142/e-commerce",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopping Cart", "Product Filters", "State Syncing"],
    featured: true,
  },
  {
    title: "Natours Full-Stack App",
    name: "natours",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A premium, fully fledged full-stack tour booking application featuring a robust secure REST API and server-side UI templates.",
    longDescription: "Natours is a complete full-stack web application. It integrates a powerful Node.js/Express API server with a server-rendered user interface powered by Pug templates, utilizing Mapbox maps, secure JWT logins, email booking triggers, and Stripe payment pathways.",
    architecture: [
      "Node.js & Express framework driving both backend REST endpoints and Pug template rendering controllers.",
      "Mongoose database schemas modeling user levels, multi-guide tour booking relationships, and review aggregates.",
      "Security policies protecting user routes (rate limiting, data sanitization, cookie encryption)."
    ],
    keyChallenges: [
      "Integrating interactive Mapbox coordinates inside server-rendered Pug views while maintaining fluid layout scaling.",
      "Bridging cookies-based token state systems with client-side Stripe checkout requests securely."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/natours",
    tags: ["Full-Stack", "Node.js", "Express", "MongoDB", "Pug Templates", "JWT Auth", "Stripe Payments"],
  },
  {
    title: "Weather Forecasting Hub",
    name: "weather-site",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "An elegant, interactive utility mapping weather fluctuations globally by pulling real-time meteorological metrics.",
    longDescription: "A beautiful front-end client fetching atmospheric parameters from public API feeds. Implements dynamic weather layout switches (e.g. rain, snow, sunny) and clean information widgets to present structured climate metrics.",
    architecture: [
      "Asynchronous Fetch API patterns backed by error-handling interfaces.",
      "Modular CSS Flexbox grid adapting cleanly to all screen sizes.",
      "Interactive DOM state management generating instant metric conversions."
    ],
    keyChallenges: [
      "Optimizing network call sequences and adding rate-protection thresholds to prevent service blocks.",
      "Structuring accessible dashboard widgets to highlight complex UV indexes and barometric rates."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/weather-site",
    tags: ["JavaScript", "APIs", "Fetch API", "Grid & Flexbox", "Productivity Tool"],
  },
  {
    title: "Interactive ToDo Planner",
    name: "ToDoList",
    category: "web",
    categoryLabel: "Full-Stack & Web",
    description: "A productivity system featuring task categorization, custom filters, and LocalStorage data syncs.",
    longDescription: "Designed to optimize day-to-day productivity. Features color-coded status columns, seamless task toggling, and clean visual structures that sync instantly with browser cache databases.",
    architecture: [
      "Vanilla DOM bindings managing direct event bubbles and updates.",
      "Local Cache synchronization preventing user data loss on browser refresh.",
      "Dynamic search filters matching task titles and category groups."
    ],
    keyChallenges: [
      "Building a custom drag-and-drop or ordering sequence from scratch without reliance on third-party libraries.",
      "Polishing responsive CSS modules to guarantee fully visible content grids on extra-small mobile interfaces."
    ],
    language: "JavaScript",
    html_url: "https://github.com/omar23142/ToDoList",
    tags: ["Vanilla JS", "DOM Events", "LocalStorage", "CSS3 Transitions", "Task Management"],
  },
  {
    title: "A* Algorithm 8-Puzzle Solver",
    name: "8puzzle",
    category: "dsa",
    categoryLabel: "Algorithms & Structures",
    description: "A highly analytical Java solver for the classic 8-puzzle game using the A* Search algorithm.",
    longDescription: "An advanced algorithmic problem-solver designed within Princeton University's computer science paradigms. It finds the absolute shortest sequence of moves to solve a slider board puzzle using priority queues and Manhattan distance calculations.",
    architecture: [
      "Custom Priority Queue utilizing minimum heap keys for path evaluation.",
      "Manhattan and Hamming distance heuristic systems calculating distance parameters.",
      "Strict node backtracking representing the sequence of puzzle configurations."
    ],
    keyChallenges: [
      "Optimizing memory structures to prevent Out-Of-Memory exceptions during large state space expansions.",
      "Implementing efficient cache structures to filter out duplicate board arrangements."
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
    description: "A content-aware image scaling system implementing seam carving algorithms based on energy matrices.",
    longDescription: "An image processing engine. It decreases width or height without distorting important details by identifying and deleting 'seams' (low-energy pixel paths) using shortest-path graph calculations and dynamic programming.",
    architecture: [
      "Energy calculating engine using dual-gradient energy algorithms.",
      "Dynamic programming arrays mapping structural seam paths through the image.",
      "Coordinate mapping buffers reconstructing the pixel matrix instantly."
    ],
    keyChallenges: [
      "Formulating linear-time dynamic algorithms to compute optimal horizontal and vertical pathways through complex matrices.",
      "Optimizing pixel removal operations to operate efficiently on high-definition images."
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
    description: "A semantic lexicon graph modeling hierarchical structures and computing shortest ancestral paths.",
    longDescription: "Builds a semantic database mapping nouns, synonyms, and relations. It structures a directed acyclic graph (DAG) to measure vocabulary distance and compute ancestral connections efficiently.",
    architecture: [
      "Directed Acyclic Graph (DAG) structures handling thousands of lexicographical links.",
      "Shortest Ancestral Path (SAP) algorithms resolving queries over dense graphs.",
      "Breadth-First Search (BFS) optimization modules returning quick semantic matches."
    ],
    keyChallenges: [
      "Devising a fast, memory-friendly BFS implementation capable of running millions of ancestral inquiries without leaking heap spaces.",
      "Establishing strict cycle-detection checks during parsing to guarantee DAG validity."
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
    description: "A 2D spatial search tree optimizing orthogonal range inquiries and nearest-neighbor lookups.",
    longDescription: "A computational geometry solver that structures a 2D-Tree to store 2D coordinates. It replaces traditional brute-force linear checks with recursive spatial pruning, optimizing range queries and nearest-neighbor search.",
    architecture: [
      "Kd-Tree hierarchical node configurations splitting spaces recursively along X and Y axes.",
      "Rectangle pruning parameters restricting search branches.",
      "Recursive lookup functions tracking the closest distance thresholds."
    ],
    keyChallenges: [
      "Designing recursive pruning conditionals that accurately disregard full branches of the tree, ensuring sub-linear time metrics.",
      "Managing strict boundary cases where points fall precisely on split lines."
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
    description: "A mathematical simulator analyzing physical percolation thresholds using disjoint-set structures.",
    longDescription: "Structures a grid model to analyze threshold behaviors of material percolation. It executes hundreds of Monte Carlo experiments to calculate physical constants using fast Disjoint-Set (Union-Find) algorithms.",
    architecture: [
      "Weighted Quick-Union algorithm model with path compression optimizations.",
      "Monte Carlo engine randomizing open nodes sequentially.",
      "Statistical math layers calculating standard deviations and confidence boundaries."
    ],
    keyChallenges: [
      "Eliminating the 'backwash' phenomenon (where virtual bottom nodes falsely backfill open sites) without decreasing efficiency.",
      "Ensuring constant-time connectivity calls across large grid systems."
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
    description: "A network flow solver computing mathematical playoff eliminations using Max-Flow Min-Cut.",
    longDescription: "Uses network flow theory to resolve complex sports elimination scenarios. It maps teams, schedules, and capacities to a graph, applying the Ford-Fulkerson algorithm to verify if a team is mathematically out of playoff contention.",
    architecture: [
      "Network flow graph generators mapping source, match, team, and sink nodes.",
      "Ford-Fulkerson and Edmonds-Karp implementations solving network capacities.",
      "Min-Cut calculations generating concrete elimination proof certificates."
    ],
    keyChallenges: [
      "Constructing and configuring graph layouts that correctly model all schedule combinations.",
      "Interpreting min-cut results to isolate the exact subset of teams responsible for the elimination."
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
    description: "A computational geometry system identifying lines of collinear points via mergesort and slope calculations.",
    longDescription: "Solves pattern recognition within sets of 2D coordinates. It locates all line segments containing four or more collinear points using fast sorting structures, reducing typical quartic complexity to quadratic-logarithmic complexity.",
    architecture: [
      "Custom point coordinate structures with specialized slope calculators.",
      "Slope-comparator modules sorting points recursively using Mergesort.",
      "Linear segments validation blocks filtering out sub-segments."
    ],
    keyChallenges: [
      "Optimizing coordinate checks to prevent duplicates while avoiding high memory footprints.",
      "Structuring coordinate systems to accurately handle vertical lines with infinite slopes."
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
    description: "Generic collection structures implementing double-ended queues and randomized priority arrays.",
    longDescription: "Low-level data structure implementations focused on memory speed. Establishes generic Deques (using doubly-linked lists) and Randomized Queues (using resizing arrays) with constant-time operations.",
    architecture: [
      "Doubly-Linked List architecture managing dynamic front-and-back additions.",
      "Resizing Array buffer shuffling indices to return random elements in constant time.",
      "Generic iteration interfaces compliant with standard loop declarations."
    ],
    keyChallenges: [
      "Constructing randomized iterations that support independent, nested loops without shares in state.",
      "Maintaining strict constant-time boundaries for Deque actions under heavy memory loads."
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

  // Categories definition
  const categories = [
    { id: "all", label: "All Projects", count: projectsData.length },
    {
      id: "game",
      label: "Featured (CS50)",
      count: projectsData.filter((p) => p.category === "game").length,
    },
    {
      id: "web",
      label: "Full-Stack & Web",
      count: projectsData.filter((p) => p.category === "web").length,
    },
    {
      id: "dsa",
      label: "Algorithms & DS",
      count: projectsData.filter((p) => p.category === "dsa").length,
    },
  ];

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Language colors for badges
  const getLanguageStyles = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "typescript":
        return {
          bg: "bg-blue-50 text-blue-700 border-blue-200",
          icon: <SiTypescript className="text-blue-500" />,
        };
      case "javascript":
        return {
          bg: "bg-yellow-50 text-yellow-800 border-yellow-200",
          icon: <SiJavascript className="text-yellow-600" />,
        };
      case "java":
        return {
          bg: "bg-orange-50 text-orange-800 border-orange-200",
          icon: <FaJava className="text-orange-600" />,
        };
      case "html / javascript":
        return {
          bg: "bg-red-50 text-red-800 border-red-200",
          icon: (
            <div className="flex gap-1 items-center">
              <SiHtml5 className="text-red-500" />
              <SiJavascript className="text-yellow-500" />
            </div>
          ),
        };
      case "python / flask / js":
        return {
          bg: "bg-teal-50 text-teal-800 border-teal-200",
          icon: (
            <div className="flex gap-1 items-center">
              <span className="text-[10px] font-bold text-teal-600 mr-0.5">Py</span>
              <SiJavascript className="text-yellow-500" />
            </div>
          ),
        };
      default:
        return {
          bg: "bg-zinc-50 text-zinc-700 border-zinc-200",
          icon: <FaCode className="text-zinc-500" />,
        };
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 pb-20">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />

      {/* Top Banner Gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <main className="relative max-w-7xl mx-auto px-6 pt-16 z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FaCode className="text-xs" /> Portfolio Showcase
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            A curated showcase of full-stack web applications, interactive software,
            and high-performance data structures & algorithms implementations.
          </motion.p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-sm mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
            <input
              type="text"
              placeholder="Search by name, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-zinc-800"
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

        {/* Project Grid */}
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
              const langStyle = getLanguageStyles(project.language);
              const isBullsAndCows =
                project.name.toLowerCase().includes("bulls-and-cows");

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
                  className={`group relative flex flex-col justify-between bg-white border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isBullsAndCows
                      ? "border-amber-200 shadow-md shadow-amber-50"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Glowing Capstone Spotlight */}
                  {isBullsAndCows && (
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-400 to-orange-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm flex items-center gap-1">
                      <FaFire className="text-[10px] animate-pulse" /> Capstone
                    </div>
                  )}

                  <div>
                    {/* Header: Category & Language */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {project.categoryLabel}
                      </span>
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${langStyle.bg}`}
                      >
                        {langStyle.icon}
                        <span>{project.language}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-zinc-800 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer: Tags & Detail CTA */}
                  <div className="mt-6">
                    {/* Tags */}
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

                    {/* Action button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                        Behind The Code <FaArrowRight size={10} />
                      </span>
                      <div className="p-2 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-colors">
                        <FaExternalLinkAlt className="text-zinc-400 group-hover:text-blue-600 transition-colors text-[10px]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-slate-200 rounded-3xl shadow-sm"
          >
            <div className="max-w-md mx-auto px-4">
              <FaCode className="mx-auto text-4xl text-zinc-300 mb-4" />
              <h3 className="text-base font-bold text-zinc-800">
                No matching projects found
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Try searching for alternate keywords like "Java", "TypeScript", or
                specific tags like "Algorithms" or "CS50".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-200 transition-colors cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Project Detailed Drawer Overlay */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10"
              >
                {/* Header Section */}
                <div className="relative overflow-hidden bg-slate-900 text-white p-6 sm:p-8">
                  {/* Subtle Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-indigo-900/40 pointer-events-none" />

                  {/* Top Bar Actions */}
                  <div className="relative flex justify-between items-center mb-6 z-10">
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

                  {/* Project Info */}
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {activeProject.title}
                    </h2>
                    <div className="flex gap-2 items-center mt-3">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 font-semibold flex items-center gap-1.5">
                        {getLanguageStyles(activeProject.language).icon}
                        {activeProject.language}
                      </span>
                      {activeProject.featured && (
                        <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30 font-semibold flex items-center gap-1.5">
                          <FaFire className="text-[10px]" /> Featured Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                  {/* Project Overview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Project Overview
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Technical Architecture */}
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

                  {/* Engineering Challenges Solved */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Engineering Challenges Solved
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.keyChallenges.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-zinc-600">
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-600 font-bold text-[10px]">
                            ✔
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags Detail */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Technologies & Paradigms
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

                {/* Footer Section */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Review and clone this repository on GitHub.
                  </span>
                  <a
                    href={activeProject.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold shadow-md transition-colors cursor-pointer"
                  >
                    <FaGithub className="text-sm" /> View on GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
