"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Satellite, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface UniversalHeaderProps {
  variant?: "light" | "dark"
}

export default function UniversalHeader({ variant = "light" }: UniversalHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-100"
  const textClass = isDark ? "text-gray-200" : "text-gray-900"
  const hoverClass = isDark ? "hover:text-[#4e6aff]" : "hover:text-[#4e6aff]"

  return (
    <header className={`border-b ${bgClass} backdrop-blur-sm sticky top-0 z-50 shadow-sm`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg">
              <Satellite className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent font-space-grotesk`}>
                OrbitEdge
              </h1>
              <p className="text-xs text-gray-600">The Operating System for Low Earth Orbit</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/#features" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Features
            </Link>
            <Link href="/#customers" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Solutions
            </Link>
            <Link href="/#pricing" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Pricing
            </Link>
            <Link href="/dashboard/map" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Live Map
            </Link>
            <Link href="/dashboard/marketplace" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Marketplace
            </Link>
            <Link href="/dashboard" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
              Dashboard
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                Launch Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${textClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textClass}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#features" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Features
              </Link>
              <Link href="/#customers" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Solutions
              </Link>
              <Link href="/#pricing" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Pricing
              </Link>
              <Link href="/dashboard/map" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Live Map
              </Link>
              <Link href="/dashboard/marketplace" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Marketplace
              </Link>
              <Link href="/dashboard" className={`${textClass} ${hoverClass} transition-colors font-medium text-sm`}>
                Dashboard
              </Link>
              <Link href="/dashboard">
                <Button className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                  Launch Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
