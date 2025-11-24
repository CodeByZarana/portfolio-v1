import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function HeroMinimal() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-minimal px-6 py-20">
      <div className="container-minimal text-center">
        
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
          <a 
            href="#work"
            className="btn-minimal btn-primary-minimal w-full sm:w-auto"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="btn-minimal btn-secondary-minimal w-full sm:w-auto"
          >
            Get In Touch
          </a>
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