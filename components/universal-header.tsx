"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Satellite, Menu, X, User, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useUser, useClerk } from '@clerk/nextjs'
import { useRouter } from "next/navigation"

interface UniversalHeaderProps {
  variant?: "light" | "dark"
}

export default function UniversalHeader({ variant = "light" }: UniversalHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()
  
  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-100"
  const textClass = isDark ? "text-gray-200" : "text-gray-900"
  const hoverClass = isDark ? "hover:text-[#4e6aff]" : "hover:text-[#4e6aff]"

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    }
    return user?.emailAddresses[0]?.emailAddress?.[0]?.toUpperCase() || "U"
  }

  return (
    <header className={`border-b ${bgClass} backdrop-blur-sm shadow-sm`}>
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
            {isSignedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={user?.imageUrl} alt={user?.firstName || 'User'} />
                      <AvatarFallback className="bg-white/20 text-white text-xs">
                        {getInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "User"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-2 text-sm">
                    <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                    <p className="text-gray-500 text-xs truncate">{user?.emailAddresses[0]?.emailAddress}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/sign-in">
                <Button className="bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                  Launch Dashboard
                </Button>
              </Link>
            )}
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
              {isSignedIn ? (
                <>
                  <Link href="/dashboard/profile">
                    <Button className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg flex items-center justify-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={user?.imageUrl} alt={user?.firstName || 'User'} />
                        <AvatarFallback className="bg-white/20 text-white text-xs">
                          {getInitials()}
                        </AvatarFallback>
                      </Avatar>
                      My Profile
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleSignOut} 
                    variant="outline" 
                    className="w-full text-red-600 border-red-300 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link href="/sign-in">
                  <Button className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] hover:from-[#3d59ef] hover:to-[#5d4bef] text-white shadow-lg">
                    Launch Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
