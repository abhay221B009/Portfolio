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
} from "lucide-react";

const Resume = () => {
  const projects = [
    {
      title: "Trippy – AI-Powered Travel Planner",
      link: "https://github.com/abhay221B009",
      live: "#",
      tech: "React.js, Node.js, Express.js, MongoDB, JWT, Gemini API, Tailwind CSS",
      features: [
        "Built a full-stack AI travel planning app with secure JWT authentication",
        "Integrated Google Gemini API for personalized itinerary generation",
        "Implemented Zod validation, bcrypt hashing, and protected REST APIs",
        "Designed smooth UI using Tailwind CSS, Framer Motion, and GSAP",
        "Deployed using Vercel and Render",
      ],
    },
    {
      title: "CloudSphere – Cloud Storage Platform",
      link: "https://github.com/abhay221B009/CloudShpere",
      tech: "React.js, Node.js, AWS S3, MongoDB",
      features: [
        "Secure upload/download with AWS S3 integration",
        "Implemented access control and file-sharing system",
        "Added auto-deletion and cloud file conversion features",
        "Improved API responsiveness by 25%",
        "Tested with 200+ files and achieved 100% successful share rate",
      ],
    },
    {
      title: "Shopster – E-commerce Web App",
      link: "https://github.com/abhay221B009/Shopster",
      tech: "React.js, Context API, JavaScript, HTML, CSS",
      features: [
        "Shopping cart, wishlist, and product filtering",
        "Responsive UI with reusable components",
        "Persistent cart and wishlist using local storage",
        "Fast navigation with client-side routing",
      ],
    },
    {
      title: "QuizBot – Quiz Web Application",
      link: "https://github.com/abhay221B009/quizbot",
      tech: "HTML, CSS, JavaScript, Open Trivia API",
      features: [
        "Quiz scoring with difficulty and category filters",
        "Timer-based interactive quiz experience",
        "Real-time feedback and responsive layout",
        "Handled 500+ quizzes with high API efficiency",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Jaypee University of Engineering and Technology",
      period: "Aug 2022 – Jun 2026",
      description:
        "Focused on Full Stack Development, Cloud Computing, and Scalable Software Engineering.",
    },
    {
      degree: "Class XII (PCM)",
      school: "St. Xavier’s Inter College",
      period: "2021",
      description: "Score: 80.4%",
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner – Infosys",
    "AWS Certified Developer – Associate – Infosys",
    "Agile and Scrum Fundamentals – Infosys",
  ];

  const experience = [
    {
      role: "Web Development Intern",
      company: "Proxenix",
      duration: "Jun 2025 – Jul 2025",
      location: "Remote",
      points: [
        "Built responsive UI with React, HTML/CSS and integrated backend APIs",
        "Implemented reusable components and JWT-based authentication",
        "Worked with Git, GitHub, and Agile workflows",
        "Participated in real-world deployment and client feedback cycles",
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            Full Stack Developer | AWS Cloud Practitioner
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {/* Top Buttons */}
          <div className="absolute right-6 top-6 flex gap-3">
            <a
              href="/Abhay_resume.pdf"
              download
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5" />
            </a>

            <a
              href="/Abhay_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
            >
              <Eye className="w-5 h-5" />
            </a>
          </div>

          {/* Personal Info */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Abhay Raj Chauhan
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
              Full Stack Developer & Cloud Enthusiast
            </p>

            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Jaunpur, Uttar Pradesh
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
                  className="hover:text-blue-600 underline"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-1" />
                <a
                  href="https://www.linkedin.com/in/abhay-chauhan-635995219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Summary
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              B.Tech Computer Science student with hands-on experience in
              full-stack web development using React.js, Node.js, MongoDB, and
              AWS. Built and deployed projects including an AI-powered travel
              planning application integrated with Google Gemini API. Passionate
              about scalable software development, cloud technologies, and
              creating modern user-focused applications.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>

            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h4>

                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company} | {exp.location}
                </p>

                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Languages:</strong> JavaScript, C/C++
              </li>

              <li>
                <strong>Frontend:</strong> React.js, Next.js, HTML, CSS,
                Tailwind CSS, Framer Motion, GSAP
              </li>

              <li>
                <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT,
                bcrypt, Zod
              </li>

              <li>
                <strong>Database:</strong> MongoDB, MySQL
              </li>

              <li>
                <strong>Cloud/DevOps:</strong> AWS (S3, EC2, IAM, VPC), Vercel,
                Render
              </li>

              <li>
                <strong>AI Integration:</strong> Gemini API, OpenAI API
              </li>

              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Postman, Figma
              </li>

              <li>
                <strong>Concepts:</strong> OOP, DSA, MVC, SDLC, Agile, Scrum
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Projects
            </h3>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-xl font-semibold text-purple-600">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  </h4>

                  <p className="italic text-gray-600 dark:text-gray-400">
                    {project.tech}
                  </p>

                  <ul className="list-disc list-inside mt-3 text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>

            <div className="space-y-5">
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
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
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
