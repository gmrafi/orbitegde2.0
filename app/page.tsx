import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Shield, TrendingUp, Globe, Zap, Users, Rocket, CheckCircle, ArrowRight, Star, DollarSign, Activity, Lock } from "lucide-react"
import Link from "next/link"
import UniversalHeader from "@/components/universal-header"
import Image from "next/image"

export default async function HomePage() {
  // Demo mode - everyone can access
  const user = null

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <UniversalHeader variant="light" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
            🏆 Evolution of the NASA Space Apps 2025 Global Nominee Project
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk leading-tight">
            Satellite Inspection-as-a-Service for <span className="text-[#4e6aff]">Sustainable Low Earth Orbit (LEO)</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            Real-time satellite monitoring, risk analysis, and compliance solutions for the $447B global space economy. Powered by NASA open data and advanced analytics.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#4e6aff]" />
              <span>Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#4e6aff]" />
              <span>AI Fuel Optimizer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#4e6aff]" />
              <span>Automated Compliance</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <Button size="lg" className="bg-[#4e6aff] hover:bg-[#3d54e6] text-white px-8 py-3 transform hover:scale-105 transition-all duration-200">
                <Rocket className="w-5 h-5 mr-2" />
                Launch Dashboard
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-[#4e6aff] text-[#4e6aff] hover:bg-[#4e6aff] hover:text-white px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by Innovators - Social Proof */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600 mb-6 font-semibold uppercase tracking-wide">
            Trusted by Space Industry Innovators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <div className="text-3xl font-bold text-gray-400">NASA</div>
            <div className="text-3xl font-bold text-gray-400">Spire</div>
            <div className="text-3xl font-bold text-gray-400">Planet</div>
            <div className="text-3xl font-bold text-gray-400">ISRO</div>
            <div className="text-3xl font-bold text-gray-400">ESA</div>
          </div>
        </div>
      </section>



      {/* Comprehensive LEO Solutions - Core Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">Comprehensive LEO Solutions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and optimize your Low Earth Orbit operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/dashboard/satellites">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <Satellite className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Real-time Satellite Tracking</CardTitle>
                  <CardDescription>
                    Track 64,000+ objects with NASA TLE data. Monitor positions, orbital parameters, and collision warnings with SGP4/SDP4 propagation.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/marketplace">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Ground Station Marketplace</CardTitle>
                  <CardDescription>
                    Book downlink slots at 24 stations across 6 continents. S-band, X-band, Ka-band support with instant availability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/command">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">AI-Powered Fuel Optimizer</CardTitle>
                  <CardDescription>
                    Reduce propellant costs by 30% with smart maneuver suggestions. Economy or Emergency modes with delta-V calculations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/compliance">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Automated Compliance Reporting</CardTitle>
                  <CardDescription>
                    Generate ISO 24113 & NASA-STD-8719.14 reports in one click. Automated scoring and regulatory-ready PDF exports.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Blockchain Liability Ledger</CardTitle>
                  <CardDescription>
                    Immutable audit trails with SHA-256 hash signatures. Every maneuver recorded on-chain for legal proof and insurance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/map">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-[#4e6aff]" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">RF Jamming Detection</CardTitle>
                  <CardDescription>
                    Real-time RF spectrum analysis to detect GPS spoofing and signal jamming. 30-second automated alerts with geolocation.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600">
              Additional tools and services for comprehensive space operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/dashboard/chat">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">OrbitAI Assistant</CardTitle>
                  <CardDescription>
                    AI-powered chatbot for instant collision risk analysis. Ask "Is my satellite safe?" and get debris proximity alerts.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/launch-optimizer">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Launch Window Optimizer</CardTitle>
                  <CardDescription>
                    Optimal launch windows based on space weather, Kp-Index, and orbital traffic. AI-powered timing recommendations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/developer">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Developer API Portal</CardTitle>
                  <CardDescription>
                    RESTful API with three tiers: Academic, Startup, Enterprise. Instant API keys with Python, JavaScript, cURL examples.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/users">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">User Management & RBAC</CardTitle>
                  <CardDescription>
                    Role-based access with Admin, Operator, and Viewer levels. Granular permissions and team collaboration tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/analytics">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Financial Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Revenue tracking, ROI projections, and break-even analysis. Market intelligence for space operations business.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard/learn">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">Learning & Documentation</CardTitle>
                  <CardDescription>
                    Video tutorials, API docs, and best practices. Interactive learning paths for operators and developers.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Segmentation Section - NEW */}
      <section id="customers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
              WHO WE SERVE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Every Space Operator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused solutions for operators, agencies, insurers, defense, and research institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SME Satellite Operators - PRIMARY TARGET */}
            <Card className="border-2 border-[#4e6aff] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#4e6aff] text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                PRIMARY
              </div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">SME Satellite Operators</CardTitle>
                <CardDescription>
                  For constellations requiring automated collision avoidance and fuel optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4e6aff] mt-0.5 flex-shrink-0" />
                    <span>Track up to 100 satellites per account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4e6aff] mt-0.5 flex-shrink-0" />
                    <span>AI maneuver recommendations save 30% fuel costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4e6aff] mt-0.5 flex-shrink-0" />
                    <span>Ground station marketplace access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Emerging Space Agencies */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">Emerging Space Agencies</CardTitle>
                <CardDescription>
                  Deploy mission control capabilities instantly without heavy infrastructure investment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Cloud-based mission control dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>ISO 24113 & NASA-STD compliance built-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>90% cheaper than traditional ground systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Insurers & Financial Traders */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">Insurers & Financial Traders</CardTitle>
                <CardDescription>
                  Leverage real-time orbital risk scores for dynamic underwriting and premium adjustment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Risk scores (0-100) updated every 60 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>RESTful API with 99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Blockchain-backed audit trails for claims</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Defense & Intelligence */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">Defense & Intelligence</CardTitle>
                <CardDescription>
                  Secure assets with RF interference monitoring and space situational awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Encrypted satellite tracking for classified assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>RF jamming detection and geolocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Threat assessment and anomaly alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Academia & Research */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">Academia & Research</CardTitle>
                <CardDescription>
                  Empowering the next generation with free access to orbital mechanics tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Free Academic tier for CubeSat tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>NASA open data access for debris research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Educational resources and tutorials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enterprise Grade */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
              TRANSPARENT PRICING
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Mission Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic research to enterprise operations, we scale with you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Academic Tier */}
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-700">ACADEMIC</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">$49</CardTitle>
                <CardDescription className="text-base">per month • billed annually</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">Perfect for students and researchers</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Basic satellite tracking (1,000 objects)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mapbox 3D globe visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">NASA TLE data access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Educational resources & tutorials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">No AI maneuver recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">No marketplace access</span>
                  </li>
                </ul>
                <Link href="/dashboard">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Start Free Trial
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">14-day free trial • No credit card</p>
              </CardContent>
            </Card>

            {/* Startup Tier - MOST POPULAR */}
            <Card className="border-2 border-[#4e6aff] shadow-2xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                MOST POPULAR
              </div>
              <CardHeader className="pt-8">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-[#4e6aff] text-white">STARTUP</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">$499</CardTitle>
                <CardDescription className="text-base">per month • billed annually</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">For satellite operators & agencies</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Everything in Academic, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Track 64,000+ objects with real-time updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI maneuver recommendations (save $250K+/year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated compliance reports (ISO 24113)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Collision alerts with risk scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">API access (10,000 requests/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">No marketplace commission-free bookings</span>
                  </li>
                </ul>
                <Link href="/dashboard">
                  <Button className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                    Get Started Now
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">30-day money-back guarantee</p>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="border-2 hover:border-emerald-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-emerald-100 text-emerald-700">ENTERPRISE</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">Custom</CardTitle>
                <CardDescription className="text-base">tailored to your mission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">For large agencies & insurers</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Everything in Startup, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Ground station marketplace access (commission-free)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dynamic insurance risk API (99.99% SLA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Blockchain liability ledger (immutable logs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unlimited API requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated security team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 phone support + Slack integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom feature development</span>
                  </li>
                </ul>
                <Link href="/dashboard/analytics">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                    Contact Sales
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">Schedule a demo call</p>
              </CardContent>
            </Card>
          </div>

          {/* Pricing FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">14-day access to all Startup features. No credit card required. Cancel anytime.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I switch plans later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Yes! Upgrade or downgrade anytime. Pro-rated billing applies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer educational discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Academic plan is already discounted 70% for .edu emails. Contact us for institutional licenses.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* World-Class Team Section */}
      <section id="team" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
              MEET THE TEAM
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built by Team AIBA SpaceWeb
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate team combining space technology with business innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-[#4e6aff]/20 group-hover:ring-[#4e6aff]/40 transition-all">
                  <Image 
                    src="/team/rafi.png" 
                    alt="Md Golam Mubasshir Rafi" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Md Golam Mubasshir Rafi</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                  <Image 
                    src="/team/riya.png" 
                    alt="Hrydita Binte Razzaque Riya" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Hrydita Binte Razzaque Riya</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all">
                  <Image 
                    src="/team/sumaiya.png" 
                    alt="Sumaiya Hoque" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sumaiya Hoque</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all">
                  SS
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sanila Subhana</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
                  MM
                </div>
                <h3 className="text-lg font-bold text-gray-900">Minhazul Islam Mahin</h3>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-[#4e6aff]/20 bg-gradient-to-r from-[#4e6aff]/5 to-transparent">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Achievement</h3>
                <p className="text-gray-600 mb-6">
                  Global Nominees at NASA Space Apps Challenge 2025 - Representing Bangladesh in the space innovation ecosystem
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Badge className="bg-[#4e6aff] text-white px-4 py-2">NASA Space Apps 2025</Badge>
                  <Badge className="bg-emerald-500 text-white px-4 py-2">Global Nominee</Badge>
                  <Badge className="bg-purple-500 text-white px-4 py-2">Army IBA Sylhet</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">About AIBA Space Web</h2>
            <p className="text-xl text-gray-600">NASA Space Apps Challenge 2025 - Sylhet Team</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">Our Mission</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We're a team of BBA students from Army IBA Sylhet, passionate about combining business analytics
                    with space technology to create sustainable solutions for the growing LEO economy.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Team Members:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Md Golam Mubasshir Rafi</li>
                      <li>• Mashrura Meshkat Punno</li>
                      <li>• Al Razi</li>
                      <li>• Rukaiya Binte Amin</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href="/dashboard">
                      <Button className="bg-[#4e6aff] hover:bg-[#3d54e6] text-white">
                        <Satellite className="w-4 h-4 mr-2" />
                        Explore Our Solution
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-[#4e6aff]/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Challenge Focus</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Addressing the "Commercializing Low Earth Orbit" challenge by creating scalable business models for
                    sustainable LEO operations, targeting the $447B global space economy with innovative satellite
                    inspection services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#4e6aff] rounded-lg flex items-center justify-center">
                  <Satellite className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold font-space-grotesk">OrbitBiZ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Pioneering sustainable LEO commerce through innovative satellite inspection services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/dashboard/analytics" className="hover:text-white transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="/dashboard/learn" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Data Sources & APIs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://data.nasa.gov/" className="hover:text-white transition-colors">
                    NASA Open Data Portal
                  </a>
                </li>
                <li>
                  <a href="https://sscweb.gsfc.nasa.gov/" className="hover:text-white transition-colors">
                    SSC Web Services
                  </a>
                </li>
                <li>
                  <a href="https://www.space-track.org/" className="hover:text-white transition-colors">
                    Space-Track.org
                  </a>
                </li>
                <li>
                  <a href="https://cddis.nasa.gov/" className="hover:text-white transition-colors">
                    CDDIS GNSS Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nasa.gov/wp-content/uploads/2025/05/nasa-leo-economy-report.pdf"
                    className="hover:text-white transition-colors"
                  >
                    NASA LEO Economy Report
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Challenge & Open Source</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://www.spaceappschallenge.org/" className="hover:text-white transition-colors">
                    NASA Space Apps Challenge
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.spaceappschallenge.org/2025/locations/sylhet/"
                    className="hover:text-white transition-colors"
                  >
                    Sylhet Location
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/k2XS6c6nDrjmdwgX9" className="hover:text-white transition-colors">
                    Submission Form
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://www.iso.org/standard/72383.html" className="hover:text-white transition-colors">
                    ISO 24113 Standard
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technology Stack</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://nextjs.org/" className="hover:text-white transition-colors">
                    Next.js 15
                  </a>
                </li>
                <li>
                  <a href="https://supabase.com/" className="hover:text-white transition-colors">
                    Supabase
                  </a>
                </li>
                <li>
                  <a href="https://www.mapbox.com/" className="hover:text-white transition-colors">
                    Mapbox GL JS
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com/" className="hover:text-white transition-colors">
                    Vercel Platform
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:text-white transition-colors">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 OrbitEdge. Powered by NASA Open Data.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Learn • Launch • Lead</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4e6aff] rounded-full animate-pulse"></div>
                  <span>Powered by NASA Open Data</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-gray-400 text-sm">
              Design and Developed by Md Golam Mubasshir Rafi
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Dashboard Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/dashboard">
          <Button 
            size="lg" 
            className="bg-[#4e6aff] hover:bg-[#3d54e6] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
          >
            <Satellite className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Launch Dashboard</span>
            <span className="sm:hidden">Dashboard</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
