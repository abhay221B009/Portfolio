import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/abhay221B009",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/abhay-chauhan-635995219/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:abhayrajchauhan.976@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Abhay Raj Chauhan
            </h3>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              Junior Full-Stack Software Engineer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Building production-oriented web applications, robust backend REST APIs, and AI-powered workflows with React, Django, Node.js, and modern cloud technologies.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills & Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Opportunities / Focus */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
              Opportunities
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
              <li className="font-semibold text-gray-800 dark:text-gray-200">
                Full-Stack Software Engineer
              </li>
              <li className="font-semibold text-gray-800 dark:text-gray-200">
                Junior Software Engineer
              </li>
              <li className="font-semibold text-gray-800 dark:text-gray-200">
                Backend Engineer (Python/Node)
              </li>
              <li className="pt-2 text-gray-500 dark:text-gray-400">
                Open to Delhi NCR, Bengaluru, Lucknow & Remote positions.
              </li>
              <li className="pt-1">
                <Link
                  to="/contact"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} Abhay Raj Chauhan. All rights reserved.</p>
          <p>Early-Career Software Engineer • B.Tech CSE (JUET)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;