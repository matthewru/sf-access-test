"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./project-card";

const ProjectsSection = () => {
  const items = [
    {
      id: 1,
      title: "PaperPilot", 
      image: "/images/paperpilot.png",
      description: "Generates and revises contracts/documents in real-time to save time and costs for small businesses using Google Gemini and a Retrieval-Augmented Generation (RAG) architecture for consistency and accuracy.",
      link: "https://www.google.com",
      technologies: ["Next.js", "Google Gemini", "Flask", "MongoDB", "Tailwind CSS", "Shadcn UI"],
      projectType: "Hackathon Winner",
      lastUpdated: "2025-03-09"
    },
    {
      id: 2,
      title: "Gesture Controlled 3D Environment",
      image: "/images/gesturecontrolled.png",
      description: "Utilized a webcam-based hand-tracking system to detect two distinct gestures, enabling users to rotate and zoom in/out of a 3D model uploaded via a file",
      link: "https://matthewru.github.io/gesture-controlled-env/",
      technologies: ["React", "TensorFlow", "Three.js"],
      projectType: "Personal Project",
      lastUpdated: "2024-07-01"
    },
    {
      id: 3,
      title: "NNHS Graduation Ticketing Website",
      image: "/images/nnhs.png",
      description: "Designed and implemented a system for school administrators that utilized MongoDB to generate unique barcode-powered graduation tickets for families, accommodating a graduating class of over 600 students",
      link: "https://www.google.com",
      technologies: ["EJS", "Node.js", "MongoDB", "CSS", "HTML"],
      projectType: "School Project",
      lastUpdated: "2024-05-02"
    },
    {
      id: 4,
      title: "Swift Todo List App",
      image: "/images/todolist.png",
      description: "A basic todo list app built with Swift and SwiftUI that allows users to add, edit, and delete tasks in different categories, adding organization through boards and progress tags",
      link: "https://www.google.com",
      technologies: ["Swift", "SwiftUI"],
      projectType: "Personal Project",
      lastUpdated: "2024-06-15"
    },
    {
      id: 5,
      title: "Linguistics Webscraper and Word Cloud Generator",
      image: "/images/linguisticswebscraper.png",
      description: "A webscraper that scrapes a news article website for its words and then scrapes from a dictionary website and collects all definitions. It then generates a word cloud visualization of the most frequent words, coded in Python",
      link: "https://www.google.com",
      technologies: ["Python", "BeautifulSoup", "WordCloud", "Matplotlib"],
      projectType: "Personal Project",
      lastUpdated: "2025-04-01"
    },
    {
      id: 6,
      title: "Personal Website",
      image: "/images/portfolio.png",
      description: "This is my personal website, built with Next.js, Tailwind CSS, and Shadcn UI",
      link: "https://www.google.com",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
      projectType: "Personal Portfolio",
      lastUpdated: "2025-03-24"
    }
  ];

  return (
    <div className="relative w-full max-w-[70vw] mx-auto py-10">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-16 z-10">
        <Button id="prevBtn" variant="ghost" size="icon">
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        coverflowEffect={{
          rotate: -15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-full h-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="w-[500px]">
            <ProjectCard 
            title={item.title} 
            image={item.image} 
            description={item.description} 
            link={item.link} 
            technologies={item.technologies} 
            projectType={item.projectType} 
            lastUpdated={item.lastUpdated} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Positioned Below */}
      <div className="custom-pagination mt-4 flex justify-center"></div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -right-16 z-10">
        <Button id="nextBtn" variant="ghost" size="icon">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
