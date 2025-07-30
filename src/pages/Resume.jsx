import React from "react";
import { motion } from "framer-motion";
import { Download, Eye, MapPin, Mail, Phone, Github } from "lucide-react";

const Resume = () => {
  const projects = [
    {
      title: "Shopster – E-commerce Web App",
      link: "https://github.com/abhay221B009/Shopster",
      tech: "React.js, Context API, JavaScript, HTML, CSS",
      features: [
        "Shopping cart, wishlist, product filtering, client-side routing",
        "Responsive design with reusable components and persistent local state",
        "Delivered seamless UX with fast navigation and persistent cart/wishlist",
      ],
    },
    {
      title: "QuizBot – Quiz Web Application",
      link: "https://github.com/abhay221B009/quizbot",
      tech: "HTML, CSS, JavaScript, Open Trivia API",
      features: [
        "Quiz scoring, difficulty & category filters, real-time feedback",
        "Timer-based questions with responsive layout and interactive feedback",
        "Enabled 500+ quizzes with 95% API efficiency",
      ],
    },
    {
      title: "CloudSphere – Cloud Storage Platform",
      link: "https://github.com/abhay221B009/CloudShpere",
      tech: "React.js, Node.js (if backend implied), Cloud services",
      features: [
        "Secure file upload, download, and sharing functionalities",
        "Public/private sharing with fine-grained access control",
        "Auto file deletion and on-the-fly cloud-based file conversion",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Jaypee University Of Engineering & Technology",
      period: "Aug 2022 – Jun 2026",
      description:
        "Pursuing B.Tech in CSE with focus on full-stack development and cloud computing.",
    },
    {
      degree: "Class XII (PCM)",
      school: "St. Xaviers Inter College, Jaunpur, U.P.",
      period: "2021",
      description: "Score: 80.4%",
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner – Infosys",
    "AWS Certified Developer – Associate – Infosys",
    "Agile and Scrum Fundamentals – Infosys",
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional experience and qualifications
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
        >
          {/* Icon Buttons on Top Right */}
          <div className="absolute right-6 top-6 flex gap-3">
            <a
              href="/Abhay_Raj_Chauhan_Resume.pdf"
              download
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              title="Download PDF Resume"
            >
              <Download className="w-5 h-5" />
            </a>
            <a
              href="/Abhay_Raj_Chauhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
              title="View PDF Resume"
            >
              <Eye className="w-5 h-5" />
            </a>
          </div>

          {/* Personal Info */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Abhay Raj Chauhan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer & AWS Cloud Practitioner
            </p>
            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Guna, Madhya Pradesh
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                abhayrajchauhan.976@gmail.com
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +91-6386088195
              </div>
              <div className="flex items-center">
                <Github className="w-4 h-4 mr-1" />
                <a
                  href="https://github.com/abhay221B009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              B.Tech CSE student with full-stack experience (React, JavaScript,
              AWS), AWS-certified, skilled in building scalable,
              cloud-integrated web apps.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Languages:</strong> JavaScript, C/C++, Python (basic),
                Java (basic), PHP (Beginner)
              </li>
              <li>
                <strong>Web Technologies:</strong> HTML, CSS, React.js, Node.js,
                REST APIs, WordPress
              </li>
              <li>
                <strong>Database:</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Cloud/DevOps:</strong> AWS (S3, EC2, IAM, VPC), Agile,
                Scrum
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Figma
              </li>
              <li>
                <strong>Concepts:</strong> OOP, DSA, SDLC, Debugging
              </li>
              <li>
                <strong>Soft Skills:</strong> Teamwork, Communication,
                Problem-solving, Remote Collaboration
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Projects
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-purple-600"
                    >
                      {project.title}
                    </a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    {project.tech}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-emerald-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {edu.school} | {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {cert}
                  </span>
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
