import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons'
import { FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="relative h-[50vh] min-h-[600px] w-full overflow-hidden">
                <Image
                src="/images/banner3.JPG"
                alt="Banner image"
                fill
                priority
                className="object-cover"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="absolute inset-0 flex items-center">
                <div className="container px-8 md:px-12">
                    <div className="flex justify-between items-center">
                        <div className="max-w-2xl space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Matthew Ru
                            </h1>
                            <p className="text-xl text-white/90 md:text-2xl">Software Engineer | Researcher | Student</p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button asChild size="lg" className="group">
                                    <Link href="mailto:matthewru07@g.ucla.edu" className="flex items-center">
                                    Email Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-black transition-all ml-4 group">
                                    <Link href="#projects" className="group-hover:scale-105 group-hover:font-semibold transition-all">View My Work</Link>
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <Link 
                                    href="https://github.com/matthewru" 
                                    className="text-white hover:text-white/80 transition-colors flex items-center gap-2 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiGithub size={24} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">matthewru</span>
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link 
                                    href="https://linkedin.com/in/matthewru" 
                                    className="text-white hover:text-white/80 transition-colors flex items-center gap-2 group ml-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >   
                                    <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">matthewru</span>
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;