import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const featuredProjects = [
  {
    title: "Tiffin Service Web Application",
    description: "A full-stack subscription platform for delivering homemade food with real-time order tracking, user authentication, and an admin dashboard.",
    longDescription: "Built with ASP.NET Core MVC and SQL Server, this application demonstrates enterprise-level architecture with clean separation of concerns, robust authentication, and scalable database design.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
    imageUrl: "/tiffin.png",
    githubUrl: "https://github.com/CodeByZarana/Tiffin-Service-Web-Application",
    liveUrl: null,
    featured: true
  },
  {
    title: "Diabetes Detector",
    description: "An Android application utilizing OCR and machine learning to detect potential diabetes symptoms through image recognition.",
    longDescription: "Combines computer vision with ML models to analyze medical reports. Features real-time image processing and provides instant health insights.",
    technologies: ["Java", "Android SDK", "OCR", "Machine Learning", "TensorFlow"],
    imageUrl: "/diabetes.png",
    githubUrl: "https://github.com/CodeByZarana/Diabetes-Detector",
    liveUrl: null,
    featured: true
  },
  {
    title: "Job Matching Agent",
    description: "An intelligent Python tool that matches resumes with job descriptions using NLP and machine learning for skills compatibility analysis.",
    longDescription: "Uses TF-IDF vectorization and cosine similarity to calculate match scores. Helps job seekers find the best opportunities based on their skills and experience.",
    technologies: ["Python", "scikit-learn", "NLTK", "PyPDF2", "NLP"],
    imageUrl: "/job-agent.png",
    githubUrl: "https://github.com/CodeByZarana/Job-Matching-Agent",
    liveUrl: null,
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
  }
];

export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="section-padding bg-minimal">
      <div className="container-minimal">
        
        {/* Section Heading */}
        <h2 className="section-heading text-center mb-16">
          Selected Work
        </h2>

        {/* Featured Projects - Top 3 */}
        <div className="space-y-24 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
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
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-mocha transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg text-minimal-dark mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-base text-minimal-dark mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-mocha transition-colors"
                  >
                    <AiOutlineGithub className="text-xl" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:text-mocha transition-colors"
                    >
                      <AiOutlineLink className="text-xl" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="link-minimal text-lg"
          >
            {showAll ? 'Show Less' : `View All ${allProjects.length + 3} Projects`}
          </button>
        </div>

        {/* All Other Projects - Grid */}
        {showAll && (
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div 
                key={index}
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

                  {/* Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-mocha transition-colors"
                  >
                    <AiOutlineGithub className="text-lg" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}