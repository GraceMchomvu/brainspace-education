import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, BookOpen, Search, HelpCircle } from 'lucide-react'

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hi! I\'m your BrainSpace AI assistant. How can I help you study today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { text: 'Find study materials', icon: BookOpen },
    { text: 'How to navigate?', icon: Search },
    { text: 'Get help', icon: HelpCircle },
  ]

  const getAIResponse = async (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Try to call AI API first (using OpenAI's free tier or other service)
    try {
      // You can replace this with actual AI API call
      // For now, using enhanced pattern matching with AI-like responses
      return await getSmartAIResponse(lowerMessage, userMessage)
    } catch (error) {
      console.error('AI Error:', error)
      return getFallbackResponse(lowerMessage, userMessage)
    }
  }

  const getSmartAIResponse = async (lowerMessage, originalMessage) => {
    // Enhanced AI-like pattern recognition
    // Navigation help
    if (lowerMessage.includes('navigate') || lowerMessage.includes('how to') || lowerMessage.includes('where')) {
      return 'To navigate BrainSpace: 1) Choose NECTA or Cambridge, 2) Select your year level, 3) Pick a subject, 4) Access notes, videos, or past papers. What subject are you interested in?'
    }
    
    // Subject help
    if (lowerMessage.includes('necta') || lowerMessage.includes('cambridge')) {
      return `The main difference: NECTA is Tanzania's national curriculum (Forms 3-6), while Cambridge is international (IGCSE and A-Levels). Both cover subjects like Physics, Chemistry, Geography, Business, Accounting, Computer Science, and ICT. Which curriculum are you following?`
    }
    
    // Premium features
    if (lowerMessage.includes('premium') || lowerMessage.includes('upgrade')) {
      return 'Premium gives you access to all video lessons and past papers! Free users can access study notes. Would you like to upgrade to premium?'
    }
    
    // Study tips
    if (lowerMessage.includes('study') || lowerMessage.includes('how to study') || lowerMessage.includes('tips')) {
      return 'Great question! Here are proven study tips: 1) Create a study schedule, 2) Review past papers regularly, 3) Take practice tests, 4) Watch video lessons for visual learning, 5) Form study groups. What subject are you studying?'
    }
    
    // Subject-specific guidance with enhanced AI responses
    if (lowerMessage.includes('physics')) {
      return 'Physics tips: Practice problem-solving daily, understand formulas deeply (don\'t just memorize), watch video demonstrations, and work through past papers. I can direct you to Physics resources - which year are you in?'
    }
    
    if (lowerMessage.includes('chemistry')) {
      return 'Chemistry advice: Master the periodic table, practice balancing equations, understand reaction mechanisms, and use visual aids for molecular structures. Need help finding chemistry notes?'
    }
    
    if (lowerMessage.includes('mathematics') || lowerMessage.includes('math')) {
      return 'Math success tips: Practice daily, work from easier to harder problems, understand concepts before memorizing, review mistakes, and track your progress. Which math topics do you find challenging?'
    }
    
    if (lowerMessage.includes('geography')) {
      return 'Geography tips: Study maps regularly, connect physical features to climate patterns, use diagrams for processes, review case studies, and relate theory to real-world examples. Ready to explore geography resources?'
    }
    
    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('confused')) {
      return 'I\'m here to help! You can ask me about: navigating the site, study tips, subject guidance, finding resources, understanding premium features, or any study-related questions. What do you need?'
    }
    
    // Greeting
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return 'Hello! Ready to ace your studies? I can help you find materials, give study tips, or answer questions. What would you like to know?'
    }
    
    // AI-powered contextual response
    return getContextualResponse(lowerMessage, originalMessage)
  }

  const getContextualResponse = (lowerMessage, originalMessage) => {
    // Check for educational queries
    if (lowerMessage.includes('what') || lowerMessage.includes('explain') || lowerMessage.includes('tell me')) {
      return `Based on your question "${originalMessage}", I'd be happy to help! Could you tell me which subject or topic you're studying? I can provide detailed explanations for NECTA and Cambridge curricula.`
    }
    
    // Check for resource queries
    if (lowerMessage.includes('find') || lowerMessage.includes('need') || lowerMessage.includes('looking for')) {
      return `Let me help you find what you need! Try searching our subjects: Physics, Chemistry, Geography, Computer Science, ICT, Accounting, Business, or Swahili. Which one interests you?`
    }
    
    // Check for exam queries
    if (lowerMessage.includes('exam') || lowerMessage.includes('test') || lowerMessage.includes('prepare')) {
      return `Great! Exam preparation is key. I recommend: 1) Review past papers (available in Premium), 2) Create a study schedule, 3) Focus on weak areas, 4) Practice regularly. Which subject are you preparing for?`
    }
    
    // Default AI response
    return `I understand you're asking about "${originalMessage}". As your AI study assistant, I can help with: subject guidance, study tips, finding resources, navigation help, and more. Could you be more specific about what you need?`
  }

  const getFallbackResponse = (lowerMessage, userMessage) => {
    return `I'm having trouble processing that right now. Let me try a different approach - could you rephrase your question? I'm here to help with study materials, subject guidance, and navigation!`
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')

    // Add thinking indicator
    const thinkingMessage = {
      id: messages.length + 2,
      type: 'bot',
      content: '🤔 Let me think...',
      timestamp: new Date(),
      isThinking: true
    }
    setMessages(prev => [...prev, thinkingMessage])

    // Get AI response
    setTimeout(async () => {
      const aiResponse = await getAIResponse(currentInput)
      
      // Remove thinking message and add real response
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== thinkingMessage.id)
        return [...filtered, {
          id: thinkingMessage.id,
          type: 'bot',
          content: aiResponse,
          timestamp: new Date()
        }]
      })
    }, 1200)
  }

  const handleQuickAction = (action) => {
    setInput(action)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 mr-3">
                <Bot className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold flex items-center">
                  AI Study Assistant
                  <span className="ml-2 text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">AI POWERED</span>
                </h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user'
                        ? 'bg-primary-600 ml-2'
                        : 'bg-gradient-to-r from-primary-600 to-secondary-600 mr-2'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User size={18} className="text-white" />
                    ) : (
                      <Bot size={18} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 pt-2 pb-2 border-t border-gray-200 bg-white">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.text)}
                    className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition"
                  >
                    <action.icon size={14} className="mr-1" />
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about studying..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-2 rounded-full hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AIAssistant
