"use client"
import { Badge } from "@/components/ui/badge"
import useDataStore from "@/hooks/use-datastore";

export default function SkillsList() {
  
  const { items } = useDataStore();
  
  return (
    <div className="container lg:w-3/4 sm:w-auto">
        <div className="text-[20px] font-bold underline underline-offset-8 "> Skills </div>
        <div>
          { items.map((element) => (
              
              element.text == "Skills" ?
              element.items.map((subitem, subindex) =>(
                <div className="flex justify-between gap-x-6 py-5" key={subindex} id={subitem.link}>
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-[18px] font-semibold mb-3">
                        { subitem.text } 
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {
                          subitem.stack.map((r,i)=>(
                            <Badge key={i}>{r}</Badge>
                          ))
                        }
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))
              : ""
              ))
          }
        </div>
      </div>
    
  )
}
