"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  profileName: string;
  navLinks: NavLink[];
}

export default function Header({ profileName, navLinks }: HeaderProps) {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Close mobile menu on nav click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="nav-sticky">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {profileName}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`theme-toggle${dark ? " dark" : ""}`}
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
            />
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
          <div className="py-4 space-y-2">
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
      </div>
    </nav>
  );
}
