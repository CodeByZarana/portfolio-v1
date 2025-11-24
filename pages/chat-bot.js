// ChatBot.js - Smart pattern matching and pre-scripted responses

export const portfolioData = {
  personal: {
    name: "Zarana Solanki",
    title: "Full Stack Software Developer",
    email: "zaranasolanki41014@gmail.com",
    location: "Toronto, Ontario, Canada",
    linkedin: "https://www.linkedin.com/in/zarana-solanki",
    github: "https://github.com/CodeByZarana",
    resume: "/Resume.pdf",
  },
  
  experience: [
    {
      role: ".NET Software Developer Intern",
      company: "FGF Brands",
      location: "Canada",
      period: "January 2025 - Present",
      highlights: [
        "Developing scalable RESTful APIs using ASP.NET MVC and C#, improving data retrieval efficiency by 30%",
        "Implementing CI/CD pipelines with Azure DevOps, automating deployments and reducing production downtime",
        "Working on business process automation using Power Automate, reducing manual tasks by 40%",
        "Collaborating with cross-functional teams on business intelligence and analytics solutions"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Awakeen Studio Pvt. Ltd.",
      location: "Ahmedabad, India",
      period: "January 2022 - August 2022",
      highlights: [
        "Developed AR in Education application using C#, Unity, and Vuforia",
        "Implemented augmented reality features and created 3D models",
        "Worked in Agile environment with Git for version control",
        "Optimized application performance for Android devices"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "Tiffin Service Web Application",
      description: "A full-stack subscription platform for delivering homemade food with real-time order tracking, user authentication, and an admin dashboard.",
      technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
      github: "https://github.com/CodeByZarana/Tiffin-Service-Web-Application",
      highlights: [
        "Built with ASP.NET Core MVC and SQL Server",
        "Features user authentication and authorization",
        "Real-time order tracking system",
        "Admin dashboard for management",
        "Subscription management system"
      ],
      image: "/tiffin.png",
      featured: true
    },
    {
      id: 2,
      name: "Diabetes Detector",
      description: "An Android application utilizing OCR and machine learning to detect potential diabetes symptoms through image recognition.",
      technologies: ["Java", "Android SDK", "OCR", "Machine Learning", "TensorFlow"],
      github: "https://github.com/CodeByZarana/Diabetes-Detector",
      highlights: [
        "Uses OCR for medical report analysis",
        "Machine learning models for symptom detection",
        "Real-time image processing",
        "Provides instant health insights"
      ],
      image: "/diabetes.png",
      featured: true
    },
    {
      id: 3,
      name: "Job Matching Agent",
      description: "An intelligent Python tool that matches resumes with job descriptions using NLP and machine learning.",
      technologies: ["Python", "scikit-learn", "NLTK", "PyPDF2", "TF-IDF"],
      github: "https://github.com/CodeByZarana/Job-Matching-Agent",
      highlights: [
        "Uses TF-IDF vectorization for text analysis",
        "Calculates skills compatibility scores",
        "Category matching and experience alignment",
        "Helps job seekers find best opportunities"
      ],
      image: "/job-agent.png",
      featured: true
    }
  ],
  
  skills: {
    languages: ["JavaScript", "Python", "Java", "C#", "C++", "SQL"],
    frontend: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
    backend: [".NET Core", "ASP.NET Core MVC", "Node.js", "Spring Boot", "Express.js"],
    databases: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    tools: ["Git", "Azure DevOps", "Docker", "Power Automate", "Unity"],
    cloud: ["AWS", "Firebase", "Azure"]
  },
  
  education: [
    {
      degree: "Master of Systems Science and Engineering",
      school: "University of Ottawa",
      location: "Ottawa, Ontario, Canada",
      period: "September 2022 - June 2024",
      coursework: "Systems Optimization, Mobile Commerce Technologies, Project Management, Software Usability, Cyber Security, User Experience"
    },
    {
      degree: "Bachelor of Technology - Computer Engineering",
      school: "Birla Vishvakarma Mahavidyalaya",
      location: "Anand, Gujarat, India",
      period: "July 2018 - June 2022",
      coursework: "Software Engineering, Data Structures and Algorithms, OOP, Operating Systems, Computer Networks, DBMS"
    }
  ]
};

// Pattern matching for intent detection
export const detectIntent = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Greetings
  if (/(^|\s)(hi|hello|hey|greetings)($|\s|!)/i.test(lowerMessage)) {
    return 'greeting';
  }
  
  // Projects
  if (/(project|work|portfolio|built|created|made|developed)/i.test(lowerMessage)) {
    return 'projects';
  }
  
  // Specific project
  if (/tiffin/i.test(lowerMessage)) return 'project_tiffin';
  if (/diabetes/i.test(lowerMessage)) return 'project_diabetes';
  if (/job.*match/i.test(lowerMessage)) return 'project_job';
  
  // Experience
  if (/(experience|work.*history|job|role|position|intern|fgf|awakeen)/i.test(lowerMessage)) {
    return 'experience';
  }
  
  // Skills / Tech Stack
  if (/(skill|technology|tech.*stack|tools|language|framework|know)/i.test(lowerMessage)) {
    return 'skills';
  }
  
  // Education
  if (/(education|degree|university|study|studied|graduate)/i.test(lowerMessage)) {
    return 'education';
  }
  
  // Contact
  if (/(contact|email|reach|hire|connect|get.*touch|linkedin|github)/i.test(lowerMessage)) {
    return 'contact';
  }
  
  // Resume
  if (/(resume|cv|download)/i.test(lowerMessage)) {
    return 'resume';
  }
  
  // About
  if (/(about|who.*are|tell.*me|yourself|background|story)/i.test(lowerMessage)) {
    return 'about';
  }
  
  // Help
  if (/(help|what.*can|how.*work|options)/i.test(lowerMessage)) {
    return 'help';
  }
  
  return 'unknown';
};

// Generate responses based on intent
export const generateResponse = (intent, userMessage = '') => {
  const responses = {
    greeting: {
      text: "Hi there! 👋 I'm Zarana's AI assistant. I can tell you all about her projects, experience, skills, and how to get in touch. What would you like to know?",
      suggestions: [
        "What projects has Zarana built?",
        "Tell me about her experience",
        "What's her tech stack?"
      ]
    },
    
    projects: {
      text: "Zarana has built several impressive projects! Here are her top 3 featured projects:",
      type: 'project_cards',
      data: portfolioData.projects.filter(p => p.featured),
      suggestions: [
        "Tell me more about the Tiffin Service app",
        "Show me the Diabetes Detector project",
        "What about the Job Matching Agent?"
      ]
    },
    
    project_tiffin: {
      text: "The **Tiffin Service Web Application** is one of Zarana's standout projects! 🍱\n\nIt's a full-stack subscription platform for delivering homemade food, built with ASP.NET Core MVC, C#, and SQL Server.\n\n**Key Features:**\n• User authentication & authorization\n• Real-time order tracking\n• Subscription management\n• Admin dashboard\n\nThis project demonstrates Zarana's expertise in building scalable, enterprise-level applications with clean architecture and robust database design.",
      type: 'project_card',
      data: portfolioData.projects[0],
      suggestions: [
        "Show me other projects",
        "What technologies does she know?",
        "Tell me about her experience"
      ]
    },
    
    project_diabetes: {
      text: "The **Diabetes Detector** is a really innovative project! 🏥\n\nIt's an Android application that uses OCR and machine learning to detect potential diabetes symptoms through image recognition.\n\n**Technical Highlights:**\n• Built with Java and Android SDK\n• Integrates OCR for medical report analysis\n• Machine learning models with TensorFlow\n• Real-time image processing\n• Provides instant health insights\n\nThis showcases Zarana's ability to work with mobile development and ML technologies!",
      type: 'project_card',
      data: portfolioData.projects[1],
      suggestions: [
        "What other projects has she built?",
        "Tell me about her tech skills",
        "How can I contact her?"
      ]
    },
    
    project_job: {
      text: "The **Job Matching Agent** is a practical NLP-powered tool! 🎯\n\nIt's an intelligent Python application that matches resumes with job descriptions using natural language processing and machine learning.\n\n**How it works:**\n• Uses TF-IDF vectorization for text analysis\n• Calculates skills compatibility scores\n• Matches categories and experience levels\n• Helps job seekers find best opportunities\n\n**Tech Stack:** Python, scikit-learn, NLTK, PyPDF2\n\nThis project demonstrates Zarana's data science and NLP capabilities!",
      type: 'project_card',
      data: portfolioData.projects[2],
      suggestions: [
        "Show me all her projects",
        "What's her experience?",
        "Can I see her resume?"
      ]
    },
    
    experience: {
      text: `Zarana has great professional experience! Here's her work history:\n\n**Current Role:**\n🏢 **.NET Software Developer Intern** at FGF Brands\n📅 January 2025 - Present\n\n• Developing scalable RESTful APIs with ASP.NET MVC & C#\n• Implementing CI/CD pipelines with Azure DevOps\n• Business process automation (reduced manual tasks by 40%!)\n• Working with cross-functional teams on analytics solutions\n\n**Previous Role:**\n🏢 **Software Developer Intern** at Awakeen Studio\n📅 January 2022 - August 2022\n\n• Developed AR in Education app with C#, Unity, and Vuforia\n• Created 3D models and implemented AR features\n• Worked in Agile environment with Git\n\nZarana brings over 3 years of hands-on experience with modern frameworks and technologies!`,
      suggestions: [
        "What skills does she have?",
        "Show me her projects",
        "What's her education background?"
      ]
    },
    
    skills: {
      text: `Zarana has a comprehensive tech stack! Here's what she works with:\n\n**Languages:**\n💻 JavaScript, Python, Java, C#, C++, SQL\n\n**Frontend:**\n🎨 React.js, Next.js, HTML/CSS, Tailwind CSS, Bootstrap\n\n**Backend:**\n⚙️ .NET Core, ASP.NET Core MVC, Node.js, Spring Boot\n\n**Databases:**\n🗄️ SQL Server, MySQL, PostgreSQL, MongoDB, SQLite\n\n**Tools & Cloud:**\n🛠️ Git, Azure DevOps, Docker, AWS, Firebase, Azure\n\nShe's proficient in building full-stack applications with both .NET and JavaScript ecosystems!`,
      type: 'code_snippet',
      code: `// Example: Zarana's Tech Stack
const techStack = {
  languages: ["JavaScript", "Python", "Java", "C#"],
  frontend: ["React", "Next.js", "Tailwind"],
  backend: [".NET Core", "Node.js", "Spring Boot"],
  databases: ["SQL Server", "PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Azure", "Firebase"]
};`,
      suggestions: [
        "Show me her projects",
        "Tell me about her experience",
        "What's her education?"
      ]
    },
    
    education: {
      text: `**Education Background:**\n\n🎓 **Master of Systems Science and Engineering**\nUniversity of Ottawa, Canada (2022-2024)\n\nRelevant Coursework: Systems Optimization, Mobile Commerce Technologies, Project Management, Cyber Security, UX Principles\n\n🎓 **Bachelor of Technology - Computer Engineering**\nBirla Vishvakarma Mahavidyalaya, India (2018-2022)\n\nRelevant Coursework: Software Engineering, Data Structures, OOP, Operating Systems, Computer Networks, DBMS\n\nZarana has a strong academic foundation in both systems engineering and computer science!`,
      suggestions: [
        "What's her work experience?",
        "Show me her projects",
        "What skills does she have?"
      ]
    },
    
    contact: {
      text: `You can reach Zarana through multiple channels:\n\n📧 **Email:** zaranasolanki41014@gmail.com\n💼 **LinkedIn:** linkedin.com/in/zarana-solanki\n🐙 **GitHub:** github.com/CodeByZarana\n\nShe's always open to discussing new opportunities, interesting projects, or just chatting about technology!\n\nFeel free to send her an email or connect on LinkedIn. She typically responds within 24 hours.`,
      type: 'contact_card',
      data: portfolioData.personal,
      suggestions: [
        "Can I see her resume?",
        "Show me her projects",
        "What's her experience?"
      ]
    },
    
    resume: {
      text: `You can download Zarana's complete resume here! 📄\n\nIt includes detailed information about her:\n• Work experience at FGF Brands and Awakeen Studio\n• All projects with technical details\n• Complete tech stack and skills\n• Education and certifications\n• Contact information\n\nClick the button below to download:`,
      type: 'resume_download',
      data: { link: portfolioData.personal.resume },
      suggestions: [
        "Tell me about her projects",
        "What's her tech stack?",
        "How can I contact her?"
      ]
    },
    
    about: {
      text: `Let me tell you about Zarana! 👋\n\nZarana is a **Full Stack Software Developer** passionate about building scalable, high-performance web applications. Her journey into tech wasn't straightforward—it was filled with challenges that taught her the value of persistence and adaptability.\n\n**What drives her:**\n• Creating elegant solutions to complex problems\n• Learning new technologies and frameworks\n• Building applications that make a real impact\n• Writing clean, maintainable code\n\n**Current Focus:**\n• Working with .NET and React ecosystems\n• Building RESTful APIs and full-stack applications\n• CI/CD and DevOps practices\n• Business process automation\n\nShe's currently working as a .NET Software Developer Intern at FGF Brands, where she's developing scalable APIs and implementing automation solutions.\n\nWhat excites her most is the constant evolution in technology and the opportunity to turn ideas into reality through code!`,
      suggestions: [
        "Show me her projects",
        "What's her experience?",
        "How can I contact her?"
      ]
    },
    
    help: {
      text: `I can help you learn about Zarana! Here's what you can ask me:\n\n**Projects & Work:**\n• "What projects has she built?"\n• "Tell me about the Tiffin Service app"\n• "Show me her work"\n\n**Experience & Skills:**\n• "What's her work experience?"\n• "What technologies does she know?"\n• "What's her tech stack?"\n\n**Background:**\n• "Tell me about her education"\n• "What's her background?"\n• "Who is Zarana?"\n\n**Contact & Resume:**\n• "How can I contact her?"\n• "Can I see her resume?"\n• "What's her email?"\n\nJust ask naturally, and I'll help you find what you're looking for!`,
      suggestions: [
        "Show me her projects",
        "What's her experience?",
        "Tell me about her skills"
      ]
    },
    
    unknown: {
      text: `I'm not quite sure how to answer that, but I'd love to help! 🤔\n\nYou can ask me about:\n• Zarana's projects and work\n• Her experience and skills\n• Education background\n• How to contact her\n• Download her resume\n\nTry asking something like "What projects has she built?" or "Tell me about her experience"!`,
      suggestions: [
        "What projects has she built?",
        "Tell me about her experience",
        "What skills does she have?"
      ]
    }
  };
  
  return responses[intent] || responses.unknown;
};

// Helper function to format code snippets
export const formatCodeSnippet = (code, language = 'javascript') => {
  return {
    code,
    language,
    formatted: true
  };
};

// Helper function to create project card data
export const createProjectCard = (project) => {
  return {
    type: 'project',
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    github: project.github,
    image: project.image,
    highlights: project.highlights
  };
};