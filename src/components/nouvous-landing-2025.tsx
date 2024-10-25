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
import { ArrowRight, Menu, X, Chrome, MapPin } from "lucide-react";
export function NouvousLanding_2025() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center pl-2 justify-center" href="/">
          <img src="/LOGO.png" className="w-28" />
        </a>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button
            variant="ghost"
            className="text-sm font-medium"
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
        <div className="absolute top-16 left-0 right-0 z-20 bg-white  border-b border-gray-200  p-4">
          <nav className="flex flex-col space-y-2">
            <a href="#products" className="text-sm font-medium hover:underline">
              Products
            </a>
            <a href="#about" className="text-sm font-medium hover:underline">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </a>
          </nav>
        </div>
      )}

      <main className="relative z-10 flex-1 px-4 py-12 md:px-6 lg:py-24">
        <section className="max-w-6xl mx-auto mb-24">
          <div className="flex justify-center gap-[1rem] mx-auto  items-baseline">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8  ">
              Welcome to{" "}
            </h1>
            <img src="/LOGO.png" className=" object-contain  w-72 " />
          </div>
          <p className="text-xl text-center text-gray-600  mb-12">
            Here we build products which really solves the problem.
          </p>
        </section>

        <section id="products" className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-zinc-900 text-primary-foreground p-6">
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <MapPin className="mr-2" />
                  FindPin
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 dark:text-white/80">
                  Pincode finder website
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 dark:text-white">
                  Quickly find and validate pincodes for any location.
                </p>
                <Badge variant="secondary">Web App</Badge>
              </CardContent>
              <CardFooter className="bg-muted p-6">
                <a href="https://findpin.nouvous.com" target="_blank">
                  <Button variant="outline">
                    Visit FindPin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-zinc-900 text-primary-foreground p-6">
                <CardTitle className="flex items-center text-2xl ">
                  <Chrome className="mr-2" />
                  ProdHunt
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 ">
                  Product hunt scraper
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 ">
                  Get top 50 products from{" "}
                  <a href="https://producthunt.com" target="_blank">
                    <span className="underline underline-offset-4">
                      producthunt.com
                    </span>
                  </a>{" "}
                  in just one click.
                </p>
                <Badge variant="secondary">Chrome Extension</Badge>
              </CardContent>
              <CardFooter className="bg-muted p-6">
                <a
                  href="https://chromewebstore.google.com/detail/prodhunt/giopdckkeeonachenpcafdcomeiocelh?hl=en"
                  target="_blank"
                >
                  <Button variant="outline" className="w-full">
                    Get Extension
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto mb-24">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">
                About Nouvous
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                At Nouvous, we're passionate about creating innovative tools
                that empower developers and businesses. Our suite of products is
                designed to solve real-world problems and streamline workflows.
                With a focus on user experience and cutting-edge technology,
                we're building the future of web tools.
              </p>
            </CardContent>
          </Card>
        </section>

        <section
          id="contact"
          className=" flex justify-between rounded-2xl max-w-6xl mx-auto "
        >
          <Card className="w-[50rem]">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="">
                Be the first to know about our new products and updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex space-x-2">
                <Input
                  className=" w-full flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center justify-evenly px-8  bg-white">
            <div className=" px-3 py-2 ">
              <img src="/linkedin.png" className="w-14 block " alt="Socials" />
            </div>
            <div className="font-bold">Follow Me</div>
          </Card>
          <Card className=" flex flex-col items-center justify-evenly px-8 bg-white">
            <div className="  px-3 py-2 ">
              <img src="/Github.png" className="w-14 block" alt="Socials" />
            </div>
            <div className="font-bold">Follow Me</div>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">
          © 2024 Nouvous. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 " href="/">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 " href="/">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
