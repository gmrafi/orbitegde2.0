"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Check, Palette, Image as ImageIcon, Code, Satellite } from "lucide-react"
import { useState } from "react"

export default function BrandingPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }

  const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>`

  const logoIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" fill="none"><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>`

  const brandColors = [
    { name: "Primary Blue", hex: "#4e6aff", rgb: "rgb(78, 106, 255)" },
    { name: "Secondary Purple", hex: "#6d5bff", rgb: "rgb(109, 91, 255)" },
    { name: "Dark Gray", hex: "#171717", rgb: "rgb(23, 23, 23)" },
    { name: "Text Gray", hex: "#374151", rgb: "rgb(55, 65, 81)" },
    { name: "Background", hex: "#f9fafb", rgb: "rgb(249, 250, 251)" },
  ]

  const reactComponent = `import { Satellite } from "lucide-react"

export default function OrbitEdgeLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg">
        <Satellite className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent">
          OrbitEdge
        </h1>
        <p className="text-xs text-gray-600">The Operating System for Low Earth Orbit</p>
      </div>
    </div>
  )
}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-blue-600">Brand Assets</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent">
            OrbitEdge Branding
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download high-quality logo files, brand colors, and usage guidelines for your projects
          </p>
        </div>

        {/* Logo Preview - Large */}
        <Card className="mb-8 border-2 border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Logo Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Light Background */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-gray-600">On Light Background</h3>
                <div className="bg-white rounded-lg p-12 border-2 border-gray-200 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg">
                      <Satellite className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent">
                        OrbitEdge
                      </h1>
                      <p className="text-xs text-gray-600">The Operating System for Low Earth Orbit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Background */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-gray-600">On Dark Background</h3>
                <div className="bg-gray-900 rounded-lg p-12 border-2 border-gray-700 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg">
                      <Satellite className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4e6aff] to-[#6d5bff] bg-clip-text text-transparent">
                        OrbitEdge
                      </h1>
                      <p className="text-xs text-gray-400">The Operating System for Low Earth Orbit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Full Logo SVG */}
          <Card className="border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Full Logo SVG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <img src={`data:image/svg+xml;base64,${btoa(logoSVG)}`} alt="OrbitEdge Logo" className="w-full max-w-md mx-auto" />
              </div>
              <div className="relative">
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto max-h-40">
                  {logoSVG}
                </pre>
                <Button
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(logoSVG, 'fullLogo')}
                >
                  {copiedSection === 'fullLogo' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff]"
                onClick={() => {
                  const blob = new Blob([logoSVG], { type: 'image/svg+xml' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'orbitedge-logo.svg'
                  a.click()
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Logo SVG
              </Button>
            </CardContent>
          </Card>

          {/* Icon Only SVG */}
          <Card className="border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Icon Only SVG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <img src={`data:image/svg+xml;base64,${btoa(logoIconSVG)}`} alt="OrbitEdge Icon" className="w-16 h-16 mx-auto" />
              </div>
              <div className="relative">
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto max-h-40">
                  {logoIconSVG}
                </pre>
                <Button
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(logoIconSVG, 'iconLogo')}
                >
                  {copiedSection === 'iconLogo' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-[#4e6aff] to-[#6d5bff]"
                onClick={() => {
                  const blob = new Blob([logoIconSVG], { type: 'image/svg+xml' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'orbitedge-icon.svg'
                  a.click()
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Icon SVG
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* React Component */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              React Component (Current Logo)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <pre className="bg-gray-900 text-blue-400 p-6 rounded-lg text-sm overflow-x-auto">
                {reactComponent}
              </pre>
              <Button
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(reactComponent, 'reactComponent')}
              >
                {copiedSection === 'reactComponent' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Brand Colors */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Brand Colors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="space-y-3">
                  <div 
                    className="w-full h-32 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform border-2 border-gray-200"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, color.name)}
                  />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">{color.name}</p>
                    <div className="flex items-center justify-between">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hex}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(color.hex, color.name)}
                      >
                        {copiedSection === color.name ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                    <code className="text-xs text-gray-600">{color.rgb}</code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logo Sizes */}
        <Card className="mb-8 border-2 border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Different Sizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { size: "16px", class: "w-4 h-4" },
                { size: "24px", class: "w-6 h-6" },
                { size: "32px", class: "w-8 h-8" },
                { size: "48px", class: "w-12 h-12" },
              ].map((item) => (
                <div key={item.size} className="text-center space-y-3">
                  <div className="bg-white rounded-lg p-8 border-2 border-gray-200 flex items-center justify-center">
                    <div className={`${item.class} bg-gradient-to-br from-[#4e6aff] to-[#6d5bff] rounded-lg flex items-center justify-center shadow-lg`}>
                      <Satellite className={`${item.class.replace('w-', 'w-[').replace('h-', 'h-[').replace(/\d+/, m => String(parseInt(m) * 0.6))}`} className="text-white" style={{ width: '60%', height: '60%' }} />
                    </div>
                  </div>
                  <p className="font-mono text-sm text-gray-600">{item.size}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="border-2 border-green-200">
          <CardHeader>
            <CardTitle>Logo Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-green-600 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Do's
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Maintain proper spacing around the logo</li>
                  <li>✓ Use official brand colors</li>
                  <li>✓ Keep the logo proportional when resizing</li>
                  <li>✓ Use on clean, contrasting backgrounds</li>
                  <li>✓ Download SVG for best quality</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-red-600 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Don'ts
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ Don't distort or stretch the logo</li>
                  <li>✗ Don't change brand colors</li>
                  <li>✗ Don't add shadows or effects</li>
                  <li>✗ Don't rotate the logo</li>
                  <li>✗ Don't use low-resolution versions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
