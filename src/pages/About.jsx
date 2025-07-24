import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Users,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";
import About_img from "../assets/about.jpg";

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "B.Tech CSE (Expected 2026)",
      description: "Computer Science Engineering from Jaypee University",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AWS Certified Developer Associate",
      description: "Advanced AWS certification for cloud development",
    },

    {
      icon: <Award className="w-8 h-8" />,
      title: "AWS Cloud Practitioner",
      description: "Foundational AWS certification for cloud computing",
    },

    {
      icon: <Award className="w-8 h-8" />,
      title: "Software Engineering and Agile software development ",
      description:
        "Certified in Agile and Software Engineering with knowledge of SDLC and Scrum.",
    },
    {
      icon: (
        <div className="flex flex-col items-center justify-center text-center">
          <Award className="w-8 h-8 mb-2" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            More coming...
          </h3>
        </div>
      ),
      title: "",
      description: "",
    },
  ];

  const traits = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative approach to achieving common goals",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Detail-Oriented",
      description: "Meticulous attention to code quality and user experience",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate",
      description: "Genuinely love what I do and continuously learning",
    },
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional
            web applications
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a motivated and detail-oriented B.Tech CSE student currently
              pursuing my degree at Jaypee University Of Engineering &
              Technology. My journey in technology began with a curiosity about
              how web applications work, which evolved into a passion for
              creating scalable and efficient web solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I specialize in full stack web development using React.js,
              JavaScript, and AWS cloud services. My certifications as an AWS
              Cloud Practitioner and Developer Associate showcase my commitment
              to cloud technologies. I excel in building responsive UIs,
              integrating RESTful APIs, and managing cloud infrastructure with a
              focus on performance optimization.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={About_img}
                alt="About Me"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Achievements & Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personal Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Makes Me Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  {trait.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {trait.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
