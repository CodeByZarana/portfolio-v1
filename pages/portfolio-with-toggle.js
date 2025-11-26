import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from './chat-interface';
import HeroMinimal from './hero';
import FeaturedProjects from './projects';
import AboutMinimal from './aboutme';
import ContactMinimal from './contact';
import Education from './education';
import Certificates from './certificates';
import Blogs from './blogs';
import { BsFillSunFill, BsFillMoonStarsFill, BsList, BsX } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineUser, AiOutlineMail, AiOutlineBook } from 'react-icons/ai';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FaAward } from 'react-icons/fa';

// Typing Animation Component with Framer Motion
function TypingText({ words, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    if (!currentWord) return;
    
    let timeout;
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, currentIndex, words]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

export default function PortfolioWithToggle({ darkMode, setDarkMode }) {
  const [mode, setMode] = useState('chat'); // 'chat' or 'traditional'
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const rotatingWords = [
    'Full Stack Developer',
    'Problem Solver',
    'AI Enthusiast',
    'Code Enthusiast',
    'Tech Innovator',
    'Software Engineer'
  ];

  const switchMode = () => {
    setMode(mode === 'chat' ? 'traditional' : 'chat');
  };

  if (mode === 'chat') {
    return (
      <ChatInterface onSwitchMode={switchMode} darkMode={darkMode} setDarkMode={setDarkMode} />
    );
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: AiOutlineHome },
    { id: 'about', label: 'About', icon: AiOutlineUser },
    { id: 'work', label: 'Projects', icon: AiOutlineFolderOpen },
    { id: 'blogs', label: 'Blogs', icon: AiOutlineBook },
    { id: 'education', label: 'Education', icon: HiOutlineAcademicCap },
    { id: 'certificates', label: 'Certificates', icon: FaAward },
    { id: 'contact', label: 'Contact', icon: AiOutlineMail },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroMinimal onNavigate={setActiveSection} />;
      case 'work':
        return <FeaturedProjects />;
      case 'about':
        return <AboutMinimal />;
      case 'blogs':
        return <Blogs />;
      case 'education':
        return <Education />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <ContactMinimal />;
      default:
        return <HeroMinimal />;
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        fixed md:static
        top-0 left-0 h-full
        w-52 bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        z-50
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/dev-ed-wave.png"
                    alt="Zarana Solanki"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <h1 className="text-sm font-bold text-gray-900 dark:text-white">
                  ZARANA SOLANKI
                </h1>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="md:hidden p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
                aria-label="Close sidebar"
              >
                <BsX className="text-xl" />
              </button>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 ml-[36px] min-h-[16px]">
              <TypingText words={rotatingWords} />
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-3 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        // On mobile, scroll to section; on desktop, switch section
                        if (window.innerWidth < 768) {
                          scrollToSection(item.id);
                        } else {
                          setActiveSection(item.id);
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`
                        w-full flex items-center gap-2 px-3 py-2 rounded-lg
                        transition-all duration-200
                        ${
                          isActive
                            ? 'bg-mocha text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <Icon className="text-base" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-800 space-y-2 flex-shrink-0">
            <button
              onClick={switchMode}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              <span className="text-base">💬</span>
              <span className="font-medium">Chat Mode</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <>
                  <BsFillSunFill className="text-base text-yellow-400" />
                  <span className="font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <BsFillMoonStarsFill className="text-base" />
                  <span className="font-medium">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
            aria-label="Open sidebar"
          >
            <BsList className="text-2xl" />
          </button>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Portfolio
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <BsFillSunFill className="text-xl text-yellow-400" />
            ) : (
              <BsFillMoonStarsFill className="text-xl" />
            )}
          </button>
        </div>

        {/* Section Content */}
        <div className="min-h-full">
          {/* Mobile: Show all sections for scrolling with unified animation */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div id="home">
              <HeroMinimal onNavigate={(section) => {
                setActiveSection(section);
                setTimeout(() => scrollToSection(section), 100);
              }} />
            </div>
            <div id="about">
              <AboutMinimal />
            </div>
            <div id="work">
              <FeaturedProjects />
            </div>
            <div id="blogs">
              <Blogs />
            </div>
            <div id="education">
              <Education />
            </div>
            <div id="certificates">
              <Certificates />
            </div>
            <div id="contact">
              <ContactMinimal />
            </div>
          </motion.div>
          
          {/* Desktop: Show only active section */}
          <div className="hidden md:block">
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
}