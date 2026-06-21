"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 150;

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight =
            element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLink = (
    href: string,
    label: string,
    section: string
  ) => (
    <a
      href={href}
      className={`transition duration-300 pb-1 ${
        activeSection === section
          ? "text-sky-400 border-b-2 border-sky-400"
          : "hover:text-sky-400"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide hover:text-sky-400 transition"
        >
          Hendi
        </a>

        <ul className="flex gap-8 font-medium">
          <li>
            {navLink(
              "#home",
              "Home",
              "home"
            )}
          </li>

          <li>
            {navLink(
              "#about",
              "About",
              "about"
            )}
          </li>

          <li>
            {navLink(
              "#skills",
              "Skills",
              "skills"
            )}
          </li>

          <li>
            {navLink(
              "#projects",
              "Projects",
              "projects"
            )}
          </li>

          <li>
            {navLink(
              "#contact",
              "Contact",
              "contact"
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}