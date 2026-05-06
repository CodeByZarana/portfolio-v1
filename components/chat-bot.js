// ChatBot.js - Smart pattern matching and pre-scripted responses

import { featuredProjects, allProjects } from '../pages/projects';

function linkSuffixForProject(p) {
  const parts = [];
  if (p.liveUrl) parts.push(`[Demo](${p.liveUrl})`);
  if (p.githubUrl) parts.push(`[Code](${p.githubUrl})`);
  if (!parts.length) return '';
  return ' ' + parts.join(' · ');
}

function buildProjectsFallbackText() {
  const line = (p) => `• **${p.title}** — ${p.description}${linkSuffixForProject(p)}`;
  const featuredBlock = featuredProjects.map(line).join('\n');
  const moreBlock = allProjects.map(line).join('\n');
  return `Zarana has built a broad portfolio across AI, full-stack web, mobile, and data.\n\n**Featured (portfolio highlights)**\n${featuredBlock}\n\n**More projects (includes live demos where listed)**\n${moreBlock}\n\nTip: switch to **Portfolio** mode and tap **View All Projects** for thumbnails and every link in one place.`;
}

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
      role: "Software Developer",
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
      name: "AI Business Intelligence Platform",
      description: "An intelligent BI platform built with LangChain and FastAPI that transforms data into actionable insights using AI-powered analytics and natural language processing.",
      technologies: ["Python", "FastAPI", "LangChain", "AI/ML", "Data Analytics", "OpenAI", "PostgreSQL"],
      github: "https://github.com/CodeByZarana",
      liveUrl: "https://medium.com/@codebyzarana/building-an-ai-business-intelligence-platform-with-langchain-and-fastapi-from-junior-developer-to-458085dd4124",
      highlights: [
        "Built with LangChain for AI-driven data analysis",
        "FastAPI for high-performance API development",
        "Automated report generation",
        "Predictive analytics and interactive dashboards",
        "Natural language processing capabilities"
      ],
      image: "/dashai.png",
      featured: true
    },
    {
      id: 2,
      name: "Job Matching Agent",
      description: "An intelligent Python tool that matches resumes with job descriptions using NLP and machine learning for skills compatibility analysis.",
      technologies: ["Python", "scikit-learn", "NLTK", "PyPDF2", "NLP"],
      github: "https://github.com/CodeByZarana/job-matching-agent",
      highlights: [
        "Uses TF-IDF vectorization and cosine similarity",
        "Calculates match scores for job compatibility",
        "Helps job seekers find the best opportunities",
        "Skills and experience alignment"
      ],
      image: "/job-agent.png",
      featured: true
    },
    {
      id: 3,
      name: "Finflow",
      description: "A financial planning and analysis platform that helps businesses streamline financial processes with automated data collection, analysis, and visualization.",
      technologies: ["Python", "FastAPI", "Data Analytics", "Financial Modeling", "Dashboard Visualization", "API Integration"],
      github: "https://github.com/CodeByZarana",
      liveUrl: "https://medium.com/@codebyzarana/finflow",
      highlights: [
        "Automated financial data collection and analysis",
        "Cash flow analysis and forecasting",
        "Interactive financial dashboards",
        "Strategic financial insights for decision-making",
        "Integration with accounting software"
      ],
      image: "/finflow.png",
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
  if (/ai.*business|business.*intelligence|bi.*platform|dashai|langchain|fastapi.*bi/i.test(lowerMessage)) return 'project_ai_bi';
  if (/job.*match|matching.*agent|resume.*match|nlp.*job/i.test(lowerMessage)) return 'project_job';
  if (/finflow|fin.*flow|financial.*planning|financial.*analysis/i.test(lowerMessage)) return 'project_finflow';
  if (/speakwell|english confidence|english coach/i.test(lowerMessage)) return 'project_speakwell';
  if (/planning poker|planning-poker|sprint estimation/i.test(lowerMessage)) return 'project_planning';
  if (/tiffin|food.*delivery|subscription.*food/i.test(lowerMessage)) return 'projects'; // Tiffin Service
  
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
  
  // Certifications
  if (/(certificate|certification|cert|course|learning|training|udemy|coursera|linkedin.*learning)/i.test(lowerMessage)) {
    return 'certifications';
  }
  
  // Blogs / Writing
  if (/(blog|article|writing|write|medium|pensieve|published)/i.test(lowerMessage)) {
    return 'blogs';
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
      text: buildProjectsFallbackText(),
      type: 'project_cards',
      data: portfolioData.projects.filter(p => p.featured).slice(0, 3),
      suggestions: [
        "Tell me more about the AI BI Platform",
        "Tell me about Speakwell",
        "Tell me about Planning Poker"
      ]
    },
    
    project_ai_bi: {
      text: "The **AI Business Intelligence Platform** is one of Zarana's standout projects! 🤖\n\nIt's an intelligent BI platform built with LangChain and FastAPI that transforms data into actionable insights using AI-powered analytics and natural language processing.\n\n**Key Features:**\n• LangChain for AI-driven data analysis\n• FastAPI for high-performance API development\n• Automated report generation\n• Predictive analytics and interactive dashboards\n• Natural language processing capabilities\n\nThis project demonstrates Zarana's expertise in AI/ML, data analytics, and building comprehensive business intelligence solutions.",
      type: 'project_card',
      data: portfolioData.projects[0],
      suggestions: [
        "Show me other projects",
        "What technologies does she know?",
        "Tell me about her experience"
      ]
    },
    
    project_job: {
      text: "The **Job Matching Agent** is an intelligent Python tool that matches resumes with job descriptions using NLP and machine learning! 💼\n\n**Key Features:**\n• Uses TF-IDF vectorization and cosine similarity\n• Calculates match scores for job compatibility\n• Helps job seekers find the best opportunities\n• Skills and experience alignment\n\nBuilt with Python, scikit-learn, NLTK, and PyPDF2, this project showcases Zarana's skills in natural language processing and machine learning.",
      type: 'project_card',
      data: portfolioData.projects[1],
      suggestions: [
        "Show me other projects",
        "What technologies does she know?",
        "Tell me about her experience"
      ]
    },
    
    project_finflow: {
      text: "**Finflow** is a comprehensive financial planning and analysis platform! 💰\n\nIt's an intelligent financial management solution that helps businesses streamline their financial processes with automated data collection, analysis, and visualization.\n\n**Key Features:**\n• Automated financial data collection and analysis\n• Cash flow analysis and forecasting\n• Interactive financial dashboards\n• Strategic financial insights for decision-making\n• Integration with accounting software\n\n**Tech Stack:** Python, FastAPI, Data Analytics, Financial Modeling, Dashboard Visualization\n\nThis project demonstrates Zarana's expertise in building financial technology solutions and data analytics platforms!",
      type: 'project_card',
      data: portfolioData.projects[2],
      suggestions: [
        "What other projects has she built?",
        "Tell me about her tech skills",
        "How can I contact her?"
      ]
    },

    project_speakwell: {
      text: "**Speakwell — English Confidence Coach** helps fluent non-native speakers fix small, high-impact English mistakes in one pass.\n\n**Highlights:**\n• Paste or dictate a sentence; get one focused correction with a short explanation\n• Category tags (grammar, phrasing, word choice, fillers); in-browser history; one-click copy\n• Next.js, TypeScript, Anthropic API, Web Speech API (no extra speech service), CSS Modules\n\n**Links:** [Live app](https://english-coach-hazel.vercel.app/) · [Code](https://github.com/CodeByZarana/english-coach)",
      suggestions: [
        "What other projects has she built?",
        "Tell me about Planning Poker",
        "How can I contact her?"
      ]
    },

    project_planning: {
      text: "**Planning Poker — Lightweight Sprint Estimation** is real-time planning poker for agile teams—create a room, share the link, and vote together without another SaaS signup.\n\n**Highlights:**\n• Fibonacci or T-shirt decks, hidden votes until a synchronized reveal with countdown\n• Node + Express + Socket.IO, in-memory rooms; React + Vite + Tailwind; Web Audio API for sounds\n• Deployed on Render\n\n**Links:** [Live app](https://planning-poker-jhiy.onrender.com/) · [Code](https://github.com/CodeByZarana/planning-poker)",
      suggestions: [
        "What other projects has she built?",
        "Tell me about Speakwell",
        "What's her tech stack?"
      ]
    },
    
    experience: {
      text: `Zarana has great professional experience! Here's her work history:\n\n**Current Role:**\n🏢 **Software Developer** at FGF Brands\n📅 January 2025 - Present\n\n• Developing scalable RESTful APIs with ASP.NET MVC & C#\n• Implementing CI/CD pipelines with Azure DevOps\n• Business process automation (reduced manual tasks by 40%!)\n• Working with cross-functional teams on analytics solutions\n\n**Previous Role:**\n🏢 **Software Developer Intern** at Awakeen Studio\n📅 January 2022 - August 2022\n\n• Developed AR in Education app with C#, Unity, and Vuforia\n• Created 3D models and implemented AR features\n• Worked in Agile environment with Git\n\nZarana brings over 3 years of hands-on experience with modern frameworks and technologies!`,
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
    
    certifications: {
      text: `Zarana has completed several certifications and courses to continuously improve her skills! 📚\n\n**Recent Certifications (2024):**\n• Google AI Essentials (Coursera) - Machine learning fundamentals and AI applications\n• Introduction to AI in Azure (Microsoft Learn) - AI services in Azure\n\n**Full-Stack & Development:**\n• Learning Full-Stack JavaScript: MERN Stack (LinkedIn Learning, 2023)\n• Learning SOLID Programming Principles (LinkedIn Learning, 2023)\n• Complete React Native (Udemy, 2021) - Mobile app development with Hooks\n\n**Programming & Design:**\n• Java Design Patterns: Behavioral Part 1 (LinkedIn Learning, 2023)\n• Java Tutorial for Beginners (Udemy, 2020)\n• Responsive Web Design (freeCodeCamp, 2020)\n\n**AI & Machine Learning:**\n• Neural Networks and Deep Learning (Coursera, 2020)\n\nZarana is committed to continuous learning and staying updated with the latest technologies! 🚀`,
      suggestions: [
        "Tell me about her projects",
        "What's her experience?",
        "Show me her blogs"
      ]
    },
    
    blogs: {
      text: `Zarana writes technical articles and shares her knowledge on Medium! ✍️\n\n**Medium Profile:**\n📝 @codebyzarana - [medium.com/@codebyzarana](https://medium.com/@codebyzarana)\n\n**Featured Articles:**\n• "Building an AI Business Intelligence Platform with LangChain and FastAPI"\n• "Building a Secure User Impersonation Feature for Multi-Tenant Enterprise Applications"\n\n**Writing Topics:**\n• AI/ML and Machine Learning\n• Full-Stack Development\n• Software Architecture\n• Best Practices and Technical Insights\n\n**Portfolio Section:**\nHer portfolio has a section called "Pensieve" where she showcases technical thoughts and ideas.\n\nYou can check out all her writings on her Medium profile!`,
      suggestions: [
        "Tell me about her projects",
        "What certifications does she have?",
        "How can I contact her?"
      ]
    },
    
    about: {
      text: `Let me tell you about Zarana! 👋\n\nZarana is a **Full Stack Software Developer** passionate about building scalable, high-performance web applications. Her journey into tech wasn't straightforward—it was filled with challenges that taught her the value of persistence and adaptability.\n\n**What drives her:**\n• Creating elegant solutions to complex problems\n• Learning new technologies and frameworks\n• Building applications that make a real impact\n• Writing clean, maintainable code\n\n**Current Focus:**\n• Working with .NET and React ecosystems\n• Building RESTful APIs and full-stack applications\n• CI/CD and DevOps practices\n• Business process automation\n\nShe's currently working as a Software Developer at FGF Brands, where she's developing scalable APIs and implementing automation solutions.\n\nWhat excites her most is the constant evolution in technology and the opportunity to turn ideas into reality through code!`,
      suggestions: [
        "Show me her projects",
        "What's her experience?",
        "How can I contact her?"
      ]
    },
    
    help: {
      text: `I can help you learn about Zarana! Here's what you can ask me:\n\n**Projects & Work:**\n• "What projects has she built?"\n• "Tell me about the AI BI Platform"\n• "Show me her work"\n\n**Experience & Skills:**\n• "What's her work experience?"\n• "What technologies does she know?"\n• "What's her tech stack?"\n\n**Background:**\n• "Tell me about her education"\n• "What certifications does she have?"\n• "What's her background?"\n\n**Writing & Learning:**\n• "What blogs has she written?"\n• "Where can I read her articles?"\n• "What courses has she taken?"\n\n**Contact & Resume:**\n• "How can I contact her?"\n• "Can I see her resume?"\n• "What's her email?"\n\nJust ask naturally, and I'll help you find what you're looking for!`,
      suggestions: [
        "Show me her projects",
        "What's her experience?",
        "Tell me about her certifications"
      ]
    },
    
    unknown: {
      text: `I'm not quite sure how to answer that, but I'd love to help! 🤔\n\nYou can ask me about:\n• Zarana's projects and work\n• Her experience and skills\n• Education and certifications\n• Blogs and articles she's written\n• How to contact her\n• Download her resume\n\nTry asking something like "What projects has she built?", "Tell me about her certifications", or "What blogs has she written?"!`,
      suggestions: [
        "What projects has she built?",
        "Tell me about her certifications",
        "What blogs has she written?"
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