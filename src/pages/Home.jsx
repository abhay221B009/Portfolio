import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mail,
  Github,
  Linkedin,
  Layers,
  Server,
  Database,
  Cloud,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";

const Home = () => {
  const coreCompetencies = [
    {
      title: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      stack: "React 18, Vite, Redux Toolkit, Tailwind CSS, Framer Motion",
      summary: "Dynamic SPAs, recruiter workflows, interactive candidate pipelines, and responsive design systems.",
    },
    {
      title: "Backend & REST APIs",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      stack: "Python, Django 5.2, Django REST Framework, Node.js, Express",
      summary: "JWT authentication, robust API endpoints, strict validation, modular service architectures.",
    },
    {
      title: "Database Architecture",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      stack: "PostgreSQL, MongoDB, MySQL, SQLite",
      summary: "Schema design, relational data modeling, query optimization, and persistent cloud storage.",
    },
    {
      title: "Cloud & AI Integration",
      icon: <Cloud className="w-5 h-5 text-purple-500" />,
      stack: "AWS (S3, EC2), Vercel, Render, Gemini API, OpenAI API",
      summary: "Automated JD generation, zero-assumption parsing, CI/CD with GitHub Actions, cloud storage workflows.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Profile Info & Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Software Engineering & Full-Stack Roles
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                    Abhay Raj Chauhan
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Full-Stack Software Engineer
                </h2>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                I build production-oriented web applications, robust REST APIs, and AI-powered workflows. With hands-on engineering experience spanning React, Django, Node.js, and cloud platforms, I focus on clean code, dependable backend architecture, and seamless user experiences.
              </p>

              {/* Verified Key Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "React 18",
                  "Python / Django DRF",
                  "Node.js",
                  "PostgreSQL & MongoDB",
                  "AWS & Vercel",
                  "AI Workflow Integration",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 group"
                >
                  View Featured Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/resume"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <FileText className="mr-2 w-4 h-4 text-blue-600 dark:text-blue-400" />
                  View Resume
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Let's Connect
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/abhay221B009"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay-chauhan-635995219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:abhayrajchauhan.976@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  abhayrajchauhan.976@gmail.com
                </span>
              </div>
            </motion.div>

            {/* Right Column: Clean Profile Representation with Balanced Vertical Framing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-72 sm:w-80 h-96 sm:h-[420px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-100 dark:bg-gray-800">
                  <img
                    src={Profile}
                    alt="Abhay Raj Chauhan"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 18%" }}
                  />
                </div>
                
                {/* Badges positioned cleanly at bottom to avoid overlapping head or shoulders */}
                <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    Full-Stack Engineer
                  </span>
                </div>

                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-purple-500" />
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    WapHire Contributor
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Flagship Professional Spotlight: WapHire */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <Briefcase className="w-4 h-4" />
                Featured Experience & Flagship Product
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                WapHire — Employer Portal & ATS
              </h2>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              Hiring at the speed of WhatsApp & AI
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-md">
                    Full-Stack Software Engineer
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Real-World Hiring & ATS Platform
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  Engineered core employer-facing modules for WapHire, a modern recruiting platform designed for HR teams, recruiters, and hiring managers. Focused on building robust frontend workflows with React 18 and Redux Toolkit, paired with Django REST Framework backend APIs for candidate lifecycles, job management, and AI-assisted recruitment operations.
                </p>

                {/* Engineering Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Candidate Pipeline UI:</strong> Instahyre-style recruiter pipeline with drag/stage transitions.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Django REST Endpoints:</strong> Modular APIs across auth, jobs, candidates, inbox, and team models.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>AI Recruitment Workflows:</strong> Automated JD generation and strict zero-assumption JD parsing.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>State & Auth:</strong> Redux Toolkit state slices, JWT authentication, and protected routing.
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3">
                  <div className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used & Implemented
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React 18",
                      "Vite",
                      "Redux Toolkit",
                      "Python",
                      "Django 5.2",
                      "Django REST Framework",
                      "JWT Auth",
                      "PostgreSQL / SQLite",
                      "Axios",
                      "GitHub Actions",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    System Architecture & Planning
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Architected async worker topology with Redis & Celery for background parsing tasks, Gunicorn/Nginx deployment planning, and containerized CI/CD pipelines.
                  </p>
                </div>
              </div>

              {/* Right Side: Quick Highlights Box */}
              <div className="lg:col-span-4 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Product Core Capabilities
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span><strong>Hiring Pipeline Builder:</strong> Dynamic candidate tracking stages for hiring teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span><strong>Recruiter Inbox:</strong> Centralized communication interface with application tracking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span><strong>Organization & Team Models:</strong> Multi-tenant role permissions for employers and hiring staff.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Explore all projects & architecture →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Verified Experience: Proxenix Internship */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6">
            <div>
              <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                Verified Internship
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                Web Development Intern — Proxenix
              </h3>
            </div>
            <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
              June 2025 – July 2025 • Remote
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Contributed to client-facing web development workflows, focusing on responsive UI engineering, component reusability, and backend REST API integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Built responsive UI with React, HTML/CSS and integrated backend APIs for functional client dashboards.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Implemented reusable components and JWT-based authentication using Git, GitHub, and agile workflows.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Delivered real-world web deployment with client feedback cycles in an MSME-certified remote program.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Architecture */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Engineering Architecture & Stack
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Practical full-stack engineering skills centered on scalable web applications, robust APIs, and maintainable data models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 bg-white dark:bg-gray-700 rounded-lg w-fit shadow-xs mb-4">
                    {comp.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {comp.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {comp.stack}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {comp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Production-oriented full-stack web applications and cloud integrations.
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-4 sm:mt-0 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trippy */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <span className="px-2.5 py-1 text-xs font-medium rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                  Full Stack + AI
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                  Trippy — AI Travel Planner
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Full-stack travel itinerary planner with Google Gemini API integration, user authentication, Zod validation, and customizable trip generation based on budget and duration.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">React</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Node.js</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">MongoDB</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Gemini API</span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-sm">
                <a
                  href="https://github.com/abhay221B009/Trippy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <a
                  href="https://trippy-sand-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live App
                </a>
              </div>
            </div>

            {/* Shopster */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <span className="px-2.5 py-1 text-xs font-medium rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                  Full Stack E-Commerce
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                  Shopster — E-Commerce Web App
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Responsive e-commerce platform with dynamic product filtering, persistent cart & wishlist state management via Context API, and Razorpay payment integration.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">React</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Node.js</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">MongoDB</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Razorpay</span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-sm">
                <a
                  href="https://github.com/abhay221B009/Shopster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <a
                  href="https://shopster-arc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live App
                </a>
              </div>
            </div>

            {/* CloudSphere */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <span className="px-2.5 py-1 text-xs font-medium rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                  Cloud & Backend
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                  CloudSphere — Storage Platform
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Cloud file management system integrating Node.js and AWS S3 for secure asset uploads, downloads, access permission handling, and file lifecycle management.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Node.js</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">AWS S3</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">MongoDB</span>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Express</span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-sm">
                <a
                  href="https://github.com/abhay221B009/CloudShpere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <Link
                  to="/projects"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Snapshot */}
      <section className="py-14 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                Education
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                Jaypee University of Engineering and Technology
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Graduated: June 2026 • Guna, Madhya Pradesh
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Focus on Full-Stack Development, Distributed REST Services, and Cloud Architecture.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="text-xs font-semibold uppercase text-purple-600 dark:text-purple-400">
                Certifications
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                Industry-Verified Credentials
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>AWS Certified Developer – Associate (Infosys)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>AWS Certified Cloud Practitioner (Infosys)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Agile and Scrum Fundamentals (Infosys)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h3 className="text-2xl font-bold">
                Let's build something useful together.
              </h3>
              <p className="text-blue-100 text-sm mt-1 max-w-xl">
                Open to Full-Stack Software Engineer and Backend Engineer roles in Delhi NCR, Bengaluru, Lucknow, or Remote.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
