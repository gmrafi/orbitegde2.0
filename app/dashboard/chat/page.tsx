"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import UniversalHeader from "@/components/universal-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Send, Bot, User, Satellite, Rocket, Globe, Zap, Sparkles, MessageSquare, 
  TrendingUp, Shield, Clock, Download, Trash2, Copy, ThumbsUp, ThumbsDown, 
  RefreshCw, Mic, ImageIcon, FileText, Settings, Moon, Sun, BarChart3, 
  BookOpen, Code, Share2, Star, Bookmark, History, PieChart
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  liked?: boolean
  disliked?: boolean
  bookmarked?: boolean
  category?: string
}

interface Conversation {
  id: string
  title: string
  messages: Message[]
  timestamp: Date
}

const SAMPLE_QUESTIONS = [
  "What are the current risks in LEO operations?",
  "How can I start a satellite business?",
  "What's the debris situation in Low Earth Orbit?",
  "Explain satellite constellation economics",
  "What are the best LEO business opportunities?",
  "How do I calculate satellite launch costs?",
]

const AI_FEATURES = [
  { name: "Real-time Tracking", icon: Satellite, description: "64,000+ satellites monitored" },
  { name: "Risk Analysis", icon: Shield, description: "ISO 24113 compliance" },
  { name: "Market Insights", icon: TrendingUp, description: "$447B space economy" },
  { name: "Financial Models", icon: PieChart, description: "ROI & cost analysis" },
  { name: "Orbital Mechanics", icon: Rocket, description: "SGP4 calculations" },
  { name: "Data Visualization", icon: BarChart3, description: "Interactive charts" },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Sumaiya Hoque from the OrbitEdge team. I'm here to assist you with all your space commerce needs - from satellite tracking and collision avoidance to LEO business opportunities and regulatory compliance. Whether you're managing a satellite constellation, exploring launch opportunities, or analyzing space market trends, I'm here to provide expert guidance. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
      category: "greeting"
    },
  ])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [messageCount, setMessageCount] = useState(0)
  const [totalConversations, setTotalConversations] = useState(0)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    setMessageCount(messages.length)
    setTotalConversations(conversations.length)
  }, [messages, conversations])

  const toggleLike = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, liked: !msg.liked, disliked: false }
          : msg
      )
    )
  }

  const toggleDislike = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, disliked: !msg.disliked, liked: false }
          : msg
      )
    )
  }

  const toggleBookmark = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, bookmarked: !msg.bookmarked }
          : msg
      )
    )
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Optional: Add toast notification
  }

  const exportConversation = () => {
    const conversationText = messages
      .map((msg) => `[${msg.timestamp.toLocaleString()}] ${msg.sender === "user" ? "You" : "OrbitEdge AI"}: ${msg.content}`)
      .join("\n\n")
    
    const blob = new Blob([conversationText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `orbitedge-chat-${new Date().toISOString()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearConversation = () => {
    if (confirm("Are you sure you want to clear this conversation?")) {
      setMessages([
        {
          id: Date.now().toString(),
          content: "Conversation cleared. How can I assist you today?",
          sender: "ai",
          timestamp: new Date(),
          category: "system"
        },
      ])
    }
  }

  const saveConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: `Conversation ${conversations.length + 1}`,
      messages: [...messages],
      timestamp: new Date(),
    }
    setConversations((prev) => [newConversation, ...prev])
  }

  const loadConversation = (conversationId: string) => {
    const conversation = conversations.find((c) => c.id === conversationId)
    if (conversation) {
      setMessages(conversation.messages)
      setCurrentConversationId(conversationId)
      setShowHistory(false)
    }
  }

  const startNewConversation = () => {
    saveConversation()
    setMessages([
      {
        id: Date.now().toString(),
        content: "New conversation started! What would you like to discuss?",
        sender: "ai",
        timestamp: new Date(),
        category: "greeting"
      },
    ])
    setCurrentConversationId(null)
  }

  const toggleVoiceInput = () => {
    setIsRecording(!isRecording)
    // Placeholder for voice input functionality
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setInputMessage("Voice input: Tell me about satellite constellations")
      }, 3000)
    }
  }

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Enhanced NLP with satellite safety and operational queries
    const lowerMessage = userMessage.toLowerCase()
    
    // Satellite safety queries
    if (lowerMessage.includes("safe") && (lowerMessage.includes("satellite") || lowerMessage.includes("my"))) {
      return "✅ Safety Status: All tracked satellites are operational. Nearest debris (COSMOS 1408-154) is 50.3 km away from SAT-2024-001. Current collision probability: <0.1%. Next conjunction analysis scheduled in 6 hours. Your orbital parameters are within ISO 24113 compliance standards."
    }
    
    if (lowerMessage.includes("collision") || lowerMessage.includes("risk")) {
      return "Current LEO risks include space debris collisions (27,000+ tracked objects), orbital congestion in popular altitudes (500-800km), and regulatory compliance challenges. Real-time monitoring shows 3 active collision alerts this week. Recommended: Enable AI Maneuver Autopilot for automated avoidance."
    }
    
    if (lowerMessage.includes("business") || lowerMessage.includes("start")) {
      return "Starting a satellite business requires: 1) Market analysis ($447B space economy), 2) Regulatory compliance (FCC licensing), 3) Launch partnerships (SpaceX, Rocket Lab), 4) Ground station access via our Marketplace, and 5) Insurance coverage (use our Dynamic Risk API). Consider CubeSat constellations for cost-effective entry at ~$100K per unit."
    }
    
    if (lowerMessage.includes("debris") || lowerMessage.includes("junk")) {
      return "Space debris in LEO includes 34,000+ objects >10cm, 900,000+ objects 1-10cm. High-risk zones: 800-1000km altitude. Mitigation strategies include active debris removal, collision avoidance maneuvers (Economy: $100/85% safety, Emergency: $250/99% safety), and end-of-life disposal protocols per ISO 24113 standards."
    }
    
    if (lowerMessage.includes("constellation") || lowerMessage.includes("economic")) {
      return "Satellite constellation economics depend on: Coverage requirements, Inter-satellite links, Ground infrastructure costs, Launch economies of scale, and Revenue per satellite. Starlink's model shows ~$500K revenue/satellite/year potential in mature markets. Our analytics dashboard provides detailed ROI projections for your specific use case."
    }
    
    if (lowerMessage.includes("opportunity") || lowerMessage.includes("market")) {
      return "Top LEO business opportunities: 1) IoT connectivity ($1.1T market), 2) Earth observation ($4.2B), 3) Space manufacturing ($12B by 2030), 4) Satellite servicing ($4.5B), 5) Ground station marketplace ($890M by 2028). Focus on underserved markets and emerging technologies. Check our Launch Optimizer for timing recommendations."
    }
    
    if (lowerMessage.includes("launch") || lowerMessage.includes("cost")) {
      return "Launch cost calculation: Payload mass × $/kg rate + integration fees + insurance + regulatory costs. Current rates: SpaceX Falcon 9 (~$2,700/kg), Rocket Lab Electron (~$18,000/kg). Use our Launch Window Optimizer to find optimal timing (saves 15-20% on operational costs). Consider rideshare options for <100kg payloads."
    }
    
    if (lowerMessage.includes("weather") || lowerMessage.includes("solar")) {
      return "Current space weather conditions: Kp-Index: 2.7 (Stable), Solar Flux: C1.2 (Low), No major geomagnetic storms forecast. Optimal launch windows available in next 48 hours. RF jamming alerts: 0 active zones. Ionospheric conditions favorable for communications. Check Space Weather & Defense module for real-time updates."
    }
    
    if (lowerMessage.includes("api") || lowerMessage.includes("developer")) {
      return "OrbitEdge Developer API provides access to: Real-time TLE data (64,000+ objects), Collision prediction algorithms, Ground station booking, Insurance risk scores, and Blockchain audit logs. Pricing: Academic (1,000 calls/month - Free), Startup ($99/month - 10,000 calls), Enterprise (Unlimited - Custom). Generate your API key in the Developer Portal."
    }
    
    if (lowerMessage.includes("insurance") || lowerMessage.includes("liability")) {
      return "Our Dynamic Insurance & Liability Score uses: (Debris Proximity × 0.4) + (ISO Compliance × 0.3) + (Recent Maneuvers × 0.3) = Risk Score. Current average: 94/100 (Excellent). Every maneuver is recorded in blockchain ledger with SHA-256 hash for legal compliance. Export PDF reports for stakeholders."
    }

    return "Hello! I'm Sumaiya Hoque from the OrbitEdge team. I specialize in space commerce and satellite operations. Here's how I can assist you:\n\n🛰️ Real-time Satellite Tracking & Safety Analysis\n⚠️ Collision Risk Assessment & Debris Monitoring\n🚀 Launch Window Optimization & Cost Calculations\n📊 LEO Business Intelligence & Market Insights\n⚖️ Regulatory Compliance (ISO 24113, FCC, ITU)\n💼 Ground Station Marketplace & RF Services\n🔐 Developer API Access & Integration Support\n📈 Financial Modeling & ROI Projections\n\nWhat would you like to explore today?"
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const aiResponse = await generateAIResponse(inputMessage)

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, aiMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      setIsLoading(false)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm experiencing technical difficulties. Please try again or contact support.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    }
  }

  const handleQuestionClick = (question: string) => {
    setInputMessage(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <UniversalHeader variant="dark" />
      <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-emerald-200 shadow-lg">
                    <Image 
                      src="/team/sumaiya.png" 
                      alt="Sumaiya Hoque - OrbitEdge Team AI Assistant" 
                      width={64} 
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Sumaiya Hoque
                    </h1>
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">OrbitEdge Team</Badge>
                  </div>
                  <p className="text-gray-600 font-medium">Space Commerce Expert • Satellite Operations Specialist • AI-Powered Guidance</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHistory(!showHistory)}
                  className="rounded-xl hover:bg-blue-50"
                >
                  <History className="h-4 w-4 mr-2" />
                  History
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={startNewConversation}
                  className="rounded-xl hover:bg-green-50"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  New Chat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-xl hover:bg-purple-50"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-9">
            <Card className="flex flex-col bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden" style={{height: 'calc(100vh - 180px)', minHeight: '700px'}}>
              <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100 flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Conversation
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-8" ref={scrollAreaRef}>
                  <div className="space-y-6">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {message.sender === "ai" && (
                          <div className="flex flex-col items-center gap-1">
                            <Avatar className="h-10 w-10 ring-2 ring-emerald-200 shadow-md">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <Image 
                                  src="/team/sumaiya.png" 
                                  alt="Sumaiya Hoque - OrbitEdge Team" 
                                  width={40} 
                                  height={40}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </Avatar>
                            <span className="text-[10px] text-gray-500 font-medium">Sumaiya</span>
                          </div>
                        )}
                        <div className="flex flex-col gap-2 max-w-[90%]">
                          <div
                            className={`rounded-2xl p-5 shadow-lg transition-all hover:shadow-xl ${
                              message.sender === "user"
                                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                                : "bg-white border border-gray-100"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <p className={`text-base leading-relaxed flex-1 ${message.sender === "ai" ? "text-gray-700" : ""}`}>
                                {message.content}
                              </p>
                              {message.category && (
                                <Badge variant="secondary" className="text-xs shrink-0">
                                  {message.category}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Clock className="h-3 w-3 opacity-60" />
                              <p className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</p>
                            </div>
                          </div>
                          
                          {/* Message Actions */}
                          {message.sender === "ai" && (
                            <div className="flex items-center gap-2 px-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 hover:bg-blue-50"
                                onClick={() => toggleLike(message.id)}
                              >
                                <ThumbsUp className={`h-3.5 w-3.5 ${message.liked ? "fill-blue-500 text-blue-500" : "text-gray-400"}`} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 hover:bg-red-50"
                                onClick={() => toggleDislike(message.id)}
                              >
                                <ThumbsDown className={`h-3.5 w-3.5 ${message.disliked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 hover:bg-yellow-50"
                                onClick={() => toggleBookmark(message.id)}
                              >
                                <Bookmark className={`h-3.5 w-3.5 ${message.bookmarked ? "fill-yellow-500 text-yellow-500" : "text-gray-400"}`} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 hover:bg-green-50"
                                onClick={() => copyToClipboard(message.content)}
                              >
                                <Copy className="h-3.5 w-3.5 text-gray-400" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 hover:bg-purple-50"
                              >
                                <Share2 className="h-3.5 w-3.5 text-gray-400" />
                              </Button>
                            </div>
                          )}
                        </div>
                        {message.sender === "user" && (
                          <Avatar className="h-10 w-10 ring-2 ring-purple-100">
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                              <User className="h-5 w-5" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex flex-col items-center gap-1">
                          <Avatar className="h-10 w-10 ring-2 ring-emerald-200 shadow-md">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <Image 
                                src="/team/sumaiya.png" 
                                alt="Sumaiya Hoque - OrbitEdge Team" 
                                width={40} 
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Avatar>
                          <span className="text-[10px] text-gray-500 font-medium">Sumaiya</span>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-lg">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
                            <div
                              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-t bg-gradient-to-r from-blue-50 to-purple-50 p-6 flex-shrink-0">
                  {/* Toolbar */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={exportConversation}
                      className="h-8 text-xs rounded-lg hover:bg-blue-50"
                    >
                      <Download className="h-3.5 w-3.5 mr-1.5" />
                      Export
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearConversation}
                      className="h-8 text-xs rounded-lg hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                      Clear
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={saveConversation}
                      className="h-8 text-xs rounded-lg hover:bg-green-50"
                    >
                      <Bookmark className="h-3.5 w-3.5 mr-1.5" />
                      Save
                    </Button>
                    <div className="flex-1"></div>
                    <Badge variant="secondary" className="text-xs">
                      {messages.length} messages
                    </Badge>
                  </div>

                  {/* Input Area */}
                  <div className="flex gap-3">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleVoiceInput}
                        className={`h-12 w-12 p-0 rounded-xl ${isRecording ? "bg-red-50 border-red-300" : ""}`}
                      >
                        <Mic className={`h-5 w-5 ${isRecording ? "text-red-500 animate-pulse" : "text-gray-600"}`} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-12 w-12 p-0 rounded-xl"
                        title="Attach Image"
                      >
                        <ImageIcon className="h-5 w-5 text-gray-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-12 w-12 p-0 rounded-xl"
                        title="Attach File"
                      >
                        <FileText className="h-5 w-5 text-gray-600" />
                      </Button>
                    </div>
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about satellite tracking, collision risks, LEO opportunities, launch costs..."
                      className="flex-1 bg-white border-2 border-blue-100 focus:border-blue-400 rounded-xl h-12 px-4 shadow-sm"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl h-12 px-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Important Notice */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Press Enter to send • AI-powered space commerce assistant</p>
                    <p className="text-xs text-orange-600 font-medium">⚠️ Important: AI Prototype</p>
                    <p className="text-xs text-gray-600 mt-1">
                      For mission-critical operations, satellite maneuvers, or regulatory compliance, always verify with aerospace professionals and official sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100 text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-emerald-200 shadow-lg">
                      <Image 
                        src="/team/sumaiya.png" 
                        alt="Sumaiya Hoque" 
                        width={96} 
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Sumaiya Hoque</CardTitle>
                <p className="text-sm text-emerald-600 font-medium mt-1">OrbitEdge AI Assistant</p>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs mt-2 inline-block">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Online
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">About Sumaiya</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      I'm your dedicated AI assistant from the OrbitEdge team, specializing in space commerce, satellite operations, and Low Earth Orbit (LEO) business intelligence. With expertise in real-time tracking, collision avoidance, and regulatory compliance, I'm here to guide you through the complexities of space operations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">How I Can Help</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Satellite className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Satellite safety checks & collision risk analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Rocket className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Launch window optimization & cost calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>LEO market insights & business opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Regulatory compliance & ISO 24113 standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>Ground station marketplace & RF services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-orange-600 text-sm mb-2 flex items-center gap-1">
                      <span className="text-base">⚠️</span> Important Disclaimers
                    </h3>
                    <ul className="space-y-2 text-xs text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                        <span>This is an AI assistant and does not represent the real Sumaiya Hoque or provide official OrbitEdge statements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                        <span>For mission-critical satellite operations, collision avoidance decisions, or legal compliance matters, always consult qualified aerospace professionals.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                        <span>This AI system is a prototype for informational and guidance purposes only. Verify all critical data independently.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                        <span>Satellite tracking data, collision probabilities, and market analysis should be cross-referenced with official sources (USSPACECOM, ESA, etc.).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-blue-600 text-sm mb-3 flex items-center gap-1">
                      <Sparkles className="h-4 w-4" /> Quick Start
                    </h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-xs h-auto py-2.5 hover:bg-blue-50 border-blue-200"
                        onClick={() => handleQuestionClick("Is my satellite safe?")}
                      >
                        <Satellite className="h-3.5 w-3.5 mr-2 text-blue-600" />
                        Check Satellite Safety
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-xs h-auto py-2.5 hover:bg-purple-50 border-purple-200"
                        onClick={() => handleQuestionClick("What are the collision risks?")}
                      >
                        <Shield className="h-3.5 w-3.5 mr-2 text-purple-600" />
                        Analyze Collision Risks
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-xs h-auto py-2.5 hover:bg-green-50 border-green-200"
                        onClick={() => handleQuestionClick("Tell me about LEO business opportunities")}
                      >
                        <TrendingUp className="h-3.5 w-3.5 mr-2 text-green-600" />
                        Explore LEO Opportunities
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-xs h-auto py-2.5 hover:bg-orange-50 border-orange-200"
                        onClick={() => handleQuestionClick("How do I calculate launch costs?")}
                      >
                        <Rocket className="h-3.5 w-3.5 mr-2 text-orange-600" />
                        Calculate Launch Costs
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-xs text-gray-500 italic">Always verify critical information with official sources</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversation History */}
            {showHistory && (
              <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                        <History className="h-4 w-4 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        History
                      </span>
                    </div>
                    <Badge variant="secondary">{conversations.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 max-h-[300px] overflow-y-auto">
                  {conversations.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No saved conversations yet</p>
                  ) : (
                    <div className="space-y-2">
                      {conversations.map((conv) => (
                        <Button
                          key={conv.id}
                          variant="outline"
                          size="sm"
                          className="w-full justify-between h-auto p-3 text-left hover:bg-purple-50"
                          onClick={() => loadConversation(conv.id)}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{conv.title}</p>
                            <p className="text-xs text-gray-500">{conv.timestamp.toLocaleDateString()}</p>
                          </div>
                          <MessageSquare className="h-4 w-4 text-purple-500 shrink-0" />
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            {/* Quick Questions */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-orange-100">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="p-1.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Quick Start
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {SAMPLE_QUESTIONS.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3 text-xs bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-100 hover:to-purple-100 border-gray-200 hover:border-blue-300 transition-all hover:shadow-md group"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <Sparkles className="h-3 w-3 mr-2 text-blue-500 group-hover:text-purple-500 transition-colors" />
                    <span className="group-hover:text-blue-700">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <Rocket className="h-4 w-4 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      AI Capabilities
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-xs">6 Features</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                {AI_FEATURES.map((feature, index) => {
                  const Icon = feature.icon
                  const colors = [
                    { bg: "from-blue-50 to-purple-50", border: "border-blue-100", icon: "from-blue-500 to-blue-600" },
                    { bg: "from-green-50 to-emerald-50", border: "border-green-100", icon: "from-green-500 to-emerald-600" },
                    { bg: "from-purple-50 to-pink-50", border: "border-purple-100", icon: "from-purple-500 to-pink-600" },
                    { bg: "from-yellow-50 to-orange-50", border: "border-yellow-100", icon: "from-yellow-500 to-orange-600" },
                    { bg: "from-red-50 to-rose-50", border: "border-red-100", icon: "from-red-500 to-rose-600" },
                    { bg: "from-cyan-50 to-blue-50", border: "border-cyan-100", icon: "from-cyan-500 to-blue-600" },
                  ]
                  const color = colors[index % colors.length]
                  
                  return (
                    <div key={index} className={`flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r ${color.bg} border ${color.border} hover:shadow-md transition-shadow cursor-pointer`}>
                      <div className={`p-2 bg-gradient-to-br ${color.icon} rounded-lg`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-800">{feature.name}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{feature.description}</p>
                      </div>
                      <Star className="h-4 w-4 text-yellow-500 shrink-0" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl overflow-hidden border-0">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Live Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm font-medium">Messages</span>
                  </div>
                  <span className="text-2xl font-bold">{messageCount}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4" />
                    <span className="text-sm font-medium">Conversations</span>
                  </div>
                  <span className="text-2xl font-bold">{totalConversations}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">Avg Response</span>
                  </div>
                  <span className="text-2xl font-bold">~1s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Accuracy</span>
                  </div>
                  <span className="text-2xl font-bold">98.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span className="text-sm font-medium">Bookmarked</span>
                  </div>
                  <span className="text-2xl font-bold">{messages.filter(m => m.bookmarked).length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="p-1.5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Knowledge Base
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 hover:bg-green-50">
                  <Code className="h-4 w-4 mr-2 text-green-600" />
                  API Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 hover:bg-blue-50">
                  <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                  Market Reports
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 hover:bg-purple-50">
                  <Shield className="h-4 w-4 mr-2 text-purple-600" />
                  Compliance Guides
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 hover:bg-orange-50">
                  <Rocket className="h-4 w-4 mr-2 text-orange-600" />
                  Launch Calculators
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
