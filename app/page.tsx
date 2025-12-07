import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Shield, TrendingUp, Globe, Zap, Users, Rocket, CheckCircle, ArrowRight, Star, DollarSign, Activity, Lock } from "lucide-react"
import Link from "next/link"

export default async function HomePage() {
  // Demo mode - everyone can access
  const user = null

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg">
                <Satellite className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent font-space-grotesk">OrbitEdge</h1>
                <p className="text-xs text-gray-600">The Operating System for Low Earth Orbit</p>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <Link href="#features" className="text-gray-600 hover:text-[#4e6aff] transition-colors font-medium">
                  Features
                </Link>
                <Link href="#customers" className="text-gray-600 hover:text-[#4e6aff] transition-colors font-medium">
                  Solutions
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-[#4e6aff] transition-colors font-medium">
                  Pricing
                </Link>
                <Link href="/dashboard/map" className="text-gray-600 hover:text-[#4e6aff] transition-colors font-medium">
                  Live Map
                </Link>
              </div>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
            AIBA SpaceWeb (Sylhet) - NASA Space Apps Challenge 2025
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk leading-tight">
            Satellite Inspection-as-a-Service for{" "}
            <span className="text-[#4e6aff]">Sustainable Low Earth Orbit (LEO)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Real-time satellite monitoring, risk analysis, and compliance solutions for the $447B global space economy.
            Powered by NASA open data and advanced analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-[#4e6aff] hover:bg-[#3d54e6] text-white px-8 py-3 transform hover:scale-105 transition-all duration-200">
                <Rocket className="w-5 h-5 mr-2" />
                Launch Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
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
              From emerging agencies to enterprise insurers, OrbitEdge scales with your mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SME Satellite Operators */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">SME Satellite Operators</CardTitle>
                <CardDescription className="text-base">
                  Reduce operational costs by 30% with AI-powered maneuvers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Automated collision avoidance saves $250K+ annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Real-time TLE tracking for 64,000+ objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Fuel optimization reduces mission costs by 15%</span>
                  </li>
                </ul>
                <Link href="/dashboard">
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Start Optimizing
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Emerging Space Agencies */}
            <Card className="border-2 border-[#4e6aff] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Emerging Space Agencies</CardTitle>
                <CardDescription className="text-base">
                  Mission control in a box without the infrastructure cost
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Deploy mission control in 24 hours, not months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">ISO 24113 & NASA-STD 8719.14A compliance built-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">90% cheaper than traditional ground systems</span>
                  </li>
                </ul>
                <Link href="/dashboard">
                  <Button className="w-full mt-6 bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef]">
                    Launch Mission Control
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Insurers & Traders */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Insurers & Traders</CardTitle>
                <CardDescription className="text-base">
                  Real-time orbital risk data APIs for dynamic pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Live risk scores (0-100) updated every 60 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">RESTful APIs with 99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Blockchain-backed audit trails for legal proof</span>
                  </li>
                </ul>
                <Link href="/dashboard/analytics">
                  <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                    Access Risk APIs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Feature Showcase - NEW */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4e6aff]/10 text-[#4e6aff] border-[#4e6aff]/20">
              PLATFORM CAPABILITIES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real-time monitoring to AI-powered optimization, OrbitEdge delivers enterprise-grade tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Existing Feature: Real-Time Monitoring */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Real-Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Track 64,000+ objects with NASA TLE data and SGP4 propagation
                </p>
                <Link href="/dashboard/map" className="text-sm text-[#4e6aff] hover:underline flex items-center gap-1">
                  View Live Map <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* Existing Feature: Automated Compliance */}
            <Card className="border-2 hover:border-[#4e6aff] transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Automated Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  ISO 24113 & NASA-STD 8719.14A adherence with automated reports
                </p>
                <Link href="/dashboard/compliance" className="text-sm text-[#4e6aff] hover:underline flex items-center gap-1">
                  View Compliance <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* NEW Feature: Ground Station Marketplace */}
            <Card className="border-2 border-[#4e6aff] bg-gradient-to-br from-[#4e6aff]/5 to-transparent shadow-lg group">
              <div className="absolute top-2 right-2">
                <Badge className="bg-[#4e6aff] text-white text-xs">NEW</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Ground Station Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Book downlink slots like Airbnb. 500+ global antennas available
                </p>
                <Link href="/dashboard/marketplace" className="text-sm text-[#4e6aff] hover:underline flex items-center gap-1 font-semibold">
                  Browse Stations <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* NEW Feature: Fuel Optimization AI */}
            <Card className="border-2 border-[#4e6aff] bg-gradient-to-br from-[#4e6aff]/5 to-transparent shadow-lg group">
              <div className="absolute top-2 right-2">
                <Badge className="bg-[#4e6aff] text-white text-xs">NEW</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Fuel Optimization AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  AI recommends cheapest maneuvers. Save $250K+ annually
                </p>
                <Link href="/dashboard/map" className="text-sm text-[#4e6aff] hover:underline flex items-center gap-1 font-semibold">
                  Try AI Optimizer <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-[#4e6aff]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Blockchain Audit Trails</h4>
                <p className="text-sm text-gray-600">Immutable logs with SHA-256 hashing for legal compliance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-[#4e6aff]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dynamic Insurance Scoring</h4>
                <p className="text-sm text-gray-600">Real-time risk scores (0-100) for accurate premium pricing</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4e6aff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#4e6aff]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Financial Analytics</h4>
                <p className="text-sm text-gray-600">TAM/SAM/SOM, ROI, CLV calculations for $447B market</p>
              </div>
            </div>
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
                © 2025 OrbitBiZ by AIBA Space Web • Army IBA Sylhet • NASA Space Apps Challenge 2025
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
