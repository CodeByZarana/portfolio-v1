import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({
    awakeen: false,
    fgf: false
  });

  const toggleDetails = (company) => {
    setExpandedItems({
      ...expandedItems,
      [company]: !expandedItems[company]
    });
  };

  return (
    <section id="experience" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Experience</h2>
        
        {/* FGF Brands Experience */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-3xl text-teal-500 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">.NET Software Developer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">FGF Brands, Canada</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">January 2025 - Present</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            As a .NET Software Developer Intern at FGF Brands, I design and develop scalable RESTful APIs, implement CI/CD pipelines, and work on automation solutions that improve business processes.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
            <li>API Development: Developed scalable RESTful APIs using ASP.NET MVC and C#, improving data retrieval efficiency by 30%.</li>
            <li>DevOps: Implemented CI/CD pipelines with Azure DevOps, automating deployments and reducing production downtime.</li>
            <li>Process Automation: Worked on business process automation using Power Automate, reducing manual tasks by 40%.</li>
            <li>Collaborative Development: Collaborated with cross-functional teams, contributing to business intelligence and analytics solutions.</li>
          </ul>
          <button
            onClick={() => toggleDetails('fgf')}
            className="mt-4 flex items-center text-teal-500 hover:text-teal-700 transition-colors"
          >
            {expandedItems.fgf ? 'Show Less' : 'Show More'}
            {expandedItems.fgf ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {expandedItems.fgf && (
            <div>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
                <li>System Integration: Integrated various business systems and service applications, ensuring seamless data flow.</li>
                <li>Technical Documentation: Created comprehensive documentation for APIs and business processes.</li>
                <li>Code Quality: Ensured code adheres to security, logging, error handling, and performance standards.</li>
                <li>Technology Evaluation: Evaluated new technologies for fit with existing systems and assessed potential impacts on processes and data.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Awakeen Studio Experience */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-3xl text-teal-500 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Software Developer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">Awakeen Studio Pvt. Ltd., Ahmedabad</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Jan 2022 - Aug 2022</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            During my internship at Awakeen Studio Pvt. Ltd., I worked on a project titled &quot;AR in Education,&quot; where I designed and developed various components using C#, Unity, and Vuforia. The project involved implementing augmented reality, creating 3D models, and designing user-friendly interfaces.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
            <li>Full-Stack Development: Developed and integrated both frontend and backend components using C# and Unity&apos;s .NET-based framework.</li>
            <li>Backend Development: Managed core application logic and server-side functionality, ensuring robust performance.</li>
            <li>Frontend Development: Created responsive user interfaces, similar to frontend development using React.</li>
            <li>Collaborative Development: Worked in an Agile environment, utilizing Git for version control and continuous integration.</li>
          </ul>
          <button
            onClick={() => toggleDetails('awakeen')}
            className="mt-4 flex items-center text-teal-500 hover:text-teal-700 transition-colors"
          >
            {expandedItems.awakeen ? 'Show Less' : 'Show More'}
            {expandedItems.awakeen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {expandedItems.awakeen && (
            <div>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
                <li>System Architecture: Designed and implemented system architecture, including backend services and frontend UI.</li>
                <li>Programming and Debugging: Wrote clean, efficient code in C#, which translates well to Java or .NET development.</li>
                <li>Version Control: Managed code using Git, similar to best practices in software development.</li>
                <li>Performance Optimization: Optimized the application&apos;s performance for Android devices.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;