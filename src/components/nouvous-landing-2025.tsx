import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Menu,
  X,
  Chrome,
  MapPin,
  Linkedin,
  Github,
  Subtitles,
} from "lucide-react";

export function NouvousLanding_2025() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/50 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(100,100,100,0.2),transparent_70%)] animate-aurora"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(60,60,60,0.2),transparent_70%)] animate-aurora-reverse"></div>
      <header className="sticky top-0 z-50 backdrop-blur-lg px-4 lg:px-6 h-16 flex items-center">
        <img
          src="/LOGO.png"
          className="w-32 object-contain invert drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        />
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <img src="LOGO.svg" className="invert" alt="" />
          <div className="hidden md:flex space-x-6">
            <a href="https://www.linkedin.com/in/md-sharik" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>

            <a href="https://www.github.com/md-sharik" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </div>
          <Button
            variant="ghost"
            className="text-sm font-medium md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-20 bg-black/95 border-b border-white/10 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com/in/md-sharik" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>

            <a href="https://www.github.com/md-sharik" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </nav>
        </div>
      )}

      <main className="flex-1 px-4 py-12 md:px-6 lg:py-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="relative py-12 px-4 sm:px-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex-1">
                  <div className="flex-col flex gap-5 items-center justify-between">
                    <img
                      src="/LOGO.png"
                      className="w-72 object-contain invert drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                    />
                    <p className="text-xl text-center text-gray-200 mb-8">
                      We build Softwares which really solves the problem.{" "}
                      <span className="line-through"> No Bullshit</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Bento Grid */}
        <section id="products" className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Our Products</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FindPin Card */}
            {[
              {
                title: "FindPin",
                description: "Pincode finder website",
                subtitle:
                  "Quickly find and validate pincodes for any location. A simple but powerful tool.",
                logo: MapPin,
                logoColor: "text-purple-400",
                link: "https://findpin.nouvous.com",
                category: "Web App",
                bgColor: "bg-[#1e0a30]",
                badgeColor: "bg-purple-900",
                buttonText: "Visit FindPin",
              },
              {
                title: "ProdHunt",
                description: "Product hunt scraper",
                subtitle:
                  "Get top 50 products from Producthunt in just one click. Scraped every best products from producthunt in one click",
                logo: Chrome,
                logoColor: "text-blue-400",
                link: "https://chromewebstore.google.com/detail/prodhunt/giopdckkeeonachenpcafdcomeiocelh?hl=en",
                category: "Chrome Extension",
                bgColor: "bg-[#091e36]",
                badgeColor: "bg-blue-900",
                buttonText: "Visit Extension",
              },
              {
                title: "OneSubClick",
                description: "subtitle language Converter",
                subtitle:
                  "Convert subtitles from one language to another. A simple but powerful tool.",
                logo: Subtitles,
                logoColor: "text-emerald-400",
                link: "https://sub.nouvous.com",
                category: "AI",
                bgColor: "bg-[#062320]",
                badgeColor: "bg-emerald-800",
                buttonText: "Visit OneSubClick",
              },
              {
                title: "Grotbot AI",
                description: "AI chat assistant",
                subtitle:
                  "Grotbot AI chat assistant for everyday tasks. Great UI and more things in single prompts",
                logo: Subtitles,
                logoColor: "text-red-400",
                link: "https://sub.nouvous.com",
                category: "AI",
                bgColor: "bg-[#1e0404]",
                badgeColor: "bg-red-900",
                buttonText: "Visit Grotbot AI",
              },
            ].map((product) => (
              <Card
                key={product.title}
                className={`overflow-hidden border border-white/5 ${product.bgColor} shadow-md`}
              >
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center text-xl text-white">
                    <product.logo className={`mr-2 ${product.logoColor}`} />
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <p className="mb-4 text-gray-300">{product.subtitle}</p>
                  <Badge
                    className={`${product.badgeColor} text-white border-none`}
                  >
                    {product.category}
                  </Badge>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <a href={product.link} target="_blank" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 hover:cursor-pointer border-white/10 text-white hover:text-white hover:bg-white/10"
                    >
                      {product.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section - Simplified */}
        <section id="about" className="max-w-6xl mx-auto mb-24">
          <Card className="overflow-hidden border border-white/5 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                About Nouvous
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-300">
                At Nouvous, we're passionate about creating innovative tools
                that empower developers and businesses. Our suite of products is
                designed to solve real-world problems and streamline workflows.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section - Simplified */}
        <section id="contact" className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Connect With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Subscribe Card */}
            <Card className="col-span-1 md:col-span-3 overflow-hidden border border-white/5 bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Stay Updated
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Be the first to know about our new products and updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="flex space-x-2">
                  <Input
                    className="w-full flex-1 bg-zinc-800 border-white/10 text-white placeholder:text-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white border-0"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <p className="text-xs text-gray-400">
                    By subscribing, you agree to our Terms of Service
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-purple-400">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-purple-400">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black mt-24 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/LOGO.png" className="w-28 mb-4 invert" />
              <p className="text-sm text-gray-300">
                Building innovative tools for developers and businesses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#products"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0">
              © 2024 Nouvous. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add a subtle grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-noise"></div>
    </div>
  );
}
