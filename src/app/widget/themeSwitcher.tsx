"use client"
import React, {useEffect, useState} from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from  "lucide-react"
 
export default function ThemeSwitcher() {
   
    const { theme, setTheme } = useTheme();

    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Moon className="dark:hidden" />
        <Sun className="hidden dark:block" />
      </Button>
    );
   
}
