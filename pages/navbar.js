import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function NavbarMinimal({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-minimal' 
        : 'bg-transparent'
    }`}>
      <div className="container-minimal">
        <div className="flex items-center justify-between h-20">
          
          {/* Left - Name/Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            >
              ZARANA SOLANKI
            </a>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Resume Download */}
            <a
              href="/Resume.pdf"
              download
              className="hidden md:inline-block text-sm font-semibold hover:opacity-70 transition-opacity"
            >
              Resume
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <BsFillSunFill className="text-xl text-burnt-orange" />
              ) : (
                <BsFillMoonStarsFill className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}