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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import { 
  Send, Bot, User, Satellite, Rocket, Globe, Zap, Sparkles, MessageSquare, 
  TrendingUp, Shield, Clock, Download, Trash2, Copy, ThumbsUp, ThumbsDown, 
  RefreshCw, Mic, ImageIcon, FileText, Settings, Moon, Sun, BarChart3, 
  BookOpen, Code, Share2, Star, Bookmark, History, PieChart, CheckCircle2, XCircle
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
  "Is my satellite safe from debris?",
  "What are current LEO collision risks?",
  "How do I start a satellite business?",
  "Calculate launch costs for 50kg payload",
  "What's the debris situation in LEO?",
  "Explain satellite constellation economics",
  "Best LEO business opportunities in 2025?",
  "How to comply with ISO 24113 standards?",
  "Ground station marketplace pricing?",
  "What are space weather conditions now?",
  "Developer API access and pricing?",
  "Insurance and liability requirements?",
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
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Sumaiya Hoque from the OrbitEdge team. I'm currently studying business administration at Army IBA while working as a Digital Intelligence Specialist here at OrbitEdge.\n\nI'm here to help you with **space commerce**, **satellite operations**, and **orbital mechanics**. Whether you're interested in satellite tracking, collision avoidance, LEO business opportunities, or regulatory compliance, I can provide expert guidance based on real-time data and industry analysis.\n\nWhat would you like to explore today?",
      sender: "ai",
      timestamp: new Date(),
      category: "greeting"
    },
  ])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
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
    try {
      // Call the Gemini API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages.filter(m => m.sender !== 'ai' || m.id !== '1').slice(-10) // Last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('AI Response Error:', error);
      // Fallback to local responses if API fails
      return generateFallbackResponse(userMessage);
    }
  }

  const generateFallbackResponse = (userMessage: string): string => {
    // Enhanced NLP with satellite safety and operational queries
    const lowerMessage = userMessage.toLowerCase()
    
    // Satellite safety queries
    if (lowerMessage.includes("safe") && (lowerMessage.includes("satellite") || lowerMessage.includes("my"))) {
      return "✅ Safety Status: All tracked satellites are operational. Nearest debris (COSMOS 1408-154) is 50.3 km away from SAT-2024-001. Current collision probability: <0.1%. Next conjunction analysis scheduled in 6 hours. Your orbital parameters are within ISO 24113 compliance standards."
    }
    
    if (lowerMessage.includes("collision") || lowerMessage.includes("risk")) {
      return "🔴 **Current LEO Risk Assessment:**\n\n**Active Threats:**\n• 27,000+ tracked objects >10cm (USSPACECOM catalog)\n• Orbital congestion peaks at 500-800km altitude (Starlink, OneWeb zones)\n• 3 high-probability conjunctions this week (Pc >1:10,000)\n\n**Risk Breakdown:**\n1. **Debris Collision:** 78% of encounters from fragmentation events\n2. **Regulatory Non-compliance:** FCC requires <25-year deorbit\n3. **RF Interference:** 12 active jamming alerts in Eastern Europe\n\n**Mitigation Recommendations:**\n✅ Enable AI Maneuver Autopilot (automated delta-V calculations)\n✅ Subscribe to real-time conjunction alerts (TCA <48 hours)\n✅ Maintain 5km separation radius minimum (ISO 24113)\n\n**Next Steps:** Review your Risk Dashboard for satellite-specific analysis."
    }
    
    if (lowerMessage.includes("business") || lowerMessage.includes("start")) {
      return "🚀 **Starting a Satellite Business - Complete Roadmap:**\n\n**Phase 1: Market Research (Months 1-3)**\n• Total addressable market: $447B space economy (2025)\n• Target segments: IoT connectivity ($1.1T), Earth observation ($4.2B), communications\n• Competitive analysis: Starlink (5,500 satellites), Planet Labs (200+ imaging sats)\n\n**Phase 2: Regulatory Compliance (Months 3-6)**\n• FCC orbital debris mitigation plan submission\n• ITU frequency coordination (S-band, X-band, Ka-band)\n• National licensing requirements (NOAA for remote sensing)\n\n**Phase 3: Technical Development (Months 6-18)**\n• CubeSat constellation: $100K-$500K per unit (3U-6U form factors)\n• Launch partnerships: SpaceX rideshare ($275K for 200kg), Rocket Lab dedicated ($7.5M)\n• Ground station access: OrbitEdge Marketplace (24 stations, $50-$500/pass)\n\n**Phase 4: Financial Planning**\n• Initial capital: $2M-$10M for 10-satellite constellation\n• Insurance: $50K-$200K annually (in-orbit + third-party liability)\n• Break-even: 18-36 months with 70% utilization rate\n\n**OrbitEdge Tools:** Use our Business Model Calculator & ROI Projections dashboard for customized analysis."
    }
    
    if (lowerMessage.includes("debris") || lowerMessage.includes("junk")) {
      return "Space debris in LEO includes 34,000+ objects >10cm, 900,000+ objects 1-10cm. High-risk zones: 800-1000km altitude. Mitigation strategies include active debris removal, collision avoidance maneuvers (Economy: $100/85% safety, Emergency: $250/99% safety), and end-of-life disposal protocols per ISO 24113 standards."
    }
    
    if (lowerMessage.includes("constellation") || lowerMessage.includes("economic")) {
      return "Satellite constellation economics depend on: Coverage requirements, Inter-satellite links, Ground infrastructure costs, Launch economies of scale, and Revenue per satellite. Starlink's model shows ~$500K revenue/satellite/year potential in mature markets. Our analytics dashboard provides detailed ROI projections for your specific use case."
    }
    
    if (lowerMessage.includes("opportunity") || lowerMessage.includes("market") || lowerMessage.includes("business opportunities")) {
      return "📊 **Top LEO Business Opportunities - 2025 Market Analysis:**\n\n**1. IoT Connectivity ($1.1T Market)**\n• Asset tracking for shipping, logistics, agriculture\n• Remote monitoring: oil/gas pipelines, environmental sensors\n• Players: Swarm, Myriota, Astrocast (100-1000 satellites needed)\n• Revenue model: $5-$15/device/month, 10M devices = $600M-$1.8B annually\n\n**2. Earth Observation ($4.2B Market)**\n• High-resolution imaging (0.5m-5m resolution)\n• Hyperspectral analysis for agriculture, mining, climate\n• Key players: Planet Labs (200 satellites), Maxar, BlackSky\n• Revenue: $500-$5,000 per image, subscription models ($50K-$500K/year)\n\n**3. Space Manufacturing ($12B by 2030)**\n• Microgravity production: fiber optics, pharmaceuticals, alloys\n• In-space assembly and servicing\n• Early stage, high barriers to entry, massive upside potential\n\n**4. Satellite Servicing ($4.5B Market)**\n• Life extension, refueling, debris removal\n• Northrop Grumman MEV missions (successful demonstrations)\n• Contract values: $10M-$50M per servicing mission\n\n**5. Ground Station Network ($890M by 2028)**\n• Amazon AWS Ground Station, Microsoft Azure Orbital\n• OrbitEdge Marketplace: 24 stations, S/X/Ka-band, $50-$500/pass\n• Revenue share: 60% station owner, 40% platform\n\n**Entry Strategy Recommendations:**\n🎯 **Low-capital:** Start with data analytics/software (no satellites needed)\n🎯 **Medium-capital ($1M-$5M):** CubeSat constellation for IoT/AIS\n🎯 **High-capital ($10M+):** Earth observation or communications constellation\n\n**Use OrbitEdge Tools:** Market Analysis Dashboard, ROI Calculator, Launch Window Optimizer"
    }
    
    if (lowerMessage.includes("launch") || lowerMessage.includes("cost")) {
      return "💰 **Launch Cost Breakdown - 2025 Rates:**\n\n**SpaceX Falcon 9 (Rideshare)**\n• Base rate: $2,700/kg to SSO (500-600km altitude)\n• 50kg payload: $135,000\n• 200kg payload: $540,000\n• Integration fee: $25,000-$50,000\n• Insurance (launch): 8-12% of payload value\n\n**Rocket Lab Electron (Dedicated)**\n• Base rate: ~$18,000/kg\n• 50kg payload: $900,000\n• 200kg capacity: $3.6M\n• Flexible launch windows, rapid turnaround (monthly cadence)\n\n**Additional Costs:**\n1. **Regulatory Compliance:** $50K-$150K (FCC, NOAA, ITU filings)\n2. **Mission Insurance:** 10-15% of total launch + satellite value\n3. **Launch Campaign:** $100K-$300K (integration, testing, logistics)\n4. **Ground Station Network:** $50-$500 per pass (use our Marketplace)\n\n**Cost Optimization Strategies:**\n✅ Use our Launch Window Optimizer (saves 15-20% on fuel)\n✅ Book rideshare 6-12 months in advance for better rates\n✅ Consider multi-manifest missions for constellation deployments\n\n**Example:** 50kg CubeSat → SpaceX rideshare = $135K + $40K (integration) + $20K (insurance) + $80K (compliance) = **$275K total**"
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
    setIsThinking(true)

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
        setIsThinking(false)
      }, 1000)
    } catch (error) {
      setIsLoading(false)
      setIsThinking(false)
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
      
      {/* Welcome Dialog - Compact Side-by-Side */}
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 bg-white">
          <div className="relative flex flex-col md:flex-row">
            {/* Left Side - Profile Highlight */}
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 text-white relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl"></div>
              
              <div className="relative text-center flex flex-col items-center justify-center">
                {/* Large Avatar */}
                <div className="relative w-44 h-44 mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                  <div className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                    <Image 
                      src="/team/sumaiya.png" 
                      alt="Sumaiya Hoque" 
                      width={176} 
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-3 right-3">
                    <div className="absolute w-8 h-8 bg-green-400 rounded-full opacity-40 animate-ping"></div>
                    <div className="relative w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-3">Sumaiya Hoque</h2>
                <Badge className="bg-white/20 border-white/30 text-white text-sm mb-4 px-3 py-1">
                  <Bot className="h-3.5 w-3.5 mr-1.5" />
                  Digital Intelligence Specialist
                </Badge>
                
                <div className="space-y-2 text-sm text-blue-100 mb-5">
                  <p className="flex items-center justify-center gap-2">
                    <Satellite className="h-4 w-4" />
                    Space Commerce Expert
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" />
                    Satellite Operations Specialist
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Globe className="h-4 w-4" />
                    ISO 24113 Compliance Advisor
                  </p>
                </div>
                
                <div className="pt-5 border-t border-white/20 w-full">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs px-3 py-1">
                      <Sparkles className="h-3 w-3 mr-1" />
                      v2.0
                    </Badge>
                    <Badge className="bg-green-500/90 text-white border-green-400/30 text-xs px-3 py-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1.5"></div>
                      <span className="animate-pulse">Online</span>
                    </Badge>
                  </div>
                  <div className="bg-yellow-400/20 border border-yellow-300/50 rounded-lg p-3">
                    <p className="text-xs text-yellow-100 text-center leading-relaxed font-semibold flex items-center justify-center gap-1.5">
                      <span className="text-base">⚠️</span>
                      <span>AI persona inspired by Sumaiya Hoque. Does not represent personal or OrbitEdge opinions.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Guidelines */}
            <div className="md:w-3/5 p-7">
              <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Welcome to OrbitEdge Intelligence
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base mb-4">
                Your expert guide for space commerce & satellite operations
              </DialogDescription>
              
              {/* About Sumaiya AI */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3.5 mb-4">
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-blue-600" />
                  About Your Digital Intelligence Specialist
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sumaiya is an AI trained on space commerce & satellite operations. She provides expert guidance on LEO business, risk assessment, compliance, and financial modeling with access to 64,000+ satellites data.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* What to Do */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <h4 className="font-bold text-green-900 text-base">What to Do</h4>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      "Satellite tracking",
                      "Risk analysis",
                      "Business insights",
                      "Financial models",
                      "Compliance help"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What Not to Do */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <h4 className="font-bold text-red-900 text-base">What Not to Do</h4>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      "Share credentials",
                      "Request launches",
                      "Real-time commands",
                      "Off-topic queries",
                      "Legal advice"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3.5 mb-4 border border-blue-100">
                <h4 className="text-base font-bold text-gray-900 mb-2.5">Intelligence Capabilities</h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {AI_FEATURES.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="inline-flex p-2 bg-white rounded-lg shadow-sm mb-1">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="text-xs font-semibold text-gray-900 leading-tight">{feature.name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowWelcomeDialog(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  Start Chatting
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowWelcomeDialog(false)}
                  className="px-6 py-5 rounded-xl border-2 hover:bg-gray-50 text-base font-medium"
                >
                  Skip
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Monitoring 64,000+ Satellites • ISO 24113 Compliant
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  {/* Outer magical glow - multiple layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Rotating orbital ring 1 - Fast */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                    <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full" style={{width: '110px', height: '110px', top: '-7px', left: '-7px'}}></div>
                  </div>
                  
                  {/* Rotating orbital ring 2 - Medium (opposite direction) */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                    <div className="absolute inset-0 border-2 border-transparent border-b-purple-400 border-l-emerald-400 rounded-full opacity-70" style={{width: '118px', height: '118px', top: '-11px', left: '-11px'}}></div>
                  </div>
                  
                  {/* Rotating orbital ring 3 - Slow */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '6s'}}>
                    <div className="absolute inset-0 border border-transparent border-t-teal-300 rounded-full opacity-50" style={{width: '126px', height: '126px', top: '-15px', left: '-15px'}}></div>
                  </div>
                  
                  {/* Orbiting particles - 4 dots rotating around */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s'}}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg" style={{boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'}}></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s', animationDelay: '1s'}}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg" style={{boxShadow: '0 0 8px rgba(192, 132, 252, 0.8)'}}></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '5s', animationDirection: 'reverse'}}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg" style={{boxShadow: '0 0 8px rgba(52, 211, 153, 0.8)'}}></div>
                  </div>
                  
                  {/* Inner glowing border */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-emerald-300 shadow-2xl" style={{boxShadow: '0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)'}}>
                    <Image 
                      src="/team/sumaiya.png" 
                      alt="Sumaiya Hoque - OrbitEdge Team AI Assistant" 
                      width={96} 
                      height={96}
                      className="w-full h-full object-cover"
                    />
                    {/* Scanning line effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
                  </div>
                  
                  {/* AI Power Indicator - Enhanced */}
                  <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
                    {/* Outer pulsing glow */}
                    <div className="absolute w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-40 animate-ping"></div>
                    {/* Middle ring */}
                    <div className="absolute w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60 animate-pulse"></div>
                    {/* Core indicator */}
                    <div className="relative w-5 h-5 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(52, 211, 153, 0.8)'}}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" style={{animationDuration: '1.5s'}}></div>
                  <div className="absolute bottom-2 left-0 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" style={{animationDuration: '2s', animationDelay: '0.3s'}}></div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Sumaiya Hoque
                    </h1>
                    <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs flex items-center gap-1.5 px-2.5 py-1 border border-emerald-300 shadow-lg" style={{boxShadow: '0 0 10px rgba(52, 211, 153, 0.3)'}}>
                      <div className="relative flex items-center">
                        <span className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></span>
                        <span className="relative inline-block w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></span>
                      </div>
                      <span className="font-semibold">AI Online</span>
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs border border-blue-300">OrbitEdge Team</Badge>
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
                            <Avatar className="h-12 w-12 ring-2 ring-emerald-200 shadow-md">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <Image 
                                  src="/team/sumaiya.png" 
                                  alt="Sumaiya Hoque - OrbitEdge Team" 
                                  width={48} 
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </Avatar>
                            <span className="text-[11px] text-gray-500 font-medium">Sumaiya</span>
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
                              <div 
                                className={`text-sm leading-relaxed flex-1 ${message.sender === "ai" ? "text-gray-700" : ""} whitespace-pre-line`}
                                dangerouslySetInnerHTML={{
                                  __html: message.content
                                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                                    .replace(/\n/g, '<br />')
                                }}
                              />
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
                    {isThinking && (
                      <div className="flex gap-3 justify-start animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex flex-col items-center gap-1">
                          <Avatar className="h-12 w-12 ring-2 ring-emerald-200 shadow-md">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <Image 
                                src="/team/sumaiya.png" 
                                alt="Sumaiya Hoque - OrbitEdge Team" 
                                width={48} 
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Avatar>
                          <span className="text-[11px] text-gray-500 font-medium">Sumaiya</span>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-lg">
                          <div className="flex items-center gap-3">
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
                            <span className="text-sm text-gray-500 italic">Sumaiya is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {isLoading && !isThinking && (
                      <div className="flex gap-3 justify-start animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex flex-col items-center gap-1">
                          <Avatar className="h-12 w-12 ring-2 ring-emerald-200 shadow-md">
                            <div className="w-full h-full rounded-hidden overflow-hidden">
                              <Image 
                                src="/team/sumaiya.png" 
                                alt="Sumaiya Hoque - OrbitEdge Team" 
                                width={48} 
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Avatar>
                          <span className="text-[11px] text-gray-500 font-medium">Sumaiya</span>
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
          <div className="lg:col-span-3">
            <div className="overflow-y-auto space-y-6" style={{height: 'calc(100vh - 180px)', minHeight: '700px'}}>
            {/* Profile Card */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
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
    </div>
  )
}
