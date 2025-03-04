"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUp, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "fullstack android",
    title: "Ezy Kasir",
    description:
      "A simple and efficient point-of-sale (POS) application designed for small businesses. It helps manage sales transactions and inventory with ease.",
    stack: [{ name: "Kotlin" }, { name: "SQLite" }],
    image: "/assets/work/ezykasir.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Apk Pendataan Nilai",
    description:
      "A web-based application for recording and managing student grades. Built to simplify the grading process for teachers and school administrators.",
    stack: [
      { name: "Laravel" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "MySQL" },
      { name: "CSS" }
    ],
    image: "/assets/work/apknilai.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "EsemkaGym",
    description:
      "A fitness tracking application that allows users to monitor their workout progress and set fitness goals.",
    stack: [{ name: "Kotlin" }],
    image: "/assets/work/esgym.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "EzemKofi",
    description:
      "A mobile application designed for coffee lovers, offering a smooth ordering experience and detailed information about various coffee blends.",
    stack: [{ name: "Kotlin" }],
    image: "/assets/work/ezkofi.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "desktop",
    title: "BromoAirlines",
    description:
      "A desktop-based airline management system that helps handle ticket bookings, flight schedules, and customer details efficiently.",
    stack: [{ name: "C#" }],
    image: "/assets/work/bromo.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "desktop",
    title: "RANGGAKOCOMOTO",
    description:
    "A comprehensive optical store management application that includes features for managing lenses, frames, customers, transaction history, and invoice printing.",
    stack: [{ name: "C#" }],
    image: "/assets/work/rangga.png",
    live: "",
    github: "",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alert
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
