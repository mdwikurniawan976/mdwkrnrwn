"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Chat from "@/components/chat";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none ">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello,
              <span className="text-accent">
                <Typewriter
                  words={[" I am Dwi Kurniawan", " A Junior Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Link href="/cv/CV. M. Dwi Kurniawan.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 uppercase flex-items-center"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
           
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
