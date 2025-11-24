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
  return (
    <section id="about" className="section-padding bg-minimal">
      <div className="container-minimal max-w-4xl">
        
        {/* Section Heading */}
        <h2 className="section-heading text-center mb-16">
          About
        </h2>

        {/* Bio */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-minimal-dark leading-relaxed mb-8">
            I'm a full-stack software developer passionate about building scalable, 
            high-performance web applications. My journey into tech wasn't straightforward—it 
            was filled with challenges that taught me the value of persistence and adaptability. 
            Today, I thrive on solving complex problems and turning ideas into reality through 
            clean, efficient code.
          </p>

          <p className="text-lg md:text-xl text-minimal-dark leading-relaxed">
            What drives me most is the constant evolution in technology. Whether it's diving 
            into a new framework or adapting to different project requirements, I embrace the 
            unknown and grow with every challenge.
          </p>
        </div>

        {/* Current Role */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
                Currently
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                .NET Software Developer Intern
              </h3>
              <p className="text-lg text-minimal-dark">
                FGF Brands · Jan 2025 - Present
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">FGF</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-mocha text-xl">•</span>
              <p className="text-minimal-dark">
                Developing scalable RESTful APIs using ASP.NET MVC and C#
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-mocha text-xl">•</span>
              <p className="text-minimal-dark">
                Implementing CI/CD pipelines with Azure DevOps
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-mocha text-xl">•</span>
              <p className="text-minimal-dark">
                Automating business processes (reduced manual tasks by 40%)
              </p>
            </div>
          </div>
        </div>

        {/* Previous Role - Condensed */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
            Previously
          </p>
          <p className="text-lg text-minimal-dark">
            Software Developer Intern at <span className="font-semibold">Awakeen Studio</span> · 
            Jan 2022 - Aug 2022
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-110">
                  <tech.icon 
                    className="text-3xl transition-colors duration-300" 
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-xs text-center text-minimal-dark font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What I Bring to the Table
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Problem Solver</h4>
              <p className="text-minimal-dark">
                I thrive on turning complex challenges into elegant, scalable solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Learner</h4>
              <p className="text-minimal-dark">
                Quickly adapt to new technologies and frameworks to deliver results
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Team Player</h4>
              <p className="text-minimal-dark">
                Collaborative approach with strong communication and project management skills
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/Resume.pdf"
            download
            className="btn-minimal btn-primary-minimal inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}