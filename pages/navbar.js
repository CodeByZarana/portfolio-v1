import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-900 ${darkMode ? 'text-white' : 'text-black'} py-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <h1 className="font-burtons cursor-pointer" onClick={() => scroll.scrollToTop()}>CODEBYZARANA</h1>
        </div>

        {/* Center - Navbar Links */}
        <div className="hidden md:flex justify-center flex-grow space-x-8">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "about" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("about")}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "experience" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("experience")}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "projects" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("projects")}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "skills" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("skills")}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "education" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("education")}
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "certificates" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("certificates")}
          >
            Certificates
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeSection === "contact" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onSetActive={() => handleSetActive("contact")}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Right - Dark Mode Toggle and Resume Button */}
        <div className="flex items-center space-x-4">
        {/* Conditionally render icons based on darkMode */}
        <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110">
            {darkMode ? (
              <BsFillSunFill style={{ color: 'yellow' }} />  // Sun icon for dark mode (to switch to light mode)
            ) : (
              <BsFillMoonStarsFill style={{ color: 'black' }} /> // Moon icon for light mode (to switch to dark mode)
            )}
          </button>


          <a
  className="relative inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
  href="/Resume.pdf"
>
  <span className="relative z-10">Resume</span>
  <span className="absolute inset-0 bg-white opacity-10 transform scale-0 transition-transform duration-500 ease-in-out hover:scale-125"></span>
</a>






          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {menuOpen ? <FiX size={30} style={{ color: darkMode ? 'white' : 'black' }} /> : <FiMenu size={30} style={{ color: darkMode ? 'white' : 'black' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pt-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "about" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("about")}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "experience" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("experience")}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "projects" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("projects")}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "skills" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("skills")}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "education" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("education")}
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "certificates" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("certificates")}
          >
            Certificates
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activeSection === "contact" ? "text-teal-600 dark:text-teal-400" : "hover:text-teal-600 dark:hover:text-teal-400"} ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
            onSetActive={() => handleSetActive("contact")}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}
