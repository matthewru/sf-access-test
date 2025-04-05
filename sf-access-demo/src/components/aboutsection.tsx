"use client";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="container px-8 md:px-12">
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <p className="text-muted-foreground">
                        Hi! My name is Matthew Ru and I am currently a 1st year Computer Science student at 
                        the University of California, Los Angeles, also pursuing a second degree in 
                        Applied Mathematics. I have a strong interest in software engineering, artificial 
                        intelligence, and entrepreneurship, and I am always looking for new opportunities to 
                        learn and grow.
                    </p>
                    <br></br>
                    <p className="text-muted-foreground">
                        Here are some of my involvements in my tech journey:
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                   
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Participating in clinical informatics research under Dr. Ricky Savjani with UCLA Health</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Competing in several hackathons and competitions to build my skills and network</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Exploring areas like computer vision, natural language processing, and machine learning</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Constantly learning and building software engineering projects</span>
                        </li>
                    </ul>
                    <div className="w-full h-px bg-border mt-8"></div>
                    <br></br>
                    <p className="text-muted-foreground">
                        Here are some of my interests outside of school:
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Playing basketball and volleyball</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Watching football, basketball, and F1 racing</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Cooking new foods</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-120 h-[35rem] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                        <Image
                        src="/images/matthew_ru_headshot.jpg"
                        alt="Profile picture"
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutSection;
