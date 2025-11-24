import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from 'framer-motion';

// Tech Grid Background Animation with Framer Motion
function TechGridBackground() {
  const brackets = [
    { text: '{ }', x: '10%', y: '8%', delay: 0 },
    { text: '[ ]', x: '85%', y: '15%', delay: 0.3 },
    { text: '</>', x: '20%', y: '70%', delay: 0.6 },
    { text: '{ }', x: '75%', y: '55%', delay: 0.9 },
    { text: '< >', x: '45%', y: '12%', delay: 1.2 },
    { text: '[ ]', x: '60%', y: '80%', delay: 1.5 },
    { text: '{ }', x: '30%', y: '40%', delay: 1.8 },
    { text: '</>', x: '90%', y: '65%', delay: 2.1 },
    { text: '< >', x: '5%', y: '50%', delay: 2.4 },
    { text: '[ ]', x: '55%', y: '30%', delay: 2.7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <motion.div
        className="tech-grid-bg"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Floating Code Brackets */}
      {brackets.map((bracket, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-mocha dark:text-forest"
          style={{
            left: bracket.x,
            top: bracket.y,
            fontSize: '1.25rem',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: bracket.delay,
            ease: 'easeInOut',
          }}
        >
          {bracket.text}
        </motion.div>
      ))}
      
    </div>
  );
}

export default function HeroMinimal({ onNavigate }) {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-minimal px-6 py-20 relative">
      <TechGridBackground />
      <div className="container-minimal text-center relative z-10">
        
        {/* Status Badge */}
        <div className="mb-8 fade-in-up opacity-0">
          <span className="status-badge">
            Available for opportunities
          </span>
        </div>

        {/* Name - Huge and Bold */}
        <h1 className="hero-name mb-6 fade-in-up opacity-0 stagger-1">
          Hey, I'm Zarana Solanki!
        </h1>

        {/* Tagline */}
        <h2 className="hero-tagline text-minimal-dark mb-8 fade-in-up opacity-0 stagger-2">
          Full Stack Software Developer
        </h2>

        {/* Short Description */}
        <p className="text-lg md:text-xl text-minimal-dark max-w-2xl mx-auto mb-12 leading-relaxed fade-in-up opacity-0 stagger-3">
          Building scalable web applications with .NET, React, and modern technologies. 
          Currently working at FGF Brands, bringing ideas to life through clean code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up opacity-0 stagger-4">
          <button 
            onClick={() => onNavigate && onNavigate('work')}
            className="btn-minimal btn-primary-minimal w-full sm:w-auto"
          >
            View My Work
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('contact')}
            className="btn-minimal btn-secondary-minimal w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 fade-in-up opacity-0 stagger-5">
          <a 
            href="https://github.com/CodeByZarana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <AiFillGithub className="text-2xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/zarana-solanki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
          <a 
            href="mailto:zaranasolanki41014@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <AiOutlineMail className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}