import React from "react";
import { motion } from "framer-motion";
import { Download, Eye, MapPin, Mail, Phone, Github } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Shopster - E-commerce Project",
      period: "Mar 2024 - Present",
      description:
        "Built a responsive e-commerce site using React.js with cart, wishlist, and product filtering features. Managed global state via Context API and optimized component performance.",
    },
    {
      title: "Frontend Developer",
      company: "QuizBot - Quiz Application",
      period: "Jun 2023 - Aug 2023",
      description:
        "Developed a quiz app delivering 500+ API-based questions dynamically via JavaScript. Achieved 95% API response efficiency with real-time feedback, scoring system, and timer integration.",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Jaypee University Of Engineering & Technology",
      period: "2022 - 2026 (Expected)",
      description:
        "Currently pursuing Bachelor's degree with focus on full stack development and cloud technologies.",
    },
    {
      degree: "Senior Secondary School",
      school: "St. Xaviers Inter College, Jaunpur, U.P.",
      period: "2021",
      description:
        "Completed senior secondary education with strong foundation in mathematics and science.",
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner – Infosys",
    "AWS Certified Developer Associate – Infosys",
    "Agile and Scrum Fundamentals – Infosys",
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abhay_Raj_Chauhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <button
              onClick={handleDownload}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              title="Download PDF Resume"
            >
              <Download className="w-5 h-5" />
            </button>
            <a
              href="/resume.pdf"
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
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Motivated and detail-oriented B.Tech CSE student with hands-on
              experience in full stack web development using technologies like
              React.js, JavaScript, and AWS. Excel in building responsive UIs
              and integrating RESTful APIs while managing cloud infrastructure.
              Certified AWS Cloud Practitioner and Developer Associate with
              commitment to creating scalable and efficient web solutions.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {job.company} | {job.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {job.description}
                  </p>
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
