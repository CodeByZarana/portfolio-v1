import React from "react";

const education = [
  {
    degree: "Master of Systems Science and Engineering",
    institution: "University of Ottawa, Ottawa, Ontario, Canada",
    duration: "Sep 2022 - Jun 2024",
    details: "Relevant coursework: Systems Optimization, Mobile Commerce Technologies, Project Management, Software Usability, Cyber Security, User Experience Principles and Practices, Systems Integration.",
  },
  {
    degree: "Bachelor of Technology - Computer Engineering",
    institution: "Birla Vishvakarma Mahavidyalaya, Anand, Gujarat, India",
    duration: "Jul 2018 - Jun 2022",
    details: "Relevant coursework: Software Engineering, Data Structures and Algorithms, Discrete Mathematics and Probability, Object Oriented Programming, Theory of Computation, Operating Systems, Computer Networks, DBMS.",
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section id="education" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex flex-col md:w-1/3 space-y-4">
            {education.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-4 rounded-lg font-semibold ${
                  activeIndex === index
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                } transition-colors duration-300`}
              >
                {item.degree}
                <br />
                <span className="text-sm">{item.duration}</span>
              </button>
            ))}
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{education[activeIndex].degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{education[activeIndex].institution}</p>
              <p className="text-gray-600 dark:text-gray-400">{education[activeIndex].details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
