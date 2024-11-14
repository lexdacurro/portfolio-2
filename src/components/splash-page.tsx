'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import useInteractionStore from '@/hooks/use-interaction'

export default function SplashPage() {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState<boolean>(true)
 
  const { redirectToMain } = useInteractionStore();

  
  const handlesClickToRedirect = () => {
    redirectToMain(); // State update is scheduled
  };

    
  const inputRef = useRef<HTMLInputElement>(null)
  const fullText = "Who is Alexe Dacurro? "

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [text])

  return (
    <div className="min-h-screen p-6">
      {/* <div className="absolute left-6 top-6">
        <h1 className="text-xl font-semibold text-white">My Resume</h1>
      </div> */}
      
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
       
        <h2 className="text-2xl font-semibold dark:text-white text-black">
          Hello there 🙋‍♂️, How can I help you with?
        </h2>
        
        <div className="relative w-full max-w-md">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={text}
              placeholder="Enter your Prompt Here"
              onChange={() => {}}
              className="w-full  dark:bg-zinc-700 bg-white dark:text-white text-black rounded-2xl py-3 pl-4 pr-12  "
            //   style={{ caretColor: 'transparent' }}
              aria-label="Search input"
            />
            <div 
              className="absolute left-0 top-0 flex items-center h-full pl-4 pointer-events-none"
              aria-hidden="true"
            >
              <span className="dark:text-white whitespace-pre">{text}</span>
              {/* <span className="dark:text-white">{showCursor ? '|' : ' '}</span> */}
            </div>
          </div>
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 cursor-pointer" aria-hidden="true"  onClick={handlesClickToRedirect}/>
        </div>
        <div className="flex gap-2 items-center text-xs font-light pulsating"> Click <Search className="h-3 w-3 dark:text-white text-black cursor-pointer" aria-hidden="true" /> to continue</div>
      </div>
      
    </div>
  )
}