"use client"
import React from "react"
import { Download } from "lucide-react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarHeader,
SidebarFooter,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
} from "@/components/ui/sidebar"
import useDialogStore  from "@/hooks/use-dialogstore";
import useDataStore from "@/hooks/use-datastore";
import { HomeIcon } from "lucide-react"
import { useRouter } from 'next/navigation'

export function AppSidebar() {
  
    const router = useRouter();
    const {  openDialog } = useDialogStore();

    const { items }  = useDataStore();
  
    return (
        <Sidebar>
            <SidebarHeader className="p-8"> 
                <div className="flex items-center space-x-2 px-4 py-2">
                    <Image src="/linkedin.png" width={20} height={20} style={{ objectFit : "contain" }} alt="Linked Profile of Alexe Dacurro"/>
                    <span className="font-bold text-base/[18px]">LinkedIn Profile</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2">
                    <Image src="/behance.png" width={20} height={20} style={{ objectFit : "contain" }} alt="Behance Profile of Alexe Dacurro"/>
                    <span className="font-bold text-base/[18px]">Behance Profile</span>
                </div>
            </SidebarHeader>
            <SidebarContent className="px-7 pb-7">
                <SidebarGroup />
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={()=>{ router.push('/')}}> 
                                <HomeIcon/> Home 
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                       
                        
                        {items.map((menuItem : any, index : any) => (
                            <div key={index}>
                                <SidebarGroupLabel>{menuItem.text}</SidebarGroupLabel>
                                {menuItem.items.map((item : any, subIndex : any) => (
                                    
                                    <SidebarMenuItem key={subIndex}>
                                        <SidebarMenuButton asChild>
                                            <Link href={`#${item.link}`}>
                                            <span>{item.text}</span>
                                            </Link> 
                                        </SidebarMenuButton>
                                    </SidebarMenuItem> 
                                ))}
                            </div>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter className="z-0"> 
                <Button onClick={openDialog}>
                    <Download/><a href="Resume-_-AlexeDacurro.pdf" download={true}> Download My Resume </a> 
                </Button>
            </SidebarFooter>
        </Sidebar>
       
    )
}
  