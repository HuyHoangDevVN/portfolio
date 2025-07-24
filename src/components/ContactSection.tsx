"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Section from "./Section";
import { motion } from "framer-motion";

interface Social {
  url: string;
  username: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
  responseTime: string;
  social: {
    linkedin: Social;
    github: Social;
    twitter: Social;
  };
}

interface ContactSectionProps {
  contact: ContactInfo;
  onSuccess: (msg: string) => void;
}

export default function ContactSection({
  contact,
  onSuccess,
}: ContactSectionProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      onSuccess("Thank you! Your message has been sent successfully.");
      e.currentTarget.reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Ready to start your next project? Let&apos;s discuss how I can help.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {contact.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {contact.phone}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-purple-600"
                  />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {contact.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {contact.responseTime}
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  <a
                    href={contact.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href={contact.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={contact.social.twitter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form className="card p-8" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-gray-800"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <span className="loading mr-2"></span>Sending...
                    </span>
                  ) : success ? (
                    <span className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="mr-2" />
                      Message Sent!
                    </span>
                  ) : error ? (
                    <span className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="mr-2"
                      />
                      Error
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
