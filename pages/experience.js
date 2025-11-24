import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-minimal">
      <div className="container-minimal max-w-4xl">
        <h2 className="section-heading text-center mb-16">Experience</h2>
        
        <div className="space-y-12">
          {/* FGF Brands Experience */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
                January 2025 - Present
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                .NET Software Developer Intern
              </h3>
              <p className="text-lg text-minimal-dark">
                FGF Brands · Canada
              </p>
            </div>
            
            <p className="text-lg text-minimal-dark leading-relaxed mb-6">
              As a .NET Software Developer Intern at FGF Brands, I design and develop scalable RESTful APIs, implement CI/CD pipelines, and work on automation solutions that improve business processes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Developed scalable RESTful APIs using ASP.NET MVC and C#, improving data retrieval efficiency by 30%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Implemented CI/CD pipelines with Azure DevOps, automating deployments and reducing production downtime
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Worked on business process automation using Power Automate, reducing manual tasks by 40%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Collaborated with cross-functional teams, contributing to business intelligence and analytics solutions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Integrated various business systems and service applications, ensuring seamless data flow
                </p>
              </div>
            </div>
          </div>

          {/* Awakeen Studio Experience */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-minimal-dark mb-2">
                January 2022 - August 2022
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Software Developer Intern
              </h3>
              <p className="text-lg text-minimal-dark">
                Awakeen Studio Pvt. Ltd. · Ahmedabad, India
              </p>
            </div>
            
            <p className="text-lg text-minimal-dark leading-relaxed mb-6">
              During my internship at Awakeen Studio, I worked on &quot;AR in Education,&quot; designing and developing components using C#, Unity, and Vuforia. The project involved implementing augmented reality, creating 3D models, and designing user-friendly interfaces.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Developed and integrated both frontend and backend components using C# and Unity&apos;s .NET-based framework
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Managed core application logic and server-side functionality, ensuring robust performance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Created responsive user interfaces and worked in an Agile environment with Git version control
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mocha text-xl">•</span>
                <p className="text-minimal-dark">
                  Designed system architecture and optimized application performance for Android devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;