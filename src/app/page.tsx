"use client";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SuccessMessage from "../components/SuccessMessage";
import { portfolioData } from "../data/portfolio";

export default function Home() {
  const [successMsg, setSuccessMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Simulate CV download
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "data:text/plain;charset=utf-8,Nguyen The Huy Hoang - Fullstack Developer CV";
    link.download = "Alex_Rivera_CV.pdf";
    link.click();
    showSuccessMessage("CV download started!");
  };

  // Show success message
  const showSuccessMessage = (msg: string) => {
    setSuccessMsg(msg);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Header profileName={portfolioData.profile.name} navLinks={navLinks} />
      <main className="flex-1 flex flex-col gap-0">
        <Hero
          name={portfolioData.profile.name}
          title={portfolioData.profile.title}
          bio={portfolioData.profile.bio}
          stats={portfolioData.profile.stats}
          social={portfolioData.profile.social}
          onContactClick={() => scrollToSection("contact")}
          onDownloadCV={downloadCV}
        />
        <SkillsSection
          skills={portfolioData.skills.map((sg) => ({
            ...sg,
            technologies: [...sg.technologies],
          }))}
        />
        <ProjectsSection
          projects={portfolioData.projects.map((p) => ({
            ...p,
            technologies: [...p.technologies],
            features: [...p.features],
          }))}
        />
        <ContactSection
          contact={portfolioData.contact}
          onSuccess={showSuccessMessage}
        />
      </main>
      <Footer
        profileName={portfolioData.profile.name}
        tagline={
          "Fullstack Developer • Building the future, one line of code at a time"
        }
        copyright={"© 2024 Nguyen The Huy Hoang. All rights reserved."}
      />
      <SuccessMessage message={successMsg} show={showSuccess} />
    </div>
  );
}
