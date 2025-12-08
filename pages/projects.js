import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const featuredProjects = [
  {
    title: "AI Business Intelligence Platform",
    description: "An intelligent BI platform built with LangChain and FastAPI that transforms data into actionable insights using AI-powered analytics and natural language processing.",
    longDescription: "A comprehensive business intelligence solution that leverages LangChain for AI-driven data analysis and FastAPI for high-performance API development. Features include automated report generation, predictive analytics, and interactive dashboards that help businesses make data-driven decisions.",
    technologies: ["Python", "FastAPI", "LangChain", "AI/ML", "Data Analytics", "OpenAI", "PostgreSQL"],
    imageUrl: "/dashai.png",
    githubUrl: "https://github.com/CodeByZarana", // Update with actual repo if available
    liveUrl: "https://medium.com/@codebyzarana/building-an-ai-business-intelligence-platform-with-langchain-and-fastapi-from-junior-developer-to-458085dd4124",
    featured: true
  },
  {
    title: "Job Matching Agent",
    description: "An intelligent Python tool that matches resumes with job descriptions using NLP and machine learning for skills compatibility analysis.",
    longDescription: "Uses TF-IDF vectorization and cosine similarity to calculate match scores. Helps job seekers find the best opportunities based on their skills and experience.",
    technologies: ["Python", "scikit-learn", "NLTK", "PyPDF2", "NLP"],
    imageUrl: "/job-agent.png",
    githubUrl: "https://github.com/CodeByZarana/job-matching-agent",
    liveUrl: null,
    featured: true
  },
  {
    title: "Finflow",
    description: "A financial planning and analysis platform that helps businesses streamline financial processes with automated data collection, analysis, and visualization.",
    longDescription: "An intelligent financial management solution that integrates with accounting software to automate financial data collection and analysis. Features include cash flow analysis, financial forecasting, interactive dashboards, and strategic financial insights to empower business decision-making.",
    technologies: ["Python", "FastAPI", "Data Analytics", "Financial Modeling", "Dashboard Visualization", "API Integration"],
    imageUrl: "/finflow.png",
    githubUrl: "https://github.com/CodeByZarana",
    liveUrl: "https://medium.com/@codebyzarana/finflow",
    featured: true
  }
];

const allProjects = [
  {
    title: "Hostel Management System",
    description: "A PHP-based web application for efficiently managing hostel operations.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    imageUrl: "/hostel.jpg",
    githubUrl: "https://github.com/CodeByZarana/Hostel-Management-System"
  },
  {
    title: "Homely Delight",
    description: "A React Native mobile app for ordering homemade food.",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"],
    imageUrl: "/homelydelight.png",
    githubUrl: "https://github.com/CodeByZarana/Homely-Delight"
  },
  {
    title: "Meals To Go",
    description: "A React Native-based mobile app for food ordering.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    imageUrl: "/meals.jpg",
    githubUrl: "https://github.com/CodeByZarana/MealsToGo"
  },
  {
    title: "YouTube Data Analysis",
    description: "Analysis of YouTube channel data using Python and visualization.",
    technologies: ["Python", "YouTube Data API", "Matplotlib"],
    imageUrl: "/yt.png",
    githubUrl: "https://github.com/CodeByZarana/Youtube-Data-Analysis"
  },
  {
    title: "Checkout Lane Optimization",
    description: "Statistical analysis of customer checkout times using probability distributions.",
    technologies: ["Python", "NumPy", "Pandas", "Scipy"],
    imageUrl: "/checkout.png",
    githubUrl: "https://github.com/CodeByZarana/Checkout-Lane-Optimization"
  },
  {
    title: "React Essentials",
    description: "Demonstrates core React concepts including components, JSX, props, and state.",
    technologies: ["React"],
    imageUrl: "/react-essentials.png",
    githubUrl: "https://github.com/CodeByZarana/react-essentials"
  },
  {
    title: "SkyScanner Forage Challenge",
    description: "React-based web application from Skyscanner Front-End Engineering experience.",
    technologies: ["React"],
    imageUrl: "/sky.jpg",
    githubUrl: "https://github.com/CodeByZarana/SkyScanner-Forage-Solution"
  },
  {
    title: "Tic Tac Toe",
    description: "A React based 2 player tic-tac-toe game.",
    technologies: ["React", "JavaScript"],
    imageUrl: "/tictactoe.png",
    githubUrl: "https://github.com/CodeByZarana/Tic-Tac-Toe-React"
  },
  {
    title: "Tiffin Service Web Application",
    description: "Full-stack subscription platform for delivering homemade food with real-time order tracking, user authentication, and admin dashboard.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
    imageUrl: "/tiffin.png",
    githubUrl: "https://github.com/CodeByZarana/Tiffin-Service-Web-Application"
  },
  {
    title: "MirrorMind",
    description: "A gesture-controlled smart mirror with AI face recognition that provides an interactive and personalized user experience.",
    technologies: ["Python", "Computer Vision", "AI/ML", "Face Recognition", "Gesture Control", "OpenCV"],
    imageUrl: "/mirrormind.png",
    githubUrl: "https://github.com/CodeByZarana/mirror-mind",
    liveUrl: "https://medium.com/@codebyzarana/mirrormind-a-gesture-controlled-smart-mirror-with-ai-face-recognition-420ffe115f6b"
  }
];

