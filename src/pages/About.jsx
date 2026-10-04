import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Layers,
  Server,
  Cpu,
  GitBranch,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import About_img from "../assets/about.jpg";

const About = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Jaypee University of Engineering & Technology (JUET)",
      period: "2022 – June 2026",
      description:
        "Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Database Management Systems, and Cloud Architectures.",
    },
    {
      icon: <Award className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      title: "AWS Certified Developer – Associate",
      subtitle: "Issued by Infosys",
      period: "Credential",
      description:
        "Validation in developing, deploying, and debugging cloud-based applications using AWS services including S3, EC2, IAM, and VPC.",
    },
    {
      icon: <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Issued by Infosys",
      period: "Credential",
      description:
        "Foundational validation of cloud concepts, security compliance, cloud economics, and core AWS infrastructure services.",
    },
    {
      icon: <Award className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
      title: "Agile and Scrum Fundamentals",
      subtitle: "Issued by Infosys",
      period: "Credential",
      description:
        "Practical understanding of Agile principles, sprint lifecycle management, collaborative Git workflows, and continuous integration practices.",
    },
  ];

  const engineeringPrinciples = [
    {
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      title: "Full-Stack Cohesion",
      description:
        "Bridging frontend interactivity (React 18, Redux Toolkit) with structured backend business logic (Django DRF, Node.js) for end-to-end reliability.",
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      title: "Production-Oriented Code",
      description:
        "Emphasizing strict data validation, predictable REST API contracts, modular state management, and clear separation of concerns.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: "Pragmatic AI Integration",
      description:
        "Implementing real-world LLM features with Gemini and OpenAI APIs, such as automated JD generation and structured, zero-assumption parsing.",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-orange-500" />,
      title: "Collaborative Engineering",
      description:
        "Comfortable with Git branching, pull request reviews, automated CI/CD workflows via GitHub Actions, and iterative agile delivery.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Professional Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Software Engineer with hands-on experience building production-focused web applications, scalable REST APIs, and AI-enabled workflows.
          </p>
        </motion.div>

        {/* Narrative & Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          <div className="lg:col-span-7 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Engineering Mindset & Background
            </h2>
            <p>
              I am an early-career software engineer and a B.Tech Computer Science graduate (June 2026) from Jaypee University of Engineering and Technology (JUET). Over the past several years, I have transitioned from foundational computer science concepts to engineering full-stack production systems.
            </p>
            <p>
              My most significant professional experience is engineering the employer portal and ATS for <strong>WapHire</strong>, an innovative hiring platform built for HR teams and recruiters. On WapHire, I developed recruiter workflows using React 18, Redux Toolkit, and Vite, while designing backend endpoints with Django 5.2 and Django REST Framework. I also worked on AI-assisted recruitment tools including automated job description generation and candidate ingestion.
            </p>
            <p>
              Prior to WapHire, I completed a verified Web Development Internship at <strong>Proxenix</strong>, where I implemented reusable React components, integrated client-facing REST APIs with JWT authentication, and worked through iterative deployment cycles.
            </p>
            <p>
              I am passionate about clean software architecture, system reliability, and continuous learning. I am currently seeking full-time Software Engineer, Full-Stack Developer, and Backend Engineer opportunities across Delhi NCR, Bengaluru, Lucknow, or Remote.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                Production Full-Stack Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Django & Node.js Backend APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                AWS Certified & Cloud-Aware
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700">
                <img
                  src={About_img}
                  alt="Abhay Raj Chauhan"
                  className="w-full h-96 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  B.Tech CSE
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Class of June 2026
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Engineering Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              What I Bring to an Engineering Team
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              A balanced approach combining frontend craft, API design, structured data handling, and disciplined collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xs"
              >
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg w-fit mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Verified Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Education & Verified Certifications
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Academic foundation complemented by industry certifications in cloud development and agile delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xs flex items-start gap-4"
              >
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl flex-shrink-0">
                  {cred.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {cred.title}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {cred.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {cred.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pt-1 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
