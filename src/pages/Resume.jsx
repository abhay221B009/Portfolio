import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Eye,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "WapHire (Employer Portal & ATS)",
      duration: "Recent Experience",
      location: "Full-Stack Development",
      points: [
        "Engineered core employer and recruiter workflows with React 18, Vite, Redux Toolkit, and Axios.",
        "Built modular backend REST API endpoints using Python, Django 5.2, and Django REST Framework.",
        "Implemented JWT authentication (SimpleJWT), protected routes, and multi-tenant organization models.",
        "Designed Instahyre-style candidate tracking pipeline with recruiter stage management and recruiter inbox.",
        "Integrated AI recruitment tools for automated job description generation and zero-assumption JD extraction.",
        "Managed Git branching strategies, pull requests, and automated CI/CD workflows via GitHub Actions.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Proxenix",
      duration: "June 2025 – July 2025",
      location: "Remote",
      points: [
        "Built responsive client-facing interfaces with React, HTML5, and CSS3.",
        "Integrated backend REST APIs into dashboards with JWT-based session handling.",
        "Implemented reusable component patterns and improved client-side routing consistency.",
        "Collaborated in Agile sprint cadence using Git, GitHub, and client feedback iterations.",
      ],
    },
  ];

  const projects = [
    {
      title: "WapHire — Employer Portal & ATS",
      tech: "React 18, Vite, Redux Toolkit, Python, Django 5.2, Django REST Framework, PostgreSQL/SQLite, JWT, GitHub Actions",
      points: [
        "Developed end-to-end recruitment platform for job publishing, candidate management, and hiring pipelines.",
        "Architected modular endpoints: /api/v1/auth/, /jobs/, /candidates/, /inbox/, /team/.",
        "Structured async worker topology planning with Redis and Celery for background parsing tasks.",
      ],
    },
    {
      title: "Trippy — AI-Powered Travel Planner",
      tech: "React.js, Node.js, Express.js, MongoDB, Google Gemini API, JWT, Zod, bcrypt, Tailwind CSS",
      points: [
        "Constructed full-stack travel planner generating tailored itineraries with Gemini LLM integration.",
        "Implemented secure JWT user authentication, password hashing with bcrypt, and Zod input validation schemas.",
        "Configured multi-service deployment using Vercel (client) and Render (server).",
      ],
    },
    {
      title: "Shopster — E-Commerce Web Application",
      tech: "React.js, Node.js, Express.js, MongoDB, Razorpay, Context API, Tailwind CSS",
      points: [
        "Built responsive e-commerce application featuring dynamic product catalog and multi-facet filtering.",
        "Maintained global cart and wishlist state via React Context API with persistent browser storage.",
        "Integrated Razorpay payment gateway for secure transaction processing.",
      ],
    },
    {
      title: "CloudSphere — Cloud Storage Platform",
      tech: "Node.js, Express.js, AWS S3, MongoDB, AWS EC2, AWS IAM",
      points: [
        "Engineered secure cloud file management platform integrating Node.js backend with Amazon S3.",
        "Implemented presigned URL generation for authorized file uploads, downloads, and access control.",
        "Configured cloud resources using AWS IAM policies and EC2 instances.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Jaypee University of Engineering and Technology (JUET)",
      period: "Aug 2022 – June 2026",
      location: "Guna, Madhya Pradesh",
      description:
        "Comprehensive studies in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Cloud Computing.",
    },
    {
      degree: "Class XII (PCM)",
      school: "St. Xavier's Inter College",
      period: "2021",
      location: "Jaunpur, Uttar Pradesh",
      description: "Academic focus on Physics, Chemistry, and Mathematics (Score: 80.4%).",
    },
  ];

  const certifications = [
    "AWS Certified Developer – Associate — Infosys",
    "AWS Certified Cloud Practitioner — Infosys",
    "Agile and Scrum Fundamentals — Infosys",
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: "JavaScript (ES6+), Python, C, C++, Java",
    },
    {
      category: "Frontend",
      skills: "React 18, Vite, Redux Toolkit, Next.js, HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP",
    },
    {
      category: "Backend & APIs",
      skills: "Python / Django 5.2, Django REST Framework, Node.js, Express.js, REST APIs, JWT, Zod, bcrypt",
    },
    {
      category: "Databases",
      skills: "PostgreSQL, MongoDB, SQLite, MySQL",
    },
    {
      category: "Cloud & DevOps",
      skills: "AWS (S3, EC2, IAM, VPC), GitHub Actions, Vercel, Render | Planned: Redis, Celery",
    },
    {
      category: "AI & Tools",
      skills: "Google Gemini API, OpenAI API, Git, GitHub, VS Code, Postman, Figma",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Curriculum Vitae
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-1 mb-2">
            Professional Resume
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Full-Stack Software Engineer
          </p>
        </motion.div>

        {/* Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 sm:p-12 space-y-10"
        >
          {/* Action Triggers */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Abhay Raj Chauhan
              </h2>
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                Full-Stack Software Engineer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Abhay_resume.pdf"
                download="Abhay_Raj_Chauhan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>

              <a
                href="/Abhay_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                Open PDF
              </a>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Open to Opportunities (Delhi NCR, Bengaluru, Remote)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:abhayrajchauhan.976@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                abhayrajchauhan.976@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>+91 63860 88195</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Github className="w-4 h-4 text-gray-400" />
              <a
                href="https://github.com/abhay221B009"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                github.com/abhay221B009
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin className="w-4 h-4 text-gray-400" />
              <a
                href="https://www.linkedin.com/in/abhay-chauhan-635995219/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                linkedin.com/in/abhay-chauhan-635995219
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Professional Summary
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Full-Stack Software Engineer with proven hands-on experience building production-grade web applications, scalable REST APIs, and AI integrations. Experienced with React 18, Redux Toolkit, Python/Django REST Framework, Node.js, PostgreSQL, and MongoDB. Contributed to real-world products including the WapHire ATS & employer portal and the Trippy AI travel planner. B.Tech Computer Science graduate (June 2026) with verified credentials in AWS cloud development and agile practices.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-blue-500 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      {exp.role} <span className="font-normal text-gray-500 dark:text-gray-400">— {exp.company}</span>
                    </h4>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Key Engineering Projects
            </h3>

            <div className="space-y-5">
              {projects.map((proj, idx) => (
                <div key={idx} className="border-l-2 border-indigo-500 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      {proj.title}
                    </h4>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {proj.tech}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 pt-1">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-bold text-gray-900 dark:text-white mb-0.5">
                    {cat.category}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {cat.skills}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500 pl-4 space-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {edu.school} • {edu.location}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Industry Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Resume;
