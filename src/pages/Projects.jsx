import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Server,
  Cloud,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "waphire",
      isFlagship: true,
      title: "WapHire — Employer Portal & ATS",
      tagline: "Hiring at the speed of WhatsApp & AI",
      category: "fullstack",
      description:
        "A comprehensive recruiter-focused hiring platform and applicant tracking system (ATS) engineered to streamline job publishing, candidate pipeline management, and AI-assisted recruitment workflows.",
      technologies: [
        "React 18",
        "Vite",
        "Redux Toolkit",
        "Python",
        "Django 5.2",
        "Django REST Framework",
        "PostgreSQL / SQLite",
        "JWT Auth",
        "GitHub Actions",
      ],
      plannedTech: ["Redis", "Celery", "Nginx/Gunicorn", "Prometheus/Grafana"],
      highlights: [
        "Instahyre-style candidate tracking pipeline with recruiter drag/stage transitions",
        "AI-powered Job Description (JD) generation and strict zero-assumption JD extraction",
        "Modular REST APIs: /api/v1/auth/, /jobs/, /candidates/, /inbox/, /team/",
        "Multi-role employer organization and team permission models",
        "Centralized Recruiter Inbox and communication interface",
        "CI/CD workflow configurations using GitHub Actions",
      ],
      github: "https://github.com/abhay221B009",
      live: null,
      badgeText: "Flagship Professional Product",
      role: "Full-Stack Software Engineer",
    },
    {
      id: "trippy",
      isFlagship: false,
      title: "Trippy — AI-Powered Travel Planner",
      tagline: "Customized Itinerary Generation with Gemini AI",
      category: "fullstack",
      description:
        "Full-stack AI travel planning web application that generates personalized itineraries based on user preferences such as budget, travel duration, destination, and interests with secure user authentication and saved trip management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini API",
        "JWT",
        "Zod",
        "bcrypt",
        "Tailwind CSS",
        "Framer Motion",
      ],
      highlights: [
        "Prompt-engineered Google Gemini API integration for structured JSON itineraries",
        "End-to-end user authentication with JWT, bcrypt password hashing, and Zod input validation",
        "Saved trip dashboard with interactive itinerary breakdown and timeline views",
        "Production deployment configured on Vercel (frontend) and Render (backend API)",
      ],
      github: "https://github.com/abhay221B009/Trippy",
      live: "https://trippy-sand-five.vercel.app/",
      badgeText: "Full-Stack + AI",
      role: "Creator & Developer",
    },
    {
      id: "shopster",
      isFlagship: false,
      title: "Shopster — E-Commerce Web Application",
      tagline: "Modern E-Commerce Store with Persistent Cart & Checkout",
      category: "fullstack",
      description:
        "A full-stack e-commerce web application featuring dynamic category browsing, multi-criteria product filtering, persistent cart and wishlist state via React Context API, and Razorpay payment gateway integration.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Context API",
        "Tailwind CSS",
        "JavaScript",
      ],
      highlights: [
        "Global state management for cart, wishlist, and active filters via Context API",
        "Secure checkout workflow with Razorpay payment gateway integration",
        "Dynamic search and price/category filtering with persistent browser storage",
        "Modular and responsive component system optimized for mobile and desktop",
      ],
      github: "https://github.com/abhay221B009/Shopster",
      live: "https://shopster-arc.netlify.app/",
      badgeText: "Full-Stack E-Commerce",
      role: "Creator & Developer",
    },
    {
      id: "cloudsphere",
      isFlagship: false,
      title: "CloudSphere — Cloud Storage Platform",
      tagline: "Scalable File Storage on AWS S3 & Node.js",
      category: "backend",
      description:
        "A secure cloud storage and file management platform integrating Node.js backend services with AWS S3 for authenticated file uploads, downloads, access permission handling, and cloud storage workflows.",
      technologies: [
        "Node.js",
        "Express.js",
        "AWS S3",
        "MongoDB",
        "AWS EC2",
        "AWS IAM",
        "REST API",
      ],
      highlights: [
        "Direct and secure file streaming to Amazon S3 with presigned URLs",
        "Granular access control and permission models for uploaded resources",
        "Metadata indexing and search using MongoDB document storage",
        "Cloud architecture designed using AWS IAM roles, S3 buckets, and EC2 instances",
      ],
      github: "https://github.com/abhay221B009/CloudShpere",
      live: null,
      badgeText: "Cloud & Backend",
      role: "Backend & Cloud Engineer",
    },
    {
      id: "portfolio",
      isFlagship: false,
      title: "Professional Developer Portfolio",
      tagline: "Personal Engineering Portfolio & Technical Showcase",
      category: "frontend",
      description:
        "A responsive, accessible personal engineering portfolio built with React 18, Vite, and Tailwind CSS. Features custom dark/light theme switching, Framer Motion animations, EmailJS contact integration, and clean SPA routing.",
      technologies: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "EmailJS",
      ],
      highlights: [
        "Custom dark/light mode toggle integrated with system preferences and localStorage",
        "Clean SPA architecture with React Router DOM v7 and zero build warnings",
        "Client-side verified contact dispatch via EmailJS without backend dependencies",
        "Automated deployment on Vercel with clean rewrite rules",
      ],
      github: "https://github.com/abhay221B009/Portfolio",
      live: "https://portfolio-abhay-95.vercel.app/",
      badgeText: "Frontend SPA",
      role: "Creator & Developer",
    },
    {
      id: "quizbot",
      isFlagship: false,
      title: "QuizBot — Dynamic Quiz Web Application",
      tagline: "Real-Time Interactive Quiz Engine",
      category: "frontend",
      description:
        "An interactive browser-based quiz application dynamically delivering questions via external REST API with live feedback, category/difficulty filters, real-time timer calculations, and dynamic scoring.",
      technologies: ["JavaScript (ES6)", "HTML5", "CSS3", "REST API"],
      highlights: [
        "Asynchronous API handling fetching dynamic quiz categories and difficulty tiers",
        "Timer-based state machine evaluating responses and score tallies",
        "Zero-dependency vanilla JavaScript logic for high responsiveness",
      ],
      github: "https://github.com/abhay221B009/quizbot",
      live: null,
      badgeText: "Frontend & API",
      role: "Developer",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "backend", name: "Backend & Cloud" },
    { id: "frontend", name: "Frontend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
            Selected Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Featured Projects & Engineering Work
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Real-world applications spanning enterprise hiring platforms, AI-powered systems, e-commerce architectures, and cloud services.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === category.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects List / Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            if (project.isFlagship) {
              return (
                /* Flagship WapHire Presentation */
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-blue-500/40 dark:border-blue-500/30 shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.badgeText}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {project.role}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                          {project.title}
                        </h2>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Key Technical Highlights & Implementation
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                          Technologies Implemented & Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Architecture & Planning */}
                      {project.plannedTech && (
                        <div className="pt-1">
                          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                            Architecture & Deployment Planning
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Planned async task workers with Redis/Celery, Gunicorn/Nginx reverse proxy topology, and containerized monitoring using Prometheus/Grafana.
                          </p>
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                          <Github className="w-4 h-4" />
                          View Profile & Work
                        </a>
                      </div>
                    </div>

                    {/* Summary Panel */}
                    <div className="lg:col-span-4 bg-gray-50 dark:bg-gray-900/60 rounded-xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                        Engineering Highlights
                      </h4>
                      <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            Frontend Architecture
                          </div>
                          React 18 + Redux Toolkit for unified global recruiter state across candidate pipelines and applicant profiles.
                        </div>
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            Django REST Framework API
                          </div>
                          Modular endpoints with SimpleJWT token authentication, transactional candidate updates, and organization multi-tenancy.
                        </div>
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            AI Automation
                          </div>
                          Structured prompt engineering for instant JD creation and zero-assumption candidate parsing pipelines.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            /* Standard Project Cards */
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        {project.badgeText}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repo for ${project.title}`}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live site for ${project.title}`}
                          className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Role: {project.role}
                  </span>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Live Application <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1"
                    >
                      View Code on GitHub <Github className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Projects;
