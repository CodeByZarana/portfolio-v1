import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Systems Science and Engineering",
    institution: "University of Ottawa",
    location: "Ottawa, Ontario, Canada",
    duration: "Sep 2022 - Jun 2024",
    courses: [
      "Systems Optimization",
      "Mobile Commerce Technologies",
      "Project Management",
      "Software Usability",
      "Cyber Security",
      "User Experience Principles",
      "Systems Integration"
    ],
    accentColor: "forest",
    icon: "🎓"
  },
  {
    degree: "Bachelor of Technology - Computer Engineering",
    institution: "Birla Vishvakarma Mahavidyalaya",
    location: "Anand, Gujarat, India",
    duration: "Jul 2018 - Jun 2022",
    courses: [
      "Software Engineering",
      "Data Structures and Algorithms",
      "Discrete Mathematics",
      "Object Oriented Programming",
      "Theory of Computation",
      "Operating Systems",
      "Computer Networks",
      "DBMS"
    ],
    accentColor: "mocha",
    icon: "📚"
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-minimal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mocha rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest rounded-full blur-3xl"></div>
      </div>

      <div className="container-minimal max-w-5xl relative z-10">
        <motion.h2 
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mocha via-forest to-mocha transform md:-translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mocha via-forest to-mocha md:hidden"></div>
          
          <div className="space-y-10 md:space-y-20">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10 ${
                    item.accentColor === 'mocha' ? 'bg-mocha' : 'bg-forest'
                  }`}>
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
                      item.accentColor === 'mocha' ? 'bg-mocha' : 'bg-forest'
                    }`}></div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-6 md:w-[48%]' : 'md:ml-auto md:pl-6 md:w-[48%]'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-5 shadow-lg border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
                    >
                      {/* Icon */}
                      <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">
                        {item.icon}
                      </div>

                      {/* Duration badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                        className={`inline-block mb-3 px-2.5 py-0.5 rounded-full ${
                          item.accentColor === 'mocha' 
                            ? 'bg-mocha/10 dark:bg-mocha/20' 
                            : 'bg-forest/10 dark:bg-forest/20'
                        }`}
                      >
                        <span className={`text-xs font-semibold ${
                          item.accentColor === 'mocha' 
                            ? 'text-mocha dark:text-mocha/80' 
                            : 'text-forest dark:text-forest/80'
                        }`}>
                          {item.duration}
                        </span>
                      </motion.div>

                      {/* Degree */}
                      <h3 className={`text-base md:text-xl font-bold mb-1.5 text-gray-900 dark:text-white transition-colors ${
                        item.accentColor === 'mocha' 
                          ? 'group-hover:text-mocha' 
                          : 'group-hover:text-forest'
                      }`}>
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-2 mb-2 text-minimal-dark">
                        <HiOutlineAcademicCap className={`text-sm ${
                          item.accentColor === 'mocha' ? 'text-mocha' : 'text-forest'
                        }`} />
                        <span className="font-semibold text-xs md:text-sm">{item.institution}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 mb-4 text-xs text-minimal-dark">
                        <HiOutlineLocationMarker className={`text-xs ${
                          item.accentColor === 'mocha' ? 'text-mocha' : 'text-forest'
                        }`} />
                        <span>{item.location}</span>
                      </div>

                      {/* Coursework */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs uppercase tracking-wider text-minimal-dark mb-3 font-semibold">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.courses.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + courseIndex * 0.05 + 0.4 }}
                              whileHover={{ scale: 1.1 }}
                              className={`px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors cursor-default ${
                                item.accentColor === 'mocha' 
                                  ? 'hover:bg-mocha hover:text-white dark:hover:bg-mocha' 
                                  : 'hover:bg-forest hover:text-white dark:hover:bg-forest'
                              }`}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Graduation cap at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute left-8 md:left-1/2 bottom-0 transform md:-translate-x-1/2 translate-y-1/2 z-10"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-mocha to-forest rounded-full flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-lg md:text-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
