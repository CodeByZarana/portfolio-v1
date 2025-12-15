import { useState, useRef, useEffect } from 'react';
import { AiOutlineSend, AiOutlineGithub } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonStarsFill, BsList, BsX } from 'react-icons/bs';
import Image from 'next/image';
import { detectIntent, generateResponse } from '../components/chat-bot';

// Helper function to format markdown-style text
const formatText = (text) => {
  if (!text) return '';
  
  // Convert **bold** to <strong>
  let formatted = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Convert *italic* to <em>
  formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Convert [text](url) to links
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-mocha hover:underline">$1</a>');
  
  return formatted;
};

// Message Component
const Message = ({ message, isUser }) => {
  if (isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-mocha text-white px-6 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
          <p className="text-sm md:text-base">{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6">
      <div className={`bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm ${message.isContinuation ? 'mt-2' : ''}`}>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <div 
            className="text-sm md:text-base whitespace-pre-line leading-relaxed text-gray-900 dark:text-gray-100"
            dangerouslySetInnerHTML={{ __html: formatText(message.text) }}
          />
        </div>
        
        {/* Suggested Questions - only show on last message */}
        {message.suggestions && message.suggestions.length > 0 && !message.isContinuation && (
          <div className="mt-4 flex flex-wrap gap-2">
            {message.suggestions.map((suggestion, index) => (
              <SuggestionChip key={index} text={suggestion} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Suggestion Chip Component
const SuggestionChip = ({ text }) => {
  return (
    <button className="suggestion-chip text-xs md:text-sm bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-mocha transition-all">
      {text}
    </button>
  );
};

// Main Chat Interface Component
export default function ChatInterface({ onSwitchMode, darkMode, setDarkMode }) {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 I'm Zarana's AI assistant powered by Google Gemini. I can tell you all about her projects, experience, skills, and how to get in touch.\n\nWhat would you like to know?",
      isUser: false,
      suggestions: [
        "What projects has Zarana built?",
        "Tell me about her experience",
        "What's her tech stack?",
        "How can I contact her?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle continuing a truncated response - creates a new message
  // Added retryCount to track retries for exponential backoff
  const continueResponse = async (previousText, conversationHistory, retryCount = 0) => {
    setIsTyping(true);
    
    try {
      // Add delay before making request to avoid rate limiting
      // Exponential backoff: 2s, 4s, 8s for retries
      const baseDelay = retryCount === 0 ? 2000 : Math.min(2000 * Math.pow(2, retryCount), 10000);
      if (retryCount > 0 || previousText) {
        await new Promise(resolve => setTimeout(resolve, baseDelay));
      }
      
      // Call API with continuation request
      // The conversation history already includes the previous response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: "Continue your previous response from where you left off.",
          conversationHistory: conversationHistory,
          isContinuation: true
        }),
      });

      const data = await response.json();
      
      // Handle rate limit errors (429) with retry
      if (response.status === 429 || (data.error && data.error.includes('rate limit'))) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : baseDelay * 2;
        
        if (retryCount < 3) {
          console.log(`Rate limited. Retrying after ${waitTime}ms (attempt ${retryCount + 1}/3)`);
          setTimeout(async () => {
            await continueResponse(previousText, conversationHistory, retryCount + 1);
          }, waitTime);
          return;
        } else {
          // Max retries reached
          const errorMessage = {
            text: "I'm experiencing high demand right now. Please wait a moment and try asking your question again.",
            isUser: false,
            suggestions: ["Try again in a moment", "Ask a shorter question"]
          };
          setMessages(prev => [...prev, errorMessage]);
          setIsTyping(false);
          return;
        }
      }
      
      if (data.success && data.response) {
        const newText = data.response.trim();
        
        // Only create new message if we got meaningful new content (more than just a few characters)
        if (newText.length > 10) {
          // Create a new message for the continuation
          const continuationMessage = {
            text: newText,
            isUser: false,
            suggestions: [],
            isTruncated: data.isTruncated || false,
            isContinuation: true // Flag to indicate this is a continuation
          };
          
          setMessages(prev => [...prev, continuationMessage]);
          
          // If still truncated, continue again with updated history
          // Use longer delay (3 seconds) to avoid rate limiting
          if (data.isTruncated) {
            const updatedHistory = [
              ...conversationHistory,
              { role: "assistant", content: newText }
            ];
            setTimeout(async () => {
              await continueResponse(newText, updatedHistory, 0);
            }, 3000); // Increased to 3 seconds to avoid rate limits
          }
        } else {
          // If we got a very short or empty response, stop trying to continue
          console.log('Continuation returned insufficient content, stopping');
        }
      } else {
        // If no response or error, stop trying to continue
        console.log('Continuation failed or returned no content');
      }
    } catch (error) {
      console.error('Error continuing response:', error);
      // If it's a rate limit error, retry with backoff
      if (error.message?.includes('429') || error.message?.includes('rate limit')) {
        if (retryCount < 3) {
          setTimeout(async () => {
            await continueResponse(previousText, conversationHistory, retryCount + 1);
          }, baseDelay * 2);
          return;
        }
      }
      // If continuation fails completely, don't show error - just stop
      // The main response was already shown, so user has some content
    } finally {
      setIsTyping(false);
    }
  };

  // Handle sending message with Gemini API
  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      text: messageText,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare conversation history for API (last 10 messages for context)
      const conversationHistory = messages
        .slice(-10) // Keep last 10 messages for context
        .map(msg => ({
          role: msg.isUser ? "user" : "assistant",
          content: msg.text
        }));

      // Call Gemini API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: conversationHistory
        }),
      });

      // Check if response is ok before parsing JSON
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        // If JSON parsing fails, use fallback
        console.error('Failed to parse response, using fallback');
        const intent = detectIntent(messageText);
        const fallbackResponse = generateResponse(intent, messageText);
        
        const botMessage = {
          text: fallbackResponse.text,
          isUser: false,
          suggestions: fallbackResponse.suggestions || [
            "Tell me more about her projects",
            "What's her experience?",
            "How can I contact her?"
          ],
          isFallback: true
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      // Handle rate limit errors (429) - use fallback
      if (response.status === 429 || (data.error && (data.error.includes('rate limit') || data.error.includes('quota')))) {
        // Use fallback pattern matching instead of showing error
        const intent = detectIntent(messageText);
        const fallbackResponse = generateResponse(intent, messageText);
        
        const botMessage = {
          text: fallbackResponse.text,
          isUser: false,
          suggestions: fallbackResponse.suggestions || [
            "Tell me more about her projects",
            "What's her experience?",
            "How can I contact her?"
          ],
          isFallback: true // Flag to indicate fallback mode
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      // Handle any other API errors - use fallback
      if (!response.ok || !data.success) {
        console.log('API returned error, using fallback:', data.error);
        const intent = detectIntent(messageText);
        const fallbackResponse = generateResponse(intent, messageText);
        
        const botMessage = {
          text: fallbackResponse.text,
          isUser: false,
          suggestions: fallbackResponse.suggestions || [
            "Tell me more about her projects",
            "What's her experience?",
            "How can I contact her?"
          ],
          isFallback: true
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        return;
      }
      
      if (data.success) {
        const botMessage = {
          text: data.response,
          isUser: false,
          suggestions: [
            "Tell me more about her projects",
            "What's her experience?",
            "How can I contact her?",
            "Show me her resume"
          ],
          isTruncated: data.isTruncated || false
        };
        setMessages(prev => [...prev, botMessage]);
        
        // If response was truncated, automatically continue
        // Use longer delay (2 seconds) to avoid rate limiting
        if (data.isTruncated) {
          // Wait a moment for UX, then continue
          // Build updated history with the user message and assistant's partial response
          const updatedHistory = [
            ...conversationHistory,
            { role: "user", content: messageText },
            { role: "assistant", content: botMessage.text }
          ];
          setTimeout(async () => {
            await continueResponse(botMessage.text, updatedHistory, 0);
          }, 2000); // Increased to 2 seconds to avoid rate limits
        }
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('API Error, using fallback:', error);
      
      // Use fallback pattern matching when API fails
      try {
        const intent = detectIntent(messageText);
        const fallbackResponse = generateResponse(intent, messageText);
        
        const botMessage = {
          text: fallbackResponse.text,
          isUser: false,
          suggestions: fallbackResponse.suggestions || [
            "Tell me more about her projects",
            "What's her experience?",
            "How can I contact her?"
          ],
          isFallback: true // Flag to indicate fallback mode
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (fallbackError) {
        // If even fallback fails, show error message
        console.error('Fallback also failed:', fallbackError);
        const errorMessage = {
          text: "Sorry, I'm having trouble right now. Please try again! If the issue persists, you can reach Zarana directly at zaranasolanki41014@gmail.com 📧",
          isUser: false,
          suggestions: [
            "Try asking again",
            "Switch to Portfolio mode",
            "Download her resume"
          ]
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (e) => {
    if (e.target.classList.contains('suggestion-chip')) {
      handleSendMessage(e.target.textContent);
    }
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <Image
              src="/dev-ed-wave.png"
              alt="Zarana Solanki"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-900 dark:text-white">Chat with Zarana</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 hidden md:block">
              AI Assistant • Powered by Google Gemini
            </p>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onSwitchMode}
            className="text-sm font-semibold text-mocha hover:underline"
          >
            Switch to Portfolio →
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <BsFillSunFill className="text-xl text-yellow-400" />
            ) : (
              <BsFillMoonStarsFill className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <BsX className="text-2xl" />
          ) : (
            <BsList className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
                  aria-label="Close menu"
                >
                  <BsX className="text-xl" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-4 gap-4">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSwitchMode();
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    Switch to Portfolio
                  </span>
                  <span className="text-mocha ml-auto">→</span>
                </button>

                <button
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  {darkMode ? (
                    <>
                      <BsFillSunFill className="text-xl text-yellow-400" />
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        Light Mode
                      </span>
                    </>
                  ) : (
                    <>
                      <BsFillMoonStarsFill className="text-xl text-gray-900 dark:text-white" />
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        Dark Mode
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Messages Container */}
      <div 
        className="flex-1 overflow-y-auto px-4 md:px-8 py-6 max-w-4xl mx-auto w-full bg-white dark:bg-gray-900"
        onClick={handleSuggestionClick}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} isUser={message.isUser} />
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 md:px-8 py-4 sticky bottom-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Zarana..."
              className="flex-1 resize-none border-2 border-gray-300 dark:border-gray-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-mocha bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[50px] max-h-[120px]"
              rows="1"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-mocha text-white p-4 rounded-2xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <AiOutlineSend className="text-xl" />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Ask about projects, experience, skills, or how to get in touch • Powered by Google Gemini 🤖
          </p>
        </div>
      </div>
    </div>
  );
}