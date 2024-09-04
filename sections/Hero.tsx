"use client";
import memojiImage from "@/assets/images/brown-hair-guy-with-laptop.png";
import ArrowSign from "@/assets/icons/arrow-down.svg";
import WaveEmoji from "@/assets/icons/wave.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src}` }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300"></StarIcon>
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[140px]"
          ></Image>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Availabe for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high-perfoming
            web applications. Let's discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8  ">
          
          <button className="inline-flex items-center gap-2 border border-white/15 px-5 h-12 rounded-xl ">
            <span className="font-semibold">Explore My Work</span>
            <ArrowSign className="w-4 h-4"></ArrowSign>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 sm:px-5 px-7 rounded-xl">
            <span>
              <Image src={WaveEmoji} alt="wave" width={20} height={20}></Image>
            </span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
