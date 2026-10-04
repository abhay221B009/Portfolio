import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Production-Ready APIs with Django REST Framework",
      excerpt: "Architecting modular RESTful endpoints with Django 5.2, SimpleJWT authentication, and clean serializers for scalable web platforms.",
      author: "Abhay Raj Chauhan",
      date: "2024-03-20",
      readTime: "7 min read",
      tags: ["Python", "Django", "Backend", "APIs"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 2,
      title: "Recruiter Workflow Architecture with React 18 & Redux Toolkit",
      excerpt: "Patterns for managing complex multi-stage candidate pipelines, optimistic UI updates, and recruiter inbox synchronization.",
      author: "Abhay Raj Chauhan",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["React.js", "Redux", "Frontend", "Architecture"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 3,
      title: "Pragmatic AI Ingestion: Zero-Assumption Job Description Parsing",
      excerpt: "How to integrate Google Gemini and OpenAI APIs to extract structured data from unstructured text without hallucinations.",
      author: "Abhay Raj Chauhan",
      date: "2024-02-18",
      readTime: "8 min read",
      tags: ["AI", "Gemini API", "Prompt Engineering"],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 4,
      title: "AWS Cloud Infrastructure: Deploying Applications with S3 and EC2",
      excerpt: "Practical guide to configuring AWS S3 buckets for secure media storage and provisioning EC2 compute instances with IAM security roles.",
      author: "Abhay Raj Chauhan",
      date: "2024-01-28",
      readTime: "9 min read",
      tags: ["AWS", "Cloud", "DevOps"],
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 5,
      title: "Automated Deployments with GitHub Actions & Continuous Integration",
      excerpt: "Setting up automated linting, test verification, and deployment pipelines using GitHub Actions workflows for web applications.",
      author: "Abhay Raj Chauhan",
      date: "2024-01-12",
      readTime: "5 min read",
      tags: ["CI/CD", "DevOps", "GitHub"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 6,
      title: "Modern C++ for Algorithmic Problem Solving and DSA",
      excerpt: "Essential STL containers, algorithmic patterns, and memory optimization techniques for solving complex computational problems.",
      author: "Abhay Raj Chauhan",
      date: "2023-12-20",
      readTime: "8 min read",
      tags: ["C++", "DSA", "Algorithms"],
      image: "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
  ];

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Technical Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-1 mb-4">
            Engineering Blog & Notes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Practical articles on full-stack architecture, backend API design, AI integration workflows, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Search & Tag Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles by keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750"
                }`}
              >
                {tag === "all" ? "All Topics" : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              No matching articles found
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your search terms or selecting another tag filter.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;