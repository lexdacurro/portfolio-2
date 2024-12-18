"use client";
import React, { useState, useEffect} from "react";

import { Copy } from "lucide-react";
import "./globals.css";
import { Noto_Sans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import SparklesText from "@/components/ui/sparkles-text";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SplashPage from "@/components/splash-page";
import useInteractionStore from '@/hooks/use-interaction';
import useDialogStore from "@/hooks/use-dialogstore";
import BlurFade from "@/components/ui/blur-fade";
import CustomDock from "./widget/customDock";
import ThemeSwitcher from "./widget/themeSwitcher";
const NotoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'], 
  style: 'normal',
  display: 'swap'
})


// export const metadata: Metadata = {
//   title: "Alexe Dacurro Resume",
//   description: "Alexe Dacurro Resume - Software Engineer, Hire Me",
// };

// export
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const { isClicked, isSideBarOpen} = useInteractionStore();
  const [showHome, setShowHome]  = useState(false);
  
  const { isOpen, closeDialog } = useDialogStore();
  useEffect(() => {
    if (isClicked) {
      setShowHome(true); 
    }
  }, [isClicked]);
  useEffect(() => {
    // console.log('Updated showHome:', showHome); 
    document.body.style.overflowY = !showHome ? 'hidden' : 'auto'
  
  }, [showHome]);

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
          />
        </head>
        <body className={`${NotoSans.className} antialiased`}>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="py-12">
             
              {
                !showHome ?   
                <SplashPage/> :  
                <div className="main">
                  {children}
                
                  <Dialog open={isOpen} onOpenChange={closeDialog} >
                    {/* <DialogTrigger>{value.toString()}</DialogTrigger> */}
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Thank you! Arigato! Danke! Salamat!</DialogTitle>
                        {/* <DialogDescription> */}
                          <SparklesText text=" Thank you so much for your Interest! If you'd like to hire me or if you'd like us to work together contact me using the email below:" className="text-md font-light"> </SparklesText>
                          <div className="flex items-center space-x-2 pt-4">
                            <div className="grid flex-1 gap-2">
                              <Label htmlFor="link" className="sr-only">
                                Link
                              </Label>
                              <Input
                                id="link"
                                defaultValue="alexedacurro@gmail.com"
                                readOnly
                              />
                            </div>
                            <Button type="submit" size="sm" className="px-3">
                              <span className="sr-only">Copy</span>
                              <Copy />
                            </Button>
                        </div>
                        {/* </DialogDescription> */}
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                 
              }
            </div>
          </ThemeProvider>
          {/* { children } */}
        </body>
      </html>
    </>
  )
}