// Simple Background Animation Component
function ProjectsBackground() {
  const dots = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile: One simple gradient orb - Always rendered, CSS controls visibility */}
      <motion.div
        className="md:hidden absolute top-1/2 right-1/4 w-80 h-80 bg-forest/20 dark:bg-forest/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Desktop: Full animations */}
      <div className="hidden md:block">

        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 bg-mocha dark:bg-forest rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-mocha/20 dark:bg-mocha/25 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-forest/20 dark:bg-forest/25 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="work" className="section-padding bg-minimal relative overflow-hidden">
      <ProjectsBackground />
      <div className="container-minimal relative z-10">
        
        {/* Section Heading */}
        <motion.h2 
          className="section-heading text-center mb-6"
          initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects - Top 3 */}
        <div className="space-y-3 mb-4 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.5, delay: isMobile ? index * 0.1 : index * 0.1 }}
              whileHover={isMobile ? {} : { y: -2 }}
              className="project-card-minimal group border border-gray-200 dark:border-gray-800"
            >
              <div className="flex gap-4 p-3">
                {/* Project Image - Smaller */}
                <div className="w-32 md:w-40 h-24 md:h-28 flex-shrink-0 relative overflow-hidden rounded-md border border-gray-200 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-bold mb-1.5 group-hover:text-mocha transition-colors duration-200 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-gray-700 dark:text-gray-300 mb-1.5 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          initial={{ opacity: isMobile ? 1 : 0, scale: isMobile ? 1 : 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: isMobile ? 0 : index * 0.1 + techIndex * 0.03 + 0.2 }}
                          whileHover={isMobile ? {} : { scale: 1.05 }}
                          className="tech-badge text-xs py-1 px-2"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-mocha transition-colors duration-200"
                      >
                        <AiOutlineGithub className="text-sm" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-mocha transition-colors duration-200"
                        >
                          <AiOutlineLink className="text-sm" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.4 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="link-minimal text-lg"
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? {} : { scale: 0.95 }}
          >
            {showAll ? 'Show Less' : `View All ${allProjects.length} Projects`}
          </motion.button>
        </motion.div>

        {/* All Other Projects - Grid */}
        {showAll && (
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.2 : 0.5 }}
          >
            {allProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.2 : 0.4, delay: isMobile ? 0 : index * 0.05 }}
                whileHover={isMobile ? {} : { y: -5 }}
                className="project-card-minimal group"
              >
                {/* Project Image */}
                <div className="image-overlay aspect-video relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-mocha transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-minimal-dark mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:text-mocha transition-colors"
                    >
                      <AiOutlineGithub className="text-lg" />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:text-mocha transition-colors"
                      >
                        <AiOutlineLink className="text-lg" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}