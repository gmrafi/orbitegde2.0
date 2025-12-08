import { currentUser } from '@clerk/nextjs/server'
import UniversalHeader from "@/components/universal-header"
import SatelliteOverview from "@/components/dashboard/satellite-overview"
import LiveSatelliteMap from "@/components/dashboard/live-satellite-map"
import RiskAlerts from "@/components/dashboard/risk-alerts"
import RecentActivity from "@/components/dashboard/recent-activity"
import RevenueOverview from "@/components/dashboard/financial/revenue-overview"
import BusinessModelCalculator from "@/components/dashboard/financial/business-model-calculator"
import MarketAnalysis from "@/components/dashboard/financial/market-analysis"
import ManeuverWidget from "@/components/dashboard/maneuver-widget"
import InsuranceRiskWidget from "@/components/dashboard/insurance-risk-widget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, DollarSign, Satellite as SatelliteIcon, Globe, Zap, Users, Activity, Radio, Lock, MessageSquare, Rocket, Code, Shield } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  // Get authenticated user from Clerk
  const user = await currentUser()

  // Get user's display name (first name, or email username as fallback)
  const displayName = user?.firstName || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "User"
  const fullName = user?.firstName && user?.lastName 
    ? `${user.firstName} ${user.lastName}` 
    : displayName

  return (
    <div className="min-h-screen bg-gray-50">
      <UniversalHeader variant="dark" />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, <span className="text-[#4e6aff]">{fullName}</span></h1>
              <p className="text-gray-600">Monitor your LEO satellites and track orbital compliance in real-time</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Data Active
              </Badge>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <SatelliteOverview />

        {/* Quick Access Feature Cards - All 6 Modules */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            All Features & Modules
          </h2>
          <p className="text-gray-600 mb-6">Access all OrbitEdge features from your unified dashboard</p>
        </div>

        {/* MODULE 1: Core Monitoring & Visualization */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <SatelliteIcon className="w-5 h-5 text-blue-600" />
            Module 1: Core Monitoring & Visualization
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/dashboard/map">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">3D Globe Engine</CardTitle>
                      <p className="text-xs text-gray-600">Interactive Earth (Mapbox)</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/satellites">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <SatelliteIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Live Satellite Tracking</CardTitle>
                      <p className="text-xs text-gray-600">TLE Data (30s updates)</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/map">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-red-50 to-orange-100 hover:from-red-100 hover:to-orange-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Debris Heatmap</CardTitle>
                      <p className="text-xs text-gray-600">Color-coded risk zones</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/satellites">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-100 hover:from-purple-100 hover:to-indigo-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Catalog Filters</CardTitle>
                      <p className="text-xs text-gray-600">Starlink, ISS, Debris</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* MODULE 2: OrbitAI & Automation */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            Module 2: OrbitAI & Automation (AI Brain)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dashboard/chat">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">OrbitAI Assistant</CardTitle>
                      <p className="text-xs text-gray-600">NLP Chatbot (Sumaiya)</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/command">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-yellow-50 to-orange-100 hover:from-yellow-100 hover:to-orange-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">AI Maneuver Recommender</CardTitle>
                      <p className="text-xs text-gray-600">Delta-V cost optimizer</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/launch-optimizer">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-orange-50 to-red-100 hover:from-orange-100 hover:to-red-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Launch Window Optimizer</CardTitle>
                      <p className="text-xs text-gray-600">Space weather & traffic</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* MODULE 3: Commerce & Marketplace */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Module 3: Commerce & Marketplace (Revenue Engine)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dashboard/marketplace">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Radio className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Ground Station Booking</CardTitle>
                      <p className="text-xs text-gray-600">Calendar-based antenna rental</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/analytics">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-teal-50 to-cyan-100 hover:from-teal-100 hover:to-cyan-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Revenue & Commission</CardTitle>
                      <p className="text-xs text-gray-600">Owner earnings dashboard</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* MODULE 4: Compliance & Security */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            Module 4: Compliance & Security (Legal & Safety)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dashboard/compliance">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-indigo-50 to-blue-100 hover:from-indigo-100 hover:to-blue-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">ISO 24113 Reporter</CardTitle>
                      <p className="text-xs text-gray-600">Auto compliance score</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-violet-50 to-purple-100 hover:from-violet-100 hover:to-purple-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Blockchain Ledger</CardTitle>
                      <p className="text-xs text-gray-600">SHA-256 immutable log</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/map">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-red-50 to-pink-100 hover:from-red-100 hover:to-pink-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <Radio className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">RF Jamming Alert</CardTitle>
                      <p className="text-xs text-gray-600">Signal interference map</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* MODULE 5: Financial Analytics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Module 5: Financial Analytics (FinTech Core)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dashboard/analytics">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-blue-50 to-cyan-100 hover:from-blue-100 hover:to-cyan-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Insurance Risk Score API</CardTitle>
                      <p className="text-xs text-gray-600">Dynamic 0-100 calculation</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/analytics">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-cyan-50 to-teal-100 hover:from-cyan-100 hover:to-teal-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">ROI & Cost Projections</CardTitle>
                      <p className="text-xs text-gray-600">5-year charts (Recharts)</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* MODULE 6: User Management */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Module 6: User Management (Admin Core)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dashboard/users">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">RBAC System</CardTitle>
                      <p className="text-xs text-gray-600">Admin / Operator / Viewer</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/developer">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer bg-gradient-to-br from-pink-50 to-rose-100 hover:from-pink-100 hover:to-rose-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">API Key Generator</CardTitle>
                      <p className="text-xs text-gray-600">Developer quotas & limits</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* Pricing & Subscription Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Badge className="mb-3 bg-white/20 text-white border-white/30">
                  💳 Payment Integration
                </Badge>
                <h3 className="text-3xl font-bold mb-2">Upgrade Your Plan</h3>
                <p className="text-blue-100 mb-4 max-w-xl">
                  Unlock advanced features with our flexible pricing plans. Secure payment powered by Paddle.
                </p>
                <Link href="/dashboard/pricing">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-blue-50 font-semibold shadow-lg"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing & Subscribe
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <div className="text-right">
                  <p className="text-5xl font-bold">$49</p>
                  <p className="text-blue-100">Starting from</p>
                </div>
                <Rocket className="w-24 h-24 opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Live Satellite Map - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <LiveSatelliteMap />
            
            {/* Enterprise Features - AI Maneuver & Insurance */}
            <div className="grid md:grid-cols-2 gap-6">
              <ManeuverWidget />
              <InsuranceRiskWidget />
            </div>
            
            {/* Financial Overview Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <RevenueOverview />
              <MarketAnalysis />
            </div>
          </div>

          {/* Sidebar with Alerts, Activity, and Business Tools */}
          <div className="space-y-6">
            <RiskAlerts />
            <RecentActivity />
            
            {/* Business Model Calculator Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">Business Tools</CardTitle>
                  </div>
                  <Link href="/dashboard/analytics">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Link href="/dashboard/analytics">
                    <Button variant="ghost" className="w-full justify-start text-left h-auto p-3 bg-gray-50 hover:bg-gray-100">
                      <div>
                        <div className="font-medium">ROI Calculator</div>
                        <div className="text-sm text-gray-600">Investment projections</div>
                      </div>
                    </Button>
                  </Link>
                  <Link href="/dashboard/analytics">
                    <Button variant="ghost" className="w-full justify-start text-left h-auto p-3 bg-gray-50 hover:bg-gray-100">
                      <div>
                        <div className="font-medium">Break-Even Analysis</div>
                        <div className="text-sm text-gray-600">Financial planning</div>
                      </div>
                    </Button>
                  </Link>
                  <Link href="/dashboard/analytics">
                    <Button variant="ghost" className="w-full justify-start text-left h-auto p-3 bg-gray-50 hover:bg-gray-100">
                      <div>
                        <div className="font-medium">Market Analysis</div>
                        <div className="text-sm text-gray-600">Industry insights</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">64K+</div>
                    <div className="text-sm text-gray-600">Objects Tracked</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">Real-time</div>
                    <div className="text-sm text-gray-600">Updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
