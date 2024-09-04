import React, { useState } from 'react';

const projects = {
  "Web Development": [
    {
      title: "Tiffin Service Web Application",
      description: "A web-based system for delivering homemade food, featuring a subscription model and real-time order updates.",
      technologies: "ASP.NET Core MVC, SQL Server, Entity Framework",
      imageUrl: "/tiffin.png", // replace with your actual image path
      link: "https://github.com/CodeByZarana/Tiffin-Service-Web-Application"
    },
    {
      title: "Hostel Management System",
      description: "A PHP-based web application for efficiently managing hostel operations, including student registration, room allocation, and fee management.",
      technologies: "PHP, MySQL, HTML, CSS",
      imageUrl: "/hostel.jpg", // replace with your actual image path
      link: "https://github.com/CodeByZarana/Hostel-Management-System"
    }
  ],
  "Machine Learning": [
    {
      title: "Diabetes Detector",
      description: "An Android application utilizing OCR and machine learning to detect potential diabetes symptoms through image recognition.",
      technologies: "Java, Android SDK, OCR, Machine Learning",
      imageUrl: "/diabetes.png", // replace with your actual image path
      link: "https://github.com/CodeByZarana/Diabetes-Detector"
    }
  ],
  "Mobile Development": [
    {
      title: "Homely Delight",
      description: "A React Native-based mobile app for ordering homemade food.",
      technologies: "React Native, JavaScript, Expo, Firebase",
      imageUrl: "/homelydelight.png", // replace with your actual image path
      link: "https://github.com/CodeByZarana/Homely-Delight"
    },
    {
      title: "Meals To Go",
      description: "A React Native-based mobile app for ordering food.",
      technologies: "React Native, JavaScript, Expo, Firebase",
      imageUrl: "/meals.jpg", // replace with your actual image path
      link: "https://github.com/CodeByZarana/MealsToGo"
    }
  ],
  "Data Analysis": [
    {
        title: "YouTube Data Analysis",
        description: "Analysis of the T-Series YouTube channel using Python to extract and visualize key metrics such as views, likes, and comments. The project leverages the YouTube Data API for data collection and analysis.",
        technologies:"Python, YouTube Data API, Jupyter Notebook",
        imageUrl: "/yt.png",
        link: "https://github.com/CodeByZarana/Youtube-Data-Analysis"
    },
    {
        title: "Checkout Lane Optimization",
        description: "A simulation and statistical analysis of customer checkout times at self-checkout and manual cashier lanes, using various probability distributions to explore server utilization.",
        technologies:"Python, NumPy, Pandas, Matplotlib, Scipy",
        imageUrl: "/checkout.png",
        link: "https://github.com/CodeByZarana/Checkout-Lane-Optimization"
    }
  ],
  "Personal Projects":[
    {
        title: "React Essentials",
        description: "Demonstrates core React concepts including components, JSX, props, and state. Built as part of a course from Udemy to solidify understanding of React fundamentals.",
        technologies:"React",
        imageUrl: "/react-essentials.png",
        link: "https://github.com/CodeByZarana/react-essentials"
    },
    {
        title: "SkyScanner Forage Challenge",
        description: "A React-based web application built as part of the Skyscanner Front-End Engineering virtual experience, demonstrating the implementation of a date picker and other UI components.",
        technologies:"React",
        imageUrl: "/sky.jpg",
        link: "https://github.com/CodeByZarana/SkyScanner-Forage-Solution"
    },
    {
      title: "Tic Tac Toe",
      description: "A React based 2 player tic-tac-toe game",
      technologies: "React, JavaScript",
      imageUrl: "/tictactoe.png", // replace with your actual image path
      link: "https://github.com/CodeByZarana/Tic-Tac-Toe-React"
    }
  ]
  // Add more categories and projects as needed
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section id="projects" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2 space-y-2">
          {Object.keys(projects).map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeTab === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4"><strong>Technologies:</strong> {project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;