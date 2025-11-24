import React from 'react';

const certificates = [
  {
    title: "Complete React Native in 2021: Zero to Mastery[with Hooks]",
    organization: "Udemy",
    date: "June 2021",
    details: "A comprehensive course covering React Native fundamentals, including Hooks, to build mobile applications.",
    link: "/reactnative.jpg"
  },
  {
    title: "Java Tutorial for Complete Beginners",
    organization: "Udemy",
    date: "April 2020",
    details: "An entry-level Java course designed to help beginners grasp essential programming concepts.",
    link: "/java.jpg"
  },
  {
    title: "Responsive Web Design",
    organization: "freecodecamp",
    date: "April 2020",
    details: "A course focused on building responsive websites using HTML, CSS, and web best practices.",
    link: "https://www.freecodecamp.org/certification/zarana26/responsive-web-design"
  },
  {
    title: "Neural Networks and Deep Learning",
    organization: "Coursera",
    date: "May 2020",
    details: "Introduces neural networks and deep learning techniques for building AI models.",
    link: "/nn.pdf"
  },
  {
    title: "Learning Full-Stack JavaScript Development: MERN",
    organization: "LinkedIn Learning",
    date: "April 2023",
    details: "Covers the MERN stack (MongoDB, Express, React, Node.js) to build full-stack web applications.",
    link: "https://www.linkedin.com/learning/certificates/1315dbfce6dea43a3916e10a19dd9141d58e9cd0085022f3b18662b79401d9ae?trk=share_certificate"
  },
  {
    title: "Learning SOLID Programming Principles",
    organization: "LinkedIn Learning",
    date: "April 2023",
    details: "Focuses on the SOLID principles of object-oriented programming for clean and scalable code.",
    link: "https://www.linkedin.com/learning/certificates/b1f2aa379df315b6b6626b0b37b81413685ba609c5a6cd51bac6a7f1e20ea8c7?trk=share_certificate"
  },
  {
    title: "Java Design Patterns: Behavioral Part 1",
    organization: "LinkedIn Learning",
    date: "April 2023",
    details: "Provides an understanding of key behavioral design patterns in Java to improve software architecture.",
    link: "https://www.linkedin.com/learning/certificates/27c73ac718c298fab43f8ec207c22c46d50e6eee7d3a586356e2a3d58ea77757?trk=share_certificate"
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-minimal">
      <div className="container-minimal max-w-6xl">
        <h2 className="section-heading text-center mb-16">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">{certificate.title}</h3>
                  <p className="text-sm text-minimal-dark mb-1">{certificate.organization}</p>
                  <p className="text-xs text-minimal-dark">{certificate.date}</p>
                </div>
                <div className="flip-card-back p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-minimal-dark mb-4 line-clamp-4">{certificate.details}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal btn-primary-minimal inline-block text-sm py-2 px-4"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
