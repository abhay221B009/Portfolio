import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", proficiency: 85, color: "bg-blue-500" },
        { name: "JavaScript", proficiency: 95, color: "bg-yellow-500" },
        { name: "HTML/CSS", proficiency: 90, color: "bg-orange-500" },
        { name: "Responsive Design", proficiency: 88, color: "bg-green-500" },
        { name: "Context API", proficiency: 80, color: "bg-purple-500" },
        {
          name: "Component Optimization",
          proficiency: 75,
          color: "bg-indigo-500",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", proficiency: 95, color: "bg-blue-600" },
        { name: "C++", proficiency: 95, color: "bg-blue-700" },
        { name: "JavaScript", proficiency: 90, color: "bg-yellow-500" },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js", proficiency: 80, color: "bg-green-500" },
        { name: "MongoDB", proficiency: 75, color: "bg-green-600" },
        { name: "PostgreSQL", proficiency: 70, color: "bg-blue-700" },
        { name: "AWS ", proficiency: 45, color: "bg-orange-400" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", proficiency: 90, color: "bg-red-500" },
        { name: "GitHub", proficiency: 88, color: "bg-yellow-700" },
        { name: "VS Code", proficiency: 95, color: "bg-blue-500" },
        { name: "RESTful APIs", proficiency: 85, color: "bg-purple-500" },
      ],
    },
    {
      title: "DSA",
      skills: [
        { name: "LeetCode", proficiency: 50, color: "bg-orange-500" },
        { name: "CodeChef", proficiency: 70, color: "bg-yellow-700" },
        // { name: "VS Code", proficiency: 95, color: "bg-blue-500" },
        // { name: "RESTful APIs", proficiency: 85, color: "bg-purple-500" },
      ],
    },
  ];

  const techStack = [
    { name: "React.js", logo: "⚛️" },
    { name: "JavaScript", logo: "🟨" },
    { name: "C++", logo: "🔷" },
    { name: "C", logo: "🔵" },
    { name: "HTML/CSS", logo: "🌐" },
    { name: "Node.js", logo: "🟢" },
    { name: "MongoDB", logo: "🍃" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "AWS", logo: "☁️" },
    { name: "AWS S3", logo: "📦" },
    { name: "AWS EC2", logo: "💻" },
    { name: "Git", logo: "📂" },
    { name: "GitHub", logo: "🐙" },
    { name: "VS Code", logo: "💙" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Tech Stack
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.logo}
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills with Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Proficiency Levels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
