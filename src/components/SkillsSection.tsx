"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faServer,
  faDatabase,
  faCode,
  faProjectDiagram,
  faMemory,
  faExchangeAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faVuejs as faVuejsBrand,
  faNodeJs as faNodeJsBrand,
  faJsSquare as faJsSquareBrand,
  faHtml5 as faHtml5Brand,
  faPhp as faPhpBrand,
  faPython as faPythonBrand,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const iconMap: Record<string, unknown> = {
  faLaptopCode,
  faServer,
  faDatabase,
  faCode,
  faProjectDiagram,
  faMemory,
  faExchangeAlt,
  faArrowRight,
  faVuejs: faVuejsBrand,
  faNodeJs: faNodeJsBrand,
  faReact,
  faPhp: faPhpBrand,
  faPython: faPythonBrand,
  faJsSquare: faJsSquareBrand,
  faHtml5: faHtml5Brand,
  faLeaf: faDatabase, // fallback, as faLeaf is not available
};

interface SkillTech {
  name: string;
  level: number;
  icon: string;
}

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  technologies: SkillTech[];
}

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Animate skill bars when in view
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills =
            entry.target.querySelectorAll<HTMLElement>(".skill-fill");
          fills.forEach((fill) => {
            setTimeout(() => {
              fill.style.width = fill.dataset.width || "0%";
            }, 300);
          });
          observer.unobserve(entry.target);
        }
      });
    });
    document.querySelectorAll(".card").forEach((card) => {
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Technologies I work with to build amazing applications
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="skills-container"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              className="card p-6"
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(59,130,246,0.1)",
              }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-${skillGroup.color}-100 dark:bg-${skillGroup.color}-900 rounded-lg flex items-center justify-center mr-4`}
                >
                  <FontAwesomeIcon
                    icon={iconMap[skillGroup.icon] as IconProp}
                    className={`text-${skillGroup.color}-600 text-xl`}
                  />
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={iconMap[tech.icon] as IconProp}
                          className={`text-${skillGroup.color}-500`}
                        />
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-fill"
                        data-width={`${tech.level}%`}
                        style={{ width: 0 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
