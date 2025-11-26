import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineBook, AiOutlineLink, AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

// Simple Background Animation Component
function BlogsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile: One simple gradient orb */}
      <motion.div
        className="md:hidden absolute top-1/2 left-1/2 w-96 h-96 bg-mocha/20 dark:bg-mocha/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Desktop: Full animations */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-mocha/10 dark:bg-mocha/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-forest/10 dark:bg-forest/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Medium RSS feed URL
        const rssUrl = `https://medium.com/feed/@codebyzarana`;
        // Use a CORS proxy or fetch directly if possible
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          setBlogs(data.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description,
            thumbnail: item.thumbnail || null,
          })));
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback: Use a static list or show error message
        setBlogs([
          {
            title: "Building an AI Business Intelligence Platform with LangChain and FastAPI: From Junior Developer to...",
            link: "https://medium.com/@codebyzarana/building-an-ai-business-intelligence-platform-with-langchain-and-fastapi-from-junior-developer-to-458085dd4124",
            pubDate: new Date().toISOString(),
            description: "A comprehensive guide to building an AI-powered business intelligence platform.",
            thumbnail: null,
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
  };

  return (
    <section id="blogs" className="section-padding bg-minimal relative overflow-hidden">
      <BlogsBackground />
      <div className="container-minimal max-w-4xl relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
        >
          <h2 className="section-heading mb-4">Pensieve</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of thoughts, ideas, and musings. You can check more of my writings on my{' '}
            <a 
              href="https://medium.com/@codebyzarana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-mocha hover:underline font-medium"
            >
              Medium profile
            </a>
            .
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-minimal-dark">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-minimal-dark">No blogs found.</p>
            <a 
              href="https://medium.com/@codebyzarana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-mocha hover:underline"
            >
              Visit my Medium profile
            </a>
          </div>
        ) : (
          <div className="space-y-1">
            {blogs.map((blog, index) => {
              // Extract category from title or description (you can customize this logic)
              const getCategory = (title) => {
                const lowerTitle = title.toLowerCase();
                if (lowerTitle.includes('guide') || lowerTitle.includes('how to') || lowerTitle.includes('tutorial')) return 'tutorial';
                if (lowerTitle.includes('thought') || lowerTitle.includes('reflection') || lowerTitle.includes('insight')) return 'thought';
                if (lowerTitle.includes('resource') || lowerTitle.includes('cheatsheet') || lowerTitle.includes('checklist')) return 'resource';
                return 'blog';
              };
              
              const category = getCategory(blog.title);
              
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: isMobile ? 0.3 : 0.4, delay: isMobile ? index * 0.05 : index * 0.05 }}
                  whileHover={isMobile ? {} : { x: 4 }}
                  className="group"
                >
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 border-l-2 border-transparent hover:border-mocha"
                  >
                    {/* Category Tag */}
                    <div className="flex-shrink-0 w-20 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {category}
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white group-hover:text-mocha transition-colors duration-200 mb-1">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span>{formatDate(blog.pubDate)}</span>
                      </div>
                    </div>

                    {/* External Link Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <HiOutlineExternalLink className="text-gray-400 dark:text-gray-500 text-lg" />
                    </div>
                  </a>
                </motion.article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

