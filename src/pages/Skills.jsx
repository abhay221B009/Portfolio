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
              href="/636f60af-8607-41ee-9a7d-bcb16d05323a.pdf"
              download="Abhay_Raj_Chauhan_Resume.pdf"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              title="Download PDF Resume"
            >
              <Download className="w-5 h-5" />
            </a>
            <a
              href="/636f60af-8607-41ee-9a7d-bcb16d05323a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
              title="View PDF Resume"
            >
              <Eye className="w-5 h-5" />
            </a>
          </div>

          {/* ...rest of the component remains unchanged... */}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
