"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Satellite, 
  Shield, 
  Globe, 
  Zap, 
  Radio, 
  Lock, 
  TrendingUp, 
  Cloud, 
  Code, 
  AlertTriangle,
  Activity,
  DollarSign,
  Users
} from "lucide-react"
import Link from "next/link"
import UniversalHeader from "@/components/universal-header"

export default function NewDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <UniversalHeader variant="dark" />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">OrbitEdge Command Center</h1>
              <p className="text-gray-400">AI-Powered Space Traffic Management & Commerce Platform</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                All Systems Operational
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Satellites</p>
                  <p className="text-3xl font-bold text-white">127</p>
                  <p className="text-xs text-green-400 mt-1">+12 this month</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Satellite className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Alerts</p>
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-xs text-red-400 mt-1">2 high priority</p>
                </div>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Safety Score</p>
                  <p className="text-3xl font-bold text-white">94/100</p>
                  <p className="text-xs text-emerald-400 mt-1">Excellent rating</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">API Calls</p>
                  <p className="text-3xl font-bold text-white">8.4K</p>
                  <p className="text-xs text-purple-400 mt-1">1.6K remaining</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Modules - Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Module A: AI Maneuver Autopilot */}
          <Link href="/dashboard" className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border-orange-500/30 backdrop-blur-sm hover:border-orange-500/50 transition-all h-full group cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-400" />
                    AI Maneuver Autopilot
                  </CardTitle>
                  <Badge className="bg-orange-500 text-white">ACTIVE</Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Automated collision avoidance with cost optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Current Threat</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">HIGH RISK</Badge>
                    </div>
                    <p className="text-white font-semibold mb-1">COSMOS 1408-154</p>
                    <p className="text-sm text-gray-400">Distance: 2.3 km • Velocity: 7.6 km/s</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Economy Mode</p>
                      <p className="text-lg font-bold text-white">$100</p>
                      <p className="text-xs text-green-400">85% risk reduction</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Emergency Mode</p>
                      <p className="text-lg font-bold text-white">$250</p>
                      <p className="text-xs text-blue-400">99% risk reduction</p>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    View Maneuver Options →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Module C: Space Weather & Defense */}
          <Link href="/dashboard/weather">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all h-full group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                  Space Weather
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Real-time solar activity monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Solar Flare Activity</span>
                      <Badge className="bg-green-500/20 text-green-400">NORMAL</Badge>
                    </div>
                    <div className="h-16 flex items-end justify-between gap-1">
                      {[3, 5, 4, 7, 6, 8, 7, 5, 4, 3, 2, 4].map((height, i) => (
                        <div key={i} className="flex-1 bg-cyan-500/30 rounded-t" style={{ height: `${height * 8}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Kp-Index</span>
                      <span className="text-white font-semibold">2.7</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Geomagnetic Storm</span>
                      <span className="text-green-400 font-semibold">None</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">X-Ray Flux</span>
                      <span className="text-white font-semibold">C1.2</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Secondary Modules Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Module B: Ground Station Marketplace */}
          <Link href="/dashboard/marketplace">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-all group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Radio className="w-5 h-5 text-green-400" />
                  Ground Stations
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Book downlink slots worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Available Stations</span>
                    <span className="text-white font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Next Booking</span>
                    <span className="text-white font-semibold text-sm">14:30 UTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Revenue MTD</span>
                    <span className="text-green-400 font-bold">$2,450</span>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white mt-2">
                    Browse Marketplace →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Module D: Insurance & Liability */}
          <Link href="/dashboard/analytics">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  Insurance Score
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Dynamic risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-8 border-purple-500/20"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-8 border-purple-500 border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="relative z-10 text-center">
                      <p className="text-4xl font-bold text-white">94</p>
                      <p className="text-xs text-gray-400">Safety Score</p>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Generate API Key →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Module: Blockchain Audit */}
          <Link href="/dashboard/security">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-500/50 transition-all group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  Blockchain Ledger
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Immutable audit trails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Total Blocks</span>
                    <span className="text-white font-bold">145,892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Last Block</span>
                    <span className="text-white font-semibold text-sm">2m ago</span>
                  </div>
                  <div className="bg-black/20 rounded p-2">
                    <code className="text-xs text-emerald-400 font-mono">
                      3a7bd3e2360a3d29...
                    </code>
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mt-2">
                    View Audit Log →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Classic Dashboard Access */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Classic 3D Globe View</h3>
                    <p className="text-sm text-gray-400">Real-time tracking of 64,000+ space objects</p>
                  </div>
                </div>
                <Link href="/dashboard/map">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Launch Globe View →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
