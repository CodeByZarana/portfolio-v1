import React from 'react';
import { FaJsSquare, FaPython, FaJava, FaReact, FaDatabase,  FaSitemap, FaCode,FaHtml5, FaCloud, } from 'react-icons/fa';
import { SiDotnet, SiSpringboot, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  {
    name: 'JavaScript',
    description: 'Strong foundation in ES6+ syntax and asynchronous programming, gained through academic projects and personal practice.',
    icon: <FaJsSquare className="text-yellow-500" size={40} />,
  },
  {
    name: 'Python',
    description: 'Proficient in Python, with experience in web development and data analysis from coursework and personal projects.',
    icon: <FaPython className="text-blue-500" size={40} />,
  },
  {
    name: 'Java',
    description: 'Solid understanding of Java, used in developing scalable applications during academic projects.',
    icon: <FaJava className="text-red-500" size={40} />,
  },
  {
    name: 'C#',
    description: 'Good knowledge of C# for building applications, as learned through coursework and personal exploration.',
    icon: <FaCode className="text-purple-500" size={40} />,
  },
  {
    name: 'C++',
    description: 'Experience with C++ in developing performance-critical applications as part of academic assignments.',
    icon: <FaCode className="text-green-500" size={40} />,
  },
  {
    name: 'ReactJS',
    description: 'Proficient in ReactJS for building responsive UIs, honed through projects and online courses.',
    icon: <FaReact className="text-blue-400" size={40} />,
  },
  {
    name: '.NET Core',
    description: 'Familiar with .NET Core, applied in building web applications during internships and projects.',
    icon: <SiDotnet className="text-blue-600" size={40} />,
  },
  {
    name: 'ASP.NET Core MVC',
    description: 'Understanding of ASP.NET Core MVC for web development, gained from hands-on projects.',
    icon: <SiDotnet className="text-blue-800" size={40} />,
  },
  {
    name: 'Databases',
    description: 'Experience with MS-SQL, MySQL, PostgreSQL, MongoDB, and SQLite, applied in various projects.',
    icon: <FaDatabase className="text-blue-600" size={40} />,
  },
  {
    name: 'AWS & Firebase',
    description: 'Familiar with cloud services like AWS and Firebase, used in projects to implement backend services.',
    icon: <FaCloud className="text-orange-500" size={40} />,
  },
  {
    name: 'Agile (Scrum)',
    description: 'Exposure to Agile (Scrum) methodologies through coursework and collaborative projects.',
    icon: <FaSitemap className="text-teal-500" size={40} />,
  },
  {
    name: 'Java Spring Boot',
    description: 'Basic understanding of Java Spring Boot for building web applications, explored through personal projects.',
    icon: <SiSpringboot className="text-green-600" size={40} />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
