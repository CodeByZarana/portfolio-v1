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
  return (
    <section id="education" className="section-padding bg-minimal">
      <div className="container-minimal max-w-4xl">
        <h2 className="section-heading text-center mb-16">Education</h2>
        
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
                  {item.duration}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {item.degree}
                </h3>
                <p className="text-lg text-minimal-dark">
                  {item.institution}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-minimal-dark leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
