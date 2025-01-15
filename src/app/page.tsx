"use client"
import React, {useEffect, useState, useRef} from "react";

import { cn } from "@/lib/utils";
import ExperienceList from "@/components/experience-list";
import SkillsList from "@/components/skill-list";
import PersonalProjectList from "@/components/personal-project-list";


// import BlurFade from "@/components/ui/blur-fade";
import TypingAnimation from "@/components/ui/typing-animation";
import HyperText from "@/components/ui/hyper-text";
// import BoxReveal from "@/components/ui/box-reveal";
import TextReveal from "@/components/ui/text-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { FadeText } from "@/components/ui/fade-text";
import BlurFade from "@/components/ui/blur-fade";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { ArrowDownCircle, ArrowUpCircle, FileUser } from "lucide-react";
import RetroGrid from "@/components/ui/retro-grid";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import IconCloud from "@/components/ui/icon-cloud";
import CustomDock from "./widget/customDock";
import WordPullUp from "@/components/ui/word-pull-up";
import ThemeSwitcher from "./widget/themeSwitcher";
import useDataStore from "@/hooks/use-datastore";

const slugs = [
  "typescript",
  "javascript",
  "vuedotjs",
  "react",
  "htmx",
  "css3",
  "figma",
  "nodedotjs",
  "nuxtdotjs",
  "nextdotjs",
  "openlayers",
  "leaflet",
  "adobe",
  "python",
  "pandas",
  "geopandas",
  "php",
  "amazonaws",
  "laravel"
];

