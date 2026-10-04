import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Wrench,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const skillGroups = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      description: "Core languages used across frontend, backend, and algorithm implementations.",
      items: [
        { name: "JavaScript (ES6+)", level: "Primary", tag: "Frontend & Node" },
        { name: "Python", level: "Primary", tag: "Django & Scripting" },
        { name: "C++", level: "Working Knowledge", tag: "DSA & Problem Solving" },
        { name: "C", level: "Working Knowledge", tag: "Systems Foundation" },
        { name: "Java", level: "Working Knowledge", tag: "OOP Principles" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      description: "Component-driven architectures, modern state management, and responsive interfaces.",
      items: [
        { name: "React 18", level: "Primary", tag: "Component Architecture" },
        { name: "Redux Toolkit", level: "Primary", tag: "Global State Management" },
        { name: "Vite", level: "Primary", tag: "Build Tooling & HMR" },
        { name: "Tailwind CSS", level: "Primary", tag: "Modern Utility Styling" },
        { name: "HTML5 & CSS3", level: "Primary", tag: "Semantic & Responsive" },
        { name: "Next.js", level: "Working Knowledge", tag: "SSR & App Router" },
        { name: "Framer Motion", level: "Working Knowledge", tag: "Interactive Micro-interactions" },
        { name: "GSAP", level: "Working Knowledge", tag: "Timeline Animations" },
      ],
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      description: "REST API design, authentication flows, data validation, and modular backend services.",
      items: [
        { name: "Python / Django 5.2", level: "Primary", tag: "Production Framework" },
        { name: "Django REST Framework", level: "Primary", tag: "REST API Design" },
        { name: "Node.js & Express", level: "Primary", tag: "Full-Stack Services" },
        { name: "JWT / SimpleJWT", level: "Primary", tag: "Secure Auth & Tokens" },
        { name: "RESTful API Design", level: "Primary", tag: "Endpoint Modeling" },
        { name: "Zod & bcrypt", level: "Primary", tag: "Validation & Hashing" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-teal-500" />,
      description: "Relational and document storage solutions for transactional and flexible application data.",
      items: [
        { name: "PostgreSQL", level: "Primary", tag: "Relational Architecture" },
        { name: "MongoDB", level: "Primary", tag: "NoSQL & Mongoose" },
        { name: "SQLite", level: "Primary", tag: "Development & Testing" },
        { name: "MySQL", level: "Working Knowledge", tag: "Relational Schemas" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud, Infrastructure & DevOps",
      icon: <Cloud className="w-5 h-5 text-sky-500" />,
      description: "Cloud hosting, automated deployment pipelines, and async worker topology planning.",
      items: [
        { name: "AWS S3", level: "Primary", tag: "Asset & File Storage" },
        { name: "AWS EC2 & IAM", level: "Primary", tag: "Compute & Access Control" },
        { name: "AWS VPC", level: "Working Knowledge", tag: "Network Topology" },
        { name: "GitHub Actions", level: "Primary", tag: "CI/CD & Automation" },
        { name: "Vercel & Render", level: "Primary", tag: "Production Deployment" },
        { name: "Redis & Celery", level: "Architecture / Planned", tag: "Async Task Queues" },
      ],
    },
    {
      id: "ai",
      title: "AI Integration & Workflows",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      description: "Integrating LLM capabilities into production user workflows with structured outputs.",
      items: [
        { name: "Google Gemini API", level: "Primary", tag: "Generative Workflows" },
        { name: "OpenAI API", level: "Working Knowledge", tag: "Prompt Engineering" },
        { name: "AI JD Generation", level: "Primary", tag: "Recruitment Automation" },
        { name: "Zero-Assumption Parsing", level: "Primary", tag: "Strict Ingestion Logic" },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      description: "Essential toolchain for version control, API testing, debugging, and design handoff.",
      items: [
        { name: "Git & GitHub", level: "Primary", tag: "Branching & PR Workflows" },
        { name: "VS Code", level: "Primary", tag: "Primary IDE" },
        { name: "Postman", level: "Primary", tag: "API Debugging & Contracts" },
        { name: "Figma", level: "Working Knowledge", tag: "UI Inspection & Specs" },
      ],
    },
    {
      id: "concepts",
      title: "Engineering Fundamentals",
      icon: <BookOpen className="w-5 h-5 text-rose-500" />,
      description: "Theoretical and methodological foundations governing clean, maintainable software.",
      items: [
        { name: "Object-Oriented Programming (OOP)", level: "Primary", tag: "Software Design" },
        { name: "Data Structures & Algorithms (DSA)", level: "Primary", tag: "Algorithmic Efficiency" },
        { name: "Model-View-Controller (MVC)", level: "Primary", tag: "System Design Pattern" },
        { name: "Agile & Scrum Delivery", level: "Primary", tag: "Sprint Lifecycle" },
        { name: "SDLC Best Practices", level: "Primary", tag: "Quality Assurance" },
      ],
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Disciplines" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & APIs" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "ai", label: "AI Integration" },
    { id: "tools", label: "Tools & Concepts" },
  ];

  const filteredGroups = skillGroups.filter((group) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "tools") return group.id === "tools" || group.id === "concepts";
    return group.id === selectedFilter;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Technical Stack
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Skills & Engineering Capabilities
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Organized by discipline without arbitrary percentage meters. Distinguishing between core, day-to-day technologies and working knowledge / architectural planning.
          </p>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span><strong>Primary:</strong> Core Day-to-Day Stack</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
              <span><strong>Working Knowledge:</strong> Production-Capable</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <span><strong>Architecture / Planned:</strong> Designed & Structured</span>
            </div>
          </div>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === tab.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
                  {group.description}
                </p>

                {/* Items */}
                <div className="space-y-2.5">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 flex items-center justify-between gap-3 text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.level === "Primary"
                              ? "bg-blue-600 dark:bg-blue-400"
                              : item.level === "Architecture / Planned"
                              ? "bg-purple-500"
                              : "bg-gray-400 dark:bg-gray-500"
                          }`}
                        ></span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                          {item.tag}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-medium ${
                            item.level === "Primary"
                              ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                              : item.level === "Architecture / Planned"
                              ? "bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                              : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Primary Stack Highlight Box */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            <Sparkles className="w-4 h-4" />
            Core Daily Stack
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            React 18 + Python/Django + Node.js + PostgreSQL/MongoDB + REST APIs
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My most active engineering focus revolves around developing full-stack applications with clear client-server boundaries, predictable API contracts, secure authentication, and practical AI integrations.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
