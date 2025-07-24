"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const FALLBACK_HEADER = {
  name: "Nguyễn Thế Huy Hoàng",
  experience: "1+ years experience",
  avatar: "/avatar.png", // Place your avatar image in public/avatar.png
  linkedin: "https://www.linkedin.com/in/huyhoangdevvn/",
  github: "https://github.com/HuyHoangDevVN",
  email: "nthoangse@gmail.com",
  phone: "+84 377812006",
};

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  profileName?: string;
  navLinks: NavLink[];
  experience?: string;
  avatar?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  phone?: string;
}

export default function Header(props: HeaderProps) {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showUp, setShowUp] = useState(false);

  // Fallback if API data is missing
  const {
    profileName = FALLBACK_HEADER.name,
    experience = FALLBACK_HEADER.experience,
    avatar = FALLBACK_HEADER.avatar,
    linkedin = FALLBACK_HEADER.linkedin,
    github = FALLBACK_HEADER.github,
    email = FALLBACK_HEADER.email,
    phone = FALLBACK_HEADER.phone,
    navLinks,
  } = props;

  useEffect(() => {
    // Check for saved theme or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Show 'Up' button after scrolling down
  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close mobile menu on nav click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="nav-sticky bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-2 md:gap-0">
        {/* Left: Avatar & Name */}
        <div className="flex items-center gap-4 min-w-0">
          <Image
            src={avatar}
            alt={profileName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover shadow-sm"
            priority
          />
          <div className="min-w-0">
            <div className="text-lg font-bold truncate mono text-blue-700 dark:text-blue-400">
              {profileName}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {experience}
            </div>
          </div>
        </div>
        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-md font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Right: Socials & Contact */}
        <div className="flex items-center gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-200 transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors shadow-sm"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
          <a
            href={`mailto:${email}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-200 transition-colors shadow-sm"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          </a>
          <a
            href={`tel:${phone}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 hover:text-purple-700 dark:hover:text-purple-200 transition-colors shadow-sm"
            aria-label="Phone"
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
          </a>
          {/* Theme toggle */}
          <button
            className={`theme-toggle${dark ? " dark" : ""}`}
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
          />
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Open mobile menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden${mobileOpen ? "" : " hidden"}`}>
        <div className="py-4 space-y-2 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Up Button */}
      {showUp && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}
    </nav>
  );
}

// Example fallback usage:
// <Header navLinks={navLinks} />
// If API data is missing, the header will use the default info above.
