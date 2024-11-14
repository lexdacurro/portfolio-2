"use client"
import React, {useEffect, useState} from "react";

import { SidebarTrigger } from "@/components/ui/sidebar"
import ExperienceList from "@/components/experience-list";
import SkillsList from "@/components/skill-list";
import PersonalProjectList from "@/components/personal-project-list";

import useDataStore from "@/hooks/use-datastore";


// import BlurFade from "@/components/ui/blur-fade";
// import TypingAnimation from "@/components/ui/typing-animation";
// import BoxReveal from "@/components/ui/box-reveal";
// import SparklesText from "@/components/ui/sparkles-text";
// import Link from "next/link";


export default function Home() {

  const { appendItems } = useDataStore();
  
  const fetchAndAppendItems = async () => {
    try {
      const response = await fetch('/resume.json');
      const newData: [] = await response.json();
      appendItems(newData); 
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchAndAppendItems();
  }, []);

 

  return (
    // <BlurFade delay={0.04} yOffset={8} inView> </BlurFade>
    <div className="flex flex-col gap-[30px]">
    
      <div className="flex justify-between justify-items-center py-5">
        <div className="text-xl"><SidebarTrigger />My Resume</div>
        {/* <div><ThemeSwitcher/></div> */}
      </div>
      
      <div className="container">
        {/* <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white"
          text="Typing Animation"
        /> */}
        <div className="text-[40px] font-extrabold"> Hello, My name is Alexe Dacurro 👋 </div>
        <div className="my-4 font-light">I create user-friendly web app that enhance the overall user experience while ensuring code efficiency and maintainability.</div>
      </div>
      <div className="container" id="about"> 
        <div className="text-[20px] font-bold underline underline-offset-8"> About Me </div>
        <div className="my-4 font-light flex flex-col gap-2">
          <p> Born and raised in the Philippines, I moved to the USA a few years ago (feels like ages ago, honestly 😅). I'm an aviation enthusiast at heart—always dreamed of being a pilot. But then Friendster came along and completely changed the game for me. Suddenly, I was all about designing web pages instead of flying planes! ✈️</p>

          <p>I've always thought of myself as an artist, and web design gave me the creative freedom I never knew I needed. I dove into web development pretty early on—learning HTML/CSS and jQuery during the Friendster "epidemic" that swept across the Philippines on the later 2000s</p>

          <p> I kicked off my career as an intern, and by the time I turned 19, I was already working as a UI Designer/Developer for a small tech startup in the Philippines. And that, my friends, was the spark that launched my career journey! 🚀</p>
        </div>
      </div>
      <ExperienceList/>
      <SkillsList/>
      <PersonalProjectList/>
      {/* <h2> BLOG TYPE: WHY NO SOCIAL MEDIA? </h2>
      <h2> Well, First of all I'm a very private person. My one and only social media account (Facebook) is managed by my Wife and I only use it to communicate with Family & Friends in the Philippines</h2> */}
    </div>
    
  )
}
