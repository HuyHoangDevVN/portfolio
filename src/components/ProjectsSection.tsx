"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Section from "./Section";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
  duration: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Some of my recent work and achievements
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-container"
        >
          {projects.map((project, idx) => (
            <motion.div
              className="project-card relative group"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(59,130,246,0.1)",
              }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                <span role="img" aria-label="project-image">
                  {project.image}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="mr-1"
                    />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-1" />
                    Code
                  </motion.a>
                </div>
              </div>
              <motion.div
                className="project-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h4 className="text-xl font-bold text-white mb-4 drop-shadow">
                  {project.title}
                </h4>
                <div className="text-white text-sm space-y-2 max-w-xs text-center drop-shadow">
                  {project.features.slice(0, 3).map((feature) => (
                    <div className="flex items-center gap-2" key={feature}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-400"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
