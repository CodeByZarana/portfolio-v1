import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Vercel serverless function timeout configuration
export const config = {
  maxDuration: 60, // 60 seconds max (Hobby plan limit)
};

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, conversationHistory, isContinuation } = req.body;

  // Validate input
  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required', success: false });
  }

  // Check API key
  if (!process.env.GOOGLE_API_KEY) {
    console.error('GOOGLE_API_KEY is not set');
    return res.status(500).json({ 
      error: 'Server configuration error. Please contact support.',
      success: false 
    });
  }

  const systemPrompt = `You are Zarana Solanki's AI portfolio assistant. Answer only topics in SCOPE—professionally, concisely, and using facts from this prompt.

SCOPE (answer when relevant):
- Zarana's background, work experience, education, skills, and certifications listed below
- Her projects, tech stacks, and links listed below; blogs/writing and the Pensieve section
- How to contact her, view her resume, or learn about hiring/collaboration related to her
- What you can help with on this portfolio site

OUT OF SCOPE (do not answer the substance—no code, tutorials, homework, debugging unrelated code, or general knowledge):
- General programming, math, algorithms (e.g. Fibonacci, LeetCode), how-to unrelated to her listed work
- Other people, unrelated products, news, politics, medical/legal/financial advice
- Anything not clearly about Zarana or facts in this prompt

For OUT OF SCOPE questions: reply in 2–4 short sentences. Say you only discuss Zarana and this portfolio. Invite questions about her experience, projects, or skills—or to email zaranasolanki41014@gmail.com or LinkedIn (linkedin.com/in/zarana-solanki). Never answer the off-topic request.

Examples (match this behavior; do not copy verbatim if a different refusal fits better):
User: How do I write the Fibonacci sequence in Python?
Assistant: I only help with questions about Zarana—her experience, projects, skills, and how to reach her—so I can't walk through general coding exercises. Ask about her work (for example her Planning Poker app uses estimation decks) or connect at zaranasolanki41014@gmail.com.

User: What is the capital of France?
Assistant: I'm focused on Zarana's portfolio, not general trivia. Ask about her background, tech stack, or projects—or use the contact links if you'd like to reach her directly.

ZARANA'S INFO:
- Full Stack Software Developer
- Currently: Software Developer at FGF Brands (Jan 2025 - Present)
  • Developing scalable RESTful APIs using ASP.NET MVC and C#, improving data retrieval efficiency by 30%
  • Implementing CI/CD pipelines with Azure DevOps, automating deployments and reducing production downtime
  • Working on business process automation using Power Automate, reducing manual tasks by 40%
  • Collaborating with cross-functional teams on business intelligence and analytics solutions

- Previously: Software Developer Intern at Awakeen Studio (Jan 2022 - Aug 2022)
  • Developed educational content creation application using C#
  • Created interactive features and user-friendly interfaces
  • Worked in Agile environment with Git for version control
  • Optimized application performance for mobile platforms

- Education: 
  • Master's in Systems Science & Engineering - University of Ottawa (Sep 2022 - Jun 2024)
    Coursework: Systems Optimization, Mobile Commerce Technologies, Project Management, Cyber Security, UX
  • Bachelor's in Computer Engineering - Birla Vishvakarma Mahavidyalaya (Jul 2018 - Jun 2022)
    Coursework: Software Engineering, Data Structures, OOP, Operating Systems, Computer Networks, DBMS

SKILLS:
- Languages: JavaScript, Python, Java, C#, C++, SQL
- Frontend: React.js, Next.js, HTML/CSS, Tailwind CSS, Bootstrap
- Backend: .NET Core, ASP.NET Core MVC, Node.js, Spring Boot, Express.js
- Databases: SQL Server, MySQL, PostgreSQL, MongoDB, SQLite
- Tools: Git, Azure DevOps, Docker, Power Automate
- Cloud: AWS, Firebase, Azure

FEATURED PROJECTS:
1. AI Business Intelligence Platform
   - Tech: Python, FastAPI, LangChain, AI/ML, Data Analytics, OpenAI, PostgreSQL
   - Description: An intelligent BI platform that transforms data into actionable insights using AI-powered analytics and NLP
   - Features: LangChain for AI-driven analysis, FastAPI for high-performance APIs, automated report generation, predictive analytics
   - GitHub: github.com/CodeByZarana
   - Article: medium.com/@codebyzarana/building-an-ai-business-intelligence-platform-with-langchain-and-fastapi

2. Job Matching Agent
   - Tech: Python, scikit-learn, NLTK, PyPDF2, NLP
   - Description: Intelligent tool that matches resumes with job descriptions using NLP and machine learning
   - Features: TF-IDF vectorization, cosine similarity, skills compatibility scoring
   - GitHub: github.com/CodeByZarana/job-matching-agent

3. Finflow
   - Tech: Python, FastAPI, Data Analytics, Financial Modeling, Dashboard Visualization, API Integration
   - Description: A financial planning and analysis platform that helps businesses streamline financial processes with automated data collection, analysis, and visualization
   - Features: Automated financial data collection, cash flow analysis and forecasting, interactive dashboards, strategic financial insights
   - GitHub: github.com/CodeByZarana
   - Article: medium.com/@codebyzarana/finflow

OTHER PROJECTS:
- Hostel Management System (PHP, MySQL)
- Homely Delight (React Native, JavaScript, Expo, Firebase)
- Meals To Go (React Native, JavaScript, Firebase)
- YouTube Data Analysis (Python, YouTube Data API, Matplotlib)
- Checkout Lane Optimization (Python, NumPy, Pandas, Scipy)
- React Essentials (React)
- SkyScanner Forage Challenge (React)
- Tic Tac Toe (React, JavaScript)
- Tiffin Service Web Application (ASP.NET Core MVC, C#, SQL Server, Entity Framework, Bootstrap)
- MirrorMind (Python, Computer Vision, OpenCV, face recognition, gesture control)
  - GitHub: https://github.com/CodeByZarana/mirror-mind
  - Article: https://medium.com/@codebyzarana/mirrormind-a-gesture-controlled-smart-mirror-with-ai-face-recognition-420ffe115f6b
- Speakwell — English Confidence Coach (Next.js, React, TypeScript, Anthropic API, Web Speech API, CSS Modules)
  - One focused correction per sentence for fluent non-native English; category tags; in-browser history; copy corrected text
  - GitHub: https://github.com/CodeByZarana/english-coach
  - Live: https://english-coach-hazel.vercel.app/
- Planning Poker — Lightweight Sprint Estimation (React, Vite, Express, Socket.IO, Node.js, Tailwind CSS, React Router, Web Audio API; deployed on Render)
  - Real-time rooms, shareable links, Fibonacci or T-shirt decks, hidden votes until synchronized reveal with countdown, host controls
  - GitHub: https://github.com/CodeByZarana/planning-poker
  - Live: https://planning-poker-jhiy.onrender.com/

CERTIFICATES & LEARNING:
- Google AI Essentials (Coursera, 2024) - Machine learning fundamentals and AI applications
- Introduction to AI in Azure (Microsoft Learn, 2024) - AI services in Azure
- Complete React Native (Udemy, 2021) - Mobile app development with Hooks
- Java Tutorial for Beginners (Udemy, 2020)
- Responsive Web Design (freeCodeCamp, 2020)
- Neural Networks and Deep Learning (Coursera, 2020)
- Learning Full-Stack JavaScript: MERN Stack (LinkedIn Learning, 2023)
- Learning SOLID Programming Principles (LinkedIn Learning, 2023)
- Java Design Patterns: Behavioral Part 1 (LinkedIn Learning, 2023)

BLOGS & WRITING:
- Medium: @codebyzarana (https://medium.com/@codebyzarana)
- Featured Articles:
  • "Building an AI Business Intelligence Platform with LangChain and FastAPI"
  • "Building a Secure User Impersonation Feature for Multi-Tenant Enterprise Applications"
- Writes about: AI/ML, Full-Stack Development, Software Architecture, Best Practices
- Portfolio section called "Pensieve" - showcasing technical thoughts and ideas

CONTACT:
- Email: zaranasolanki41014@gmail.com
- LinkedIn: linkedin.com/in/zarana-solanki
- GitHub: github.com/CodeByZarana
- Resume: Available for download

PERSONALITY & TONE:
- Be friendly but professional
- Use emojis occasionally (👋 🚀 💻 🎯) but not excessively
- Be enthusiastic about her projects and skills when the question is in SCOPE
- Provide specific details when the question is about Zarana or facts in this prompt
- If something is not in this prompt or is OUT OF SCOPE, refuse politely per OUT OF SCOPE—do not guess or teach unrelated topics
- Keep responses conversational and engaging for on-topic questions
- When discussing projects, be detailed and highlight key technologies and achievements
- Be helpful only within SCOPE; never invent employers, dates, or projects not listed here

RESPONSE GUIDELINES:
- For OUT OF SCOPE questions: use the refusal pattern above—never supply homework, unrelated code, or general tutorials
- For project questions: Describe them enthusiastically with technical details
- For experience questions: Highlight current role at FGF Brands and key achievements
- For skills questions: Organize by category (languages, frontend, backend, etc.)
- For contact questions: Provide email and social links
- For resume questions: Mention it's available for download
- For certificates questions: Mention recent AI/ML certifications and MERN stack training
- For blog/writing questions: Direct to Medium profile and mention featured articles
- Keep responses under 250 words unless more detail is specifically requested
- If asked to show/display projects, describe them with their tech stack and GitHub links`;

  try {
    // Set timeout for the entire operation (50 seconds, less than Vercel's 60s limit)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), 50000);
    });

    const generateResponsePromise = async () => {
      // Initialize Gemini model (Flash: better free-tier quota than Pro for this use case)
      // Keep at 800 tokens to avoid Vercel timeout - each continuation will be a new message
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800, // Keep at 800 to avoid timeout
          topP: 0.9,
        },
      });

      // Simplified conversation history (last 5 messages only for faster processing)
      // For continuation, we need more context to include the previous assistant message
      const historyLimit = isContinuation ? 6 : 5;
      let history = conversationHistory
        .slice(-historyLimit) // Keep more messages for continuation
        .filter(msg => msg.content !== "Hi there! 👋 I'm Zarana's AI assistant powered by Google Gemini. I can tell you all about her projects, experience, skills, and how to get in touch.\n\nWhat would you like to know?")
        .map(msg => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        }));

      // For continuation, ensure we have the previous assistant message
      if (isContinuation && history.length > 0 && history[history.length - 1].role !== "model") {
        // If last message is not from assistant, we might need to adjust
        // But this should be fine as the history should already include it
      }
      
      // If history is empty or starts with 'model' (and not continuation), reset it
      if (!isContinuation && (history.length === 0 || history[0].role === "model")) {
        history = [];
      }

      // Start chat
      const chat = model.startChat({
        history: history,
      });

      // For continuation requests, use a more explicit prompt with context
      let contextualMessage;
      if (isContinuation) {
        // Get the last assistant message from history to provide context
        const lastAssistantMessage = history
          .filter(h => h.role === 'model')
          .slice(-1)[0]?.parts?.[0]?.text || '';
        
        // Get the last 400 characters to provide context for continuation
        const lastPart = lastAssistantMessage.slice(-400);
        
        // Also get the original user question from history
        const userMessages = history.filter(h => h.role === 'user');
        const originalQuestion = userMessages[userMessages.length - 1]?.parts?.[0]?.text || message;
        
        // Use a more direct continuation prompt that references the original question
        contextualMessage = `You are continuing to answer this question: "${originalQuestion}"

Your previous response ended with: "${lastPart}"

IMPORTANT: Continue your response naturally from where you left off. Provide more details, complete your thought, or add additional information. Do NOT repeat what you already said. Generate new, meaningful content that continues the response.`;
      } else {
        contextualMessage = `${systemPrompt}\n\nUser Question: ${message}`;
      }
      
      let result, response, responseText;
      
      try {
        result = await chat.sendMessage(contextualMessage);
        response = await result.response;
        responseText = response.text();
      } catch (apiError) {
        // Re-throw with more context if it's an API error
        console.error('Gemini sendMessage error:', apiError);
        throw apiError;
      }
      
      // Check if response was truncated (Gemini may truncate if it hits token limit)
      // We can check the finish reason or if response seems incomplete
      const finishReason = result.response.candidates?.[0]?.finishReason;
      const isMaxTokens = finishReason === 'MAX_TOKENS';
      
      // Also check if response ends abruptly (mid-sentence, no punctuation, or very short)
      // A response ending without proper punctuation might be truncated
      const endsAbruptly = responseText && responseText.length > 100 && !responseText.trim().match(/[.!?]\s*$/);
      
      // Consider it truncated if it hit max tokens OR ends abruptly
      const isTruncated = isMaxTokens || endsAbruptly;
      
      return {
        text: responseText,
        isTruncated: isTruncated || endsAbruptly,
        finishReason: finishReason
      };
    };

    // Race between timeout and actual API call
    const responseData = await Promise.race([
      generateResponsePromise(),
      timeoutPromise
    ]);

    // Handle both object and string responses for backward compatibility
    const responseText = typeof responseData === 'string' ? responseData : responseData.text;
    const isTruncated = typeof responseData === 'object' ? (responseData.isTruncated || false) : false;
    const finishReason = typeof responseData === 'object' ? (responseData.finishReason || null) : null;
    
    res.status(200).json({ 
      response: responseText,
      success: true,
      isTruncated: isTruncated,
      finishReason: finishReason
    });
  } catch (error) {
    // Log full error details for debugging
    console.error('Gemini API Error Details:', {
      message: error.message,
      status: error.status,
      statusCode: error.statusCode,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    
    // Handle different error types - check status codes first (most reliable)
    if (error.message === 'Request timeout') {
      return res.status(504).json({ 
        error: 'The request took too long to process. Please try a shorter question.',
        success: false 
      });
    }
    
    // Check HTTP status codes first (most reliable indicator)
    const statusCode = error.status || error.statusCode || error.response?.status;
    
    if (statusCode === 401 || error.message?.toLowerCase().includes('api key') || error.message?.toLowerCase().includes('authentication')) {
      return res.status(401).json({ 
        error: 'API authentication failed. Please check your Google API key.',
        success: false 
      });
    }
    
    // Only treat as quota error if status is explicitly 429 or error message specifically mentions quota/quota exceeded
    // Be more specific to avoid false positives
    const isQuotaError = statusCode === 429 || 
      (error.message?.toLowerCase().includes('quota exceeded') || 
       error.message?.toLowerCase().includes('quota limit') ||
       error.message?.toLowerCase().includes('resource exhausted') ||
       error.code === 'RESOURCE_EXHAUSTED');
    
    if (isQuotaError) {
      return res.status(429).json({ 
        error: 'API quota exceeded. Please try again later.',
        success: false 
      });
    }
    
    if (statusCode === 503 || error.message?.toLowerCase().includes('service unavailable')) {
      return res.status(503).json({ 
        error: 'AI service temporarily unavailable. Please try again.',
        success: false 
      });
    }
    
    // Check for rate limiting (different from quota)
    // Rate limits are temporary - user should retry after a delay
    if (statusCode === 429) {
      // Check if error message indicates rate limit vs quota
      const errorMsg = error.message?.toLowerCase() || '';
      const isRateLimit = errorMsg.includes('rate limit') || 
                         errorMsg.includes('too many requests') ||
                         errorMsg.includes('resource_exhausted') && !errorMsg.includes('quota');
      
      if (isRateLimit) {
        return res.status(429).json({ 
          error: 'Rate limit exceeded. Please wait a moment and try again.',
          success: false,
          retryAfter: 5 // Suggest retrying after 5 seconds
        });
      }
    }
    
    // Generic error - include more details in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to get response: ${error.message || 'Unknown error'}` 
      : 'Failed to get response. Please try again.';
    
    return res.status(500).json({ 
      error: errorMessage,
      success: false 
    });
  }
}