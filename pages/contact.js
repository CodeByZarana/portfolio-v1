import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function ContactMinimal() {
  return (
    <section id="contact" className="section-padding bg-minimal">
      <div className="container-minimal max-w-3xl">
        
        {/* Section Heading */}
        <h2 className="section-heading text-center mb-8">
          Let's Connect
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-center text-minimal-dark mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology.
        </p>

        {/* Email */}
        <div className="text-center mb-12">
          <a 
            href="mailto:zaranasolanki41014@gmail.com"
            className="text-2xl md:text-3xl font-bold hover:text-mocha transition-colors inline-block"
          >
            zaranasolanki41014@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a 
            href="https://github.com/CodeByZarana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="social-icon">
              <AiFillGithub className="text-2xl" />
            </div>
            <span className="text-sm text-minimal-dark group-hover:text-mocha transition-colors">
              GitHub
            </span>
          </a>

          <a 
            href="https://www.linkedin.com/in/zarana-solanki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="social-icon">
              <AiFillLinkedin className="text-2xl" />
            </div>
            <span className="text-sm text-minimal-dark group-hover:text-mocha transition-colors">
              LinkedIn
            </span>
          </a>

          <a 
            href="mailto:zaranasolanki41014@gmail.com"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="social-icon">
              <AiOutlineMail className="text-2xl" />
            </div>
            <span className="text-sm text-minimal-dark group-hover:text-mocha transition-colors">
              Email
            </span>
          </a>
        </div>

        {/* Alternative CTA */}
        <div className="text-center">
          <p className="text-minimal-dark mb-6">
            Prefer a quick message?
          </p>
          <a
            href="mailto:zaranasolanki41014@gmail.com?subject=Let's Connect!"
            className="btn-minimal btn-primary-minimal inline-block"
          >
            Send Me an Email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-minimal text-center">
          <p className="text-sm text-minimal-dark">
            © {new Date().getFullYear()} Zarana Solanki. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}