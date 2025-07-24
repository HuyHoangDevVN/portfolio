"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  stats: {
    experience: string;
    projects: string;
    clients: string;
    successRate: string;
  };
  social: { linkedin: string; github: string; twitter: string };
  onContactClick: () => void;
  onDownloadCV: () => void;
}

export default function Hero({
  name,
  title,
  bio,
  stats,
  social,
  onContactClick,
  onDownloadCV,
}: HeroProps) {
  // For scroll/animation effects, you could use refs or a library like framer-motion
  return (
    <Section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6 text-gray-500 dark:text-gray-400">
                {title}
              </p>
              <p className="text-lg mb-8 leading-relaxed text-gray-500 dark:text-gray-400">
                {bio}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                className="btn-primary"
                onClick={onContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Get In Touch
              </motion.button>
              <motion.button
                className="btn-secondary"
                onClick={onDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </motion.button>
            </div>
            <div className="flex gap-4">
              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 card flex items-center justify-center hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.15, rotate: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </motion.a>
              <motion.a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 card flex items-center justify-center hover:text-gray-800 transition-colors"
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </motion.a>
              <motion.a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 card flex items-center justify-center hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </motion.a>
            </div>
          </div>
          <div className="slide-in-right">
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl">
                  <span role="img" aria-label="avatar">
                    &#128104;&#8205;&#128187;
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {stats.experience}+ Years Experience
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Building modern web applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    {stats.projects}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500 mb-1">
                    {stats.clients}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Clients
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    {stats.successRate}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Success Rate
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
