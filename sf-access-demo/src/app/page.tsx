import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, CupSoda, ChevronRight, Clock, Globe, Mail, MapPin, Phone, Leaf } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-amber-950 text-amber-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Coffee className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">Brew Haven</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#home" className="hover:text-amber-300 transition-colors">Home</Link></li>
                <li><Link href="#menu" className="hover:text-amber-300 transition-colors">Menu</Link></li>
                <li><Link href="#about" className="hover:text-amber-300 transition-colors">About</Link></li>
                <li><Link href="#testimonials" className="hover:text-amber-300 transition-colors">Reviews</Link></li>
                <li><Link href="#contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-amber-800 to-amber-950 text-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Artisan Coffee for the Soul</h2>
              <p className="text-xl mb-8">Experience the perfect blend of tradition and innovation with our ethically sourced, carefully roasted coffee beans.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                  Order Online
                </Button>
                <Button size="lg" variant="outline" className="border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-950">
                  View Menu
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <Image 
                src="/img/making-coffee.webp" 
                alt="A barista preparing specialty coffee" 
                width={500} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-4">Our Coffee Menu</h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              From single-origin espressos to signature blends, discover your new favorite brew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="h-6 w-6 mr-2 text-amber-700" />
                  Espresso Classics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  Our signature espresso shots and traditional coffee drinks made with precision and care by our expert baristas.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-amber-700 hover:text-amber-800 p-0">
                  View options <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CupSoda className="h-6 w-6 mr-2 text-amber-700" />
                  Specialty Lattes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  Creamy, flavorful lattes with house-made syrups and perfectly steamed milk for a delightful coffee experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-amber-700 hover:text-amber-800 p-0">
                  View options <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-6 w-6 mr-2 text-amber-700" />
                  Cold Brew & Iced Coffee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  Smooth, refreshing cold brews and iced coffees steeped to perfection for a revitalizing caffeine experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-amber-700 hover:text-amber-800 p-0">
                  View options <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="/img/coffee-beans.png" 
                alt="Coffee beans being roasted" 
                width={500} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold text-amber-950 mb-6">Our Coffee Journey</h2>
              <p className="text-amber-900 mb-6">
                At Brew Haven, we believe that great coffee is an art form. Since 2010, we've been sourcing the finest beans from sustainable farms around the world and roasting them to perfection in our local roastery.
              </p>
              <p className="text-amber-900 mb-6">
                Our master roasters have over 30 years of combined experience, ensuring that every batch meets our exacting standards. We're committed to ethical sourcing practices and supporting the communities where our beans are grown.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-100 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-950 mb-2">15+</h3>
                  <p className="text-amber-800">Coffee Origins</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-950 mb-2">100%</h3>
                  <p className="text-amber-800">Ethically Sourced</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-950 mb-2">Daily</h3>
                  <p className="text-amber-800">Fresh Roasting</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-950 mb-2">5</h3>
                  <p className="text-amber-800">Local Cafés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our coffee-loving community.
            </p>
          </div>

          <Tabs defaultValue="tab1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">Regular Customers</TabsTrigger>
              <TabsTrigger value="tab2">Coffee Enthusiasts</TabsTrigger>
              <TabsTrigger value="tab3">Local Businesses</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Daily visitor for 3 years</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900">
                    "I've tried coffee shops all over the city, but Brew Haven is my absolute favorite. Their Ethiopian pour-over is unmatched, and the baristas always remember my name and order. It's become my morning ritual and the perfect place to start my day."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-amber-700">
                  ★★★★★ - Visited over 500 times
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Michael Chen</CardTitle>
                  <CardDescription>Coffee blogger & certified barista</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900">
                    "As someone who's extremely particular about coffee, I can confidently say that Brew Haven stands out for their attention to detail. Their single-origin selection is carefully curated, and their roasting profile brings out the unique characteristics of each bean. A must-visit for serious coffee lovers."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-amber-700">
                  ★★★★★ - Featured in "Best Coffee Shops Monthly"
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emily Rodriguez</CardTitle>
                  <CardDescription>Owner of Rodriguez Design Studio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900">
                    "We've been ordering our office coffee exclusively from Brew Haven for the past two years. Their subscription service is reliable, the coffee is always fresh, and they've been accommodating with our changing needs. Our team productivity has definitely improved since we upgraded our coffee game!"
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-amber-700">
                  ★★★★★ - Business customer since 2021
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coffee Products Section */}
      <section className="py-20 bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Shop Our Coffee</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Bring the Brew Haven experience home with our selection of freshly roasted beans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-amber-800 text-amber-50 border-amber-700">
              <CardHeader className="border-b border-amber-700">
                <CardTitle>Signature Espresso Blend</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-amber-200 mb-4">
                  Our flagship espresso blend combines beans from Brazil, Colombia, and Ethiopia for a balanced, rich flavor profile with notes of chocolate, caramel, and a hint of citrus.
                </p>
                <ul className="list-disc list-inside text-amber-200 space-y-2">
                  <li>Medium-dark roast</li>
                  <li>Perfect for espresso machines</li>
                  <li>Also works well in French press</li>
                  <li>Available in 12oz and 1lb bags</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Shop Now</Button>
              </CardFooter>
            </Card>

            <Card className="bg-amber-800 text-amber-50 border-amber-700">
              <CardHeader className="border-b border-amber-700">
                <CardTitle>Single Origin Collection</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-amber-200 mb-4">
                  Explore the unique flavors of our carefully selected single-origin coffees, each highlighting the distinct characteristics of its region.
                </p>
                <ul className="list-disc list-inside text-amber-200 space-y-2">
                  <li>Ethiopian Yirgacheffe - floral, citrus</li>
                  <li>Colombian Supremo - nutty, chocolate</li>
                  <li>Guatemalan Antigua - spicy, cocoa</li>
                  <li>Costa Rican Tarrazu - bright, fruity</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Shop Now</Button>
              </CardFooter>
            </Card>

            <Card className="bg-amber-800 text-amber-50 border-amber-700">
              <CardHeader className="border-b border-amber-700">
                <CardTitle>Subscription Service</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-amber-200 mb-4">
                  Never run out of great coffee with our flexible subscription service, delivering freshly roasted beans to your door on your schedule.
                </p>
                <ul className="list-disc list-inside text-amber-200 space-y-2">
                  <li>Choose your favorite blend or rotation</li>
                  <li>Select delivery frequency (weekly/bi-weekly/monthly)</li>
                  <li>Pause or modify anytime</li>
                  <li>10% discount on all subscription orders</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Subscribe</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Brewing Guide Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Coffee Education</div>
              <h2 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-5xl">Perfect Your Brew</h2>
              <p className="max-w-[900px] text-amber-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn how to make café-quality coffee at home with our brewing guides and tips from our expert baristas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/img/pour-over.jpg"
              width="550"
              height="310"
              alt="Person brewing pour-over coffee"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-amber-950">Pour-Over Perfection</h3>
                    <p className="text-amber-800">
                      Master the art of pour-over brewing for a clean, flavorful cup that highlights the nuances of your coffee.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-amber-950">Espresso Essentials</h3>
                    <p className="text-amber-800">Learn the fundamentals of pulling the perfect espresso shot with proper timing, tamping, and temperature.</p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-amber-950">French Press Fundamentals</h3>
                    <p className="text-amber-800">
                      Discover how to use a French press for a full-bodied, rich coffee experience with minimal equipment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-amber-950 md:text-4xl/tight">
              Join Us For Coffee Events
            </h2>
            <p className="max-w-[600px] text-amber-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From cupping sessions to latte art workshops, we host regular events for coffee lovers of all experience levels.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-amber-900 px-8 text-sm font-medium text-amber-50 shadow transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Calendar
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-950 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Have questions about our coffee, catering, or wholesale options? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-amber-400" />
                  <div>
                    <h4 className="font-bold">Main Café & Roastery</h4>
                    <p className="text-amber-200">123 Coffee Avenue, Brewville, BC 10101</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 text-amber-400" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-amber-200">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 text-amber-400" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-amber-200">hello@brewhaven.example</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 text-amber-400" />
                  <div>
                    <h4 className="font-bold">Hours</h4>
                    <p className="text-amber-200">Monday - Friday: 6am - 8pm</p>
                    <p className="text-amber-200">Saturday - Sunday: 7am - 9pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-amber-50">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-amber-900 border-amber-700 text-amber-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-50">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-amber-900 border-amber-700 text-amber-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-amber-50">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="bg-amber-900 border-amber-700 text-amber-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-50">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your coffee needs..." 
                    className="bg-amber-900 border-amber-700 text-amber-50 min-h-[150px]" 
                  />
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950 w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Join Our Coffee Club</h3>
              <p className="text-amber-200">Get brewing tips, special offers, and early access to limited releases.</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-amber-800 border-amber-700 text-amber-50 min-w-[300px]" 
                />
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 mr-2 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-50">Brew Haven</h3>
              </div>
              <p className="mb-4">
                Crafting exceptional coffee experiences since 2010. From bean to cup, we're dedicated to quality and sustainability.
              </p>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Brew Haven. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-amber-50 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link href="#menu" className="hover:text-amber-400 transition-colors">Menu</Link></li>
                <li><Link href="#about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link href="#testimonials" className="hover:text-amber-400 transition-colors">Reviews</Link></li>
                <li><Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-amber-50 mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Coffee Beans</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Brewing Equipment</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Gift Cards</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Merchandise</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Subscriptions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-amber-50 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Shipping Policy</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Refund Policy</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}