export default function Home() {
  
  const [text, setText] = useState("Analyzing your input...")
  const [hideCoolEffects, setHideCoolEffects ] = useState(true)
  const [showNextEffect, setNextEffect] = useState(false)
  const [showDecryptEffect, setDecryptEffect] = useState(false)
  const [showProfile, setProfile] = useState(false)
  const [isBottomScrollerVisible, setBottomScrollerVisible] = useState(true)
      
  const { items, fetchItems  } = useDataStore();
  useEffect(()=>{
    fetchItems()
  },[fetchItems])


  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setBottomScrollerVisible(!scrolledToBottom);
  }
  
  // faux loading 
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setText("Records found!")
   
    }, 1000)
    const timer2 = setTimeout(() => {
      setNextEffect(true)
   
    }, 1500)
    const timer3 = setTimeout(() => {
      setDecryptEffect(true)
   
    }, 2300)
    const timer4 = setTimeout(() => {
      setHideCoolEffects(false)
    
    }, 2500)
    const timer5 = setTimeout(() => {
      setProfile(true)
      setDecryptEffect(false)
    }, 4000)

  
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    // <BlurFade delay={0.04} yOffset={8} inView> </BlurFade>
    <div className="max-w-full">
      
      { 
        hideCoolEffects &&   
        <div className={`container mx-auto px-6 flex gap-3 items-center transition-opacity ease-in-out delay-150`}> 
        { !showNextEffect ? <LoadingSpinner className="w-5"></LoadingSpinner> : "✅" }
        
        <TypingAnimation className="text-md px-6 font-mono" text={text} duration={20} key={text}></TypingAnimation>
      </div>
      }
      
      {
        showDecryptEffect && 
        <div className="container px-6 mx-auto flex gap-3 items-center "> 
          <LoadingSpinner className="w-5"></LoadingSpinner>
          <HyperText className="text-md font-mono" text="Decrypting & Generating Profile..." duration={2}></HyperText>
        </div>
      }

      {
        showProfile && 
          <div id="my-profile">
            <BlurFade delay={0.5}>  
              <div className="container mx-auto h-[80vh] px-6 flex flex-col justify-center transition-opacity ease-in-out delay-100">
              
                <div className="text-[40px] font-extrabold flex gap-3 items-center"> 
                     
                    <span className="block md:hidden"> Hello 👋 My name is Alexe Dacurro </span>
                    <span className="hidden md:block"> Hello</span>
                    <picture className="hidden sm:block">
                      <source
                        srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                        type="image/webp"
                      />
                      <img
                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                        alt="👋"
                        width={32}
                        height={32}
                      />
                    </picture>
                    <span className="hidden md:block"> My name is Alexe Dacurro</span>
    
                  </div>
                  <div className="my-4 font-light dark:text-gray-200 ">I create user-friendly web app for a living. I enjoy building interactive pages too</div>
                  
              </div>
             
              <div id="storyblock-2" className="bg-red">
                <TextReveal text="A Little something about me" ></TextReveal>
              
              </div>
              <div className="container mx-auto px-6 sm:h-80">
                <div id="storyblock-3">
                  <div className="container lg:h-[40vh] h-[80vh] flex flex-col justify-start transition-opacity ease-in-out delay-100" id="about"> 
                    <div className="text-[20px] font-bold underline underline-offset-8"> My Story</div>
                    <div className="my-4 font-light flex flex-col gap-2 dark:text-gray-200">
                      <p className="leading-9"> Born and raised in the Philippines, I moved to the USA a few years back (feels like forever 😅). Aviation was my first love—always dreamed of being a pilot! But then Friendster came along and changed everything. Suddenly, I was designing web pages instead of planning flight paths! ✈️</p>
                      <p className="leading-9"> 
                      I got into web dev early, learning HTML/CSS and jQuery during Friendster’s golden days (everyone was on Friendster; MySpace who?). Soon enough, I was designing Friendster profiles for friends and family, sometimes for a few pesos or just a "Testimonial" (think Facebook comments or a like reaction lol)! By 19, I was already a UI Designer/Developer for a small startup in the Philippines. And that’s how my journey as a web developer took off! 🚀</p>
                    </div> 
                  </div>
                </div>
                
              </div>
             
              <BlurFade duration={0.5}>
                <div id="storyblock-4" className="">
                  <div className=" fade-bottom relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
                    <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-7xl font-bold leading-none tracking-tighter">
                      My Journey as a Developer
                    </span>
              
                    <RetroGrid />
                  </div>
                </div>
                <div id="storyblock-5" className="container mx-auto py-8 px-6">
                  <ExperienceList headerText="The Journey" />
                  
                </div>
              </BlurFade>
              <div id="storyblock-5" className="py-16">
                <TextReveal className="h-[90vh]" text="I also design websites on my free time! "/>
                <TextReveal className="h-[50vh]" text="Here are my latest work"/>

              </div>
              <div id="storyblock-5" className="container mx-auto py-16 px-6">
                <PersonalProjectList/>

              </div>
              <div id="storyblock-6" className="lg:py-12 container mx-auto max-sm:hidden">
              
                <div className="h-screen flex flex-col gap-4 justify-center items-center">
                  <div className="relative overflow-hidden bg-background px-20 pb-20 pt-8 ">
                   
                    <IconCloud iconSlugs={slugs} />
                  </div>
                </div>
              </div>
              <div id="storyblock-6" className="py-12 container mx-auto px-6">
                <SkillsList></SkillsList>
              </div>
              <div id="storyblock-7" className="py-12 container mx-auto px-6">
                <div className="flex justify-center items-center h-[70vh]">
                  <WordPullUp
                    className="text-3xl font-bold tracking-[-0.02em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    words="Let's work together or Hire me as your developer! It's up to you! 😉"
                  />
                </div>
               
                <div className="text-center pb-5"><span>Contact me @:</span></div>
                <CustomDock />
              </div>
              
              
              
          </BlurFade>
          <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg animate-bounce z-50">
            {
              isBottomScrollerVisible ? <ArrowDownCircle className="w-5 h-5" /> : <ArrowUpCircle className="w-5 h-5" />
            }
            <span className="text-sm font-medium">{ isBottomScrollerVisible ? "Scroll to continue" : "Scroll to go back" } </span>
          </div>
          <div className="fixed bottom-4 left-4 flex items-center space-x-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg animate-bounce z-50">
            <FileUser className="w-5 h-5"/>
            <span className="text-sm font-medium"> <a href="/resume"> View Resume </a></span>
          </div>
         </div>
      }
      
    </div>
    
  )
}
