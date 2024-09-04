import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">

          {/* Experience Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex-1 flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}  // Scale down initially
            animate={{ opacity: 1, scale: 1 }}    // Scale up to full size
            transition={{ duration: 0.8, ease: 'easeOut'  }}
          >
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-3xl text-teal-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Over 3 years of practical experience in developing scalable, high-performance web applications through academic projects, internships, and hands-on learning with modern frameworks and technologies.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 flex-grow">
              <li>Proficient in building full-stack applications using ASP.NET Core MVC and C#.</li>
              <li>Experienced in developing robust backend services using Java and Spring Boot.</li>
              <li>Strong expertise in frontend development using React.js and JavaScript to create interactive and responsive user interfaces.</li>
              <li>Proficient in database management with MySQL and PostgreSQL, ensuring data consistency, optimizing query performance, and improving system efficiency.</li>
            </ul>
          </motion.div>

          {/* Who I Am Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 flex-grow text-justify">
              I&apos;m Zarana Solanki, and my journey into software development wasn&apos;t a straight path. It started with a lot of struggle—subjects that didn&apos;t click right away and results that fell short of my expectations. But instead of giving up, I dug in deeper, spending countless hours studying and pushing through the frustration of bugs I couldn&apos;t solve. Over time, those challenges turned into small victories, and I found myself genuinely enjoying the process of problem-solving.
            </p>
            <p className="text-gray-700 dark:text-gray-300 flex-grow text-justify">
              What I love most about technology is that it&apos;s always evolving, and that constant change keeps me on my toes. I&apos;ve learned to embrace the unknown, whether it&apos;s diving into a new programming language or adjusting to different project requirements. I might not have all the answers right away, but I&apos;m not afraid to learn as I go, and that adaptability has become one of my biggest strengths.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              At the heart of it all, I&apos;m driven by a desire to create and contribute. I&apos;ve come to appreciate the value of persistence, the importance of teamwork, and the thrill of seeing a project come to life. While I&apos;m still growing and learning every day, I&apos;m excited about where this journey is taking me and the impact I can make through my work in technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
