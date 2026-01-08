import { 
  SiJavascript, 
  SiPython, 
  SiCsharp, 
  SiReact, 
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiFirebase,
  SiGit,
  SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const techStack = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'C#', icon: SiCsharp, color: '#239120' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

export default function AboutMinimal() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        duration: isMobile ? 0.4 : 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-minimal relative overflow-hidden">
      {/* Animated Background Elements - Simple on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile: One simple gradient orb */}
        <motion.div
          className="md:hidden absolute top-1/4 left-1/3 w-80 h-80 bg-mocha/20 dark:bg-mocha/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 40, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Desktop: Full animations */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-10 left-10 w-96 h-96 bg-mocha/10 dark:bg-mocha/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-forest/10 dark:bg-forest/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="container-minimal max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Heading */}
          <motion.h2 
            className="section-heading text-center mb-16"
            variants={itemVariants}
          >
            About
          </motion.h2>

          {/* Bio */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg md:text-xl text-minimal-dark leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm a full-stack software developer passionate about building scalable, 
              high-performance web applications. My journey into tech wasn't straightforward—it 
              was filled with challenges that taught me the value of persistence and adaptability. 
              Today, I thrive on solving complex problems and turning ideas into reality through 
              clean, efficient code.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-minimal-dark leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              What drives me most is the constant evolution in technology. Whether it's diving 
              into a new framework or adapting to different project requirements, I embrace the 
              unknown and grow with every challenge.
            </motion.p>
          </motion.div>

          {/* Current Role */}
          <motion.div 
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 mb-16 border border-gray-200 dark:border-gray-800 shadow-lg"
            variants={itemVariants}
            whileHover={isMobile ? {} : { scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
                  Currently
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Software Developer
                </h3>
                <p className="text-base text-minimal-dark">
                  FGF Brands · Jan 2025 - Present
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white font-bold">FGF</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-2.5">
              {[
                "Developing scalable RESTful APIs using ASP.NET MVC and C#",
                "Implementing CI/CD pipelines with Azure DevOps",
                "Automating business processes (reduced manual tasks by 40%)",
                "FGForms: Enhanced UI and developed backend APIs for NCR form, improving submission reliability",
                "Workflow Automation: Built Power Automate flows for Teams notifications, reducing manual tracking efforts",
                "Franchisee Admin Platform: Co-developed internal admin portal replacing Salesforce/SAP workflows, delivered within one month",
                "Wonder Connect / Smart Connect: Reduced API response times from 10 minutes to under 10 seconds, implemented SSO authentication",
                "User Admin & AMP Identity: Added user impersonation architecture and delivered UI/backend fixes during production stabilization"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5"
                >
                  <span className="text-mocha text-base mt-0.5">•</span>
                  <p className="text-sm text-minimal-dark">
                    {item.includes(':') ? (
                      <>
                        <strong>{item.split(':')[0]}:</strong>
                        {item.split(':')[1]}
                      </>
                    ) : (
                      item
                    )}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Previous Role - Condensed */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p 
              className="text-sm uppercase tracking-wider text-minimal-dark mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Previously
            </motion.p>
            <motion.p 
              className="text-lg text-minimal-dark"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
            >
              Software Developer Intern at <span className="font-semibold text-mocha">Awakeen Studio</span> · 
              Jan 2022 - Aug 2022
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              Technologies I Work With
            </motion.h3>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 2 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-all duration-300 shadow-md"
                    whileHover={{ 
                      boxShadow: `0 10px 30px ${tech.color}40`,
                      rotate: [0, -10, 10, -10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <tech.icon 
                      className="text-3xl transition-colors duration-300" 
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                  <motion.span 
                    className="text-xs text-center text-minimal-dark font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 + index * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
            >
              What I Bring to the Table
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "💡", title: "Problem Solver", color: "mocha", text: "I thrive on turning complex challenges into elegant, scalable solutions" },
                { icon: "🚀", title: "Fast Learner", color: "forest", text: "Quickly adapt to new technologies and frameworks to deliver results" },
                { icon: "🤝", title: "Team Player", color: "burnt-orange", text: "Collaborative approach with strong communication and project management skills" }
              ].map((strength, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 0.2, type: "spring" }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${strength.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 3.1 + index * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: `0 10px 30px rgba(164, 120, 100, 0.4)`,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.span 
                      className="text-white text-xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ 
                        delay: 3.2 + index * 0.2,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      {strength.icon}
                    </motion.span>
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2">{strength.title}</h4>
                  <p className="text-minimal-dark">{strength.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}