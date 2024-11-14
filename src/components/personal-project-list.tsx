"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card
} from "@/components/ui/card"
import useDataStore from "@/hooks/use-datastore";

export default function PersonalProjectList() {
  const { items } = useDataStore();
 

  return (
    <div className="container lg:w-3/4 sm:w-auto">
      <div className="text-[20px] font-bold underline underline-offset-8"> Personal Projects </div>
      <div className="container py-8">
      
      {
        items.map((element : any) => (
          element.text != "Personal Projects" ||
          element.items.map((subitem : any, subindex : any) =>(
          
            <div className="mb-3" key={subindex} id={subitem.link}> 
              <p className="text-[18px] font-semibold">
                  { subitem.text } 
              </p>
              <div className="flex flex-col sm:flex-row gap-4"> 
              {
                subitem.projects.map((r : any,i : any)=>(
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950 my-5 " key={i}>
                    
                    <Link href={r.link || "#"} target="_blank">  
                      <Card className="group relative w-full max-w-lg overflow-hidden" >
                        <div className="relative aspect-[16/10]">
                          {/* Background image */}
                          <Image
                            alt="Project background"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 object-top overlay"
                            src={ '/' + r.img }
                            width={600} height={400}
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                          {/* Content */}
                          <div className="absolute bottom-0 left-0 p-6 space-y-2">
                            <h3 className="text-md font-semibold leading-tight text-white">
                              { r.title }
                            </h3>
                            <p className="text-sm text-white/90">
                              { r.type }
                            </p>
                            <p className="text-xs text-white/70">
                              { r.stack }
                            </p>
                            
                          </div>
                        </div>
                      </Card>        
                    </Link>
                      
                  </div>
                ))
                
                  
              }
              </div>
            </div>
            
          ))
        ))
      }
        
    </div>


    </div>
    
  )
}
