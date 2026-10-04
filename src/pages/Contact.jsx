import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Briefcase } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_1e7wa6n",
        "template_aizj9ya",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "J2InClGeJB8ce2tN7"
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong while sending the message. Please try reaching out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "abhayrajchauhan.976@gmail.com",
      link: "mailto:abhayrajchauhan.976@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 63860 88195",
      link: "tel:+916386088195",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Target Locations",
      content: "Delhi NCR, Bengaluru, Lucknow & Remote",
      link: null,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-md w-full"
        >
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Message Delivered
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Thank you for reaching out! I have received your message and will get back to you promptly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

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
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-1 mb-4">
            Let's Discuss Opportunities
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Open to Software Engineering, Full-Stack Development, and Backend Engineering opportunities. Whether you have a role in mind or an engineering problem to discuss, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Professional Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Contact Details
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Feel free to reach out directly via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {info.content}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Profiles */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Verified Engineering Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/abhay221B009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-650 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhay-chauhan-635995219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Opportunities Note Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-xs space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-100">
                <Briefcase className="w-4 h-4" />
                Active Job Search
              </div>
              <h3 className="text-lg font-bold">
                Junior Software Engineer & Full-Stack Roles
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Actively interviewing for software engineering positions. Open to on-site roles in Delhi NCR (Noida, Gurugram, Delhi), Bengaluru, Lucknow, or remote setups.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xs border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Fill out the form below and it will be dispatched directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  id="name"
                  label="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="e.g. Alex Smith"
                />

                <InputField
                  id="email"
                  label="Your Email *"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="e.g. alex@company.com"
                />

                <TextAreaField
                  id="message"
                  label="Message / Opportunity Details *"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Share details about the role, team, or project..."
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 shadow-xs ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type = "text", value, onChange, error, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors ${
        error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
      }`}
      placeholder={placeholder}
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const TextAreaField = ({ id, label, value, onChange, error, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={5}
      className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors resize-none ${
        error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
      }`}
      placeholder={placeholder}
    ></textarea>
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export default Contact;
