"use client"
import useDataStore from "@/hooks/use-datastore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ExperienceListProps {
  headerText : string
}
export default function ExperienceList({headerText} : ExperienceListProps) {
  
  const { items } = useDataStore();
  return (
    <div className="container lg:w-3/4 sm:w-auto">
        <div className="text-[20px] font-bold underline underline-offset-8"> { headerText || "Work Experience"} </div> 
        
        <ul className="my-8 ml-4 divide-y divide-dashed border-l">
        {
          items.map((element : any) => (
            element.text == "Work Experience" ?
            element.items.map((subitem : any, subindex : any) =>(
              <li className="relative ml-10 py-4" key={subindex} id={subitem.link}>
                <div className="absolute -left-16 top-4 flex items-center justify-center bg-white rounded-full">
                  <Avatar className="border size-12 m-auto">
                    <AvatarImage src={`/${subitem.avatar}`} alt={subitem.text} className="object-contain" />
                    <AvatarFallback>{subitem.text}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs  dark:text-gray-200 text-muted-foreground">{subitem.year}</time>
                  <h2 className="font-semibold leading-none">{subitem.position}</h2>
                  <p className="text-md ">{subitem.text}</p>
                  <p className="text-sm  dark:text-gray-200 text-muted-foreground">{subitem.location}</p>
                  <ul className="list-disc pl-[20px] light:text-gray-800 prose dark:prose-invert text-sm  dark:text-gray-200 text-muted-foreground">
                    {
                      subitem.responsibilities.map((r : any,i : any)=>(
                        <li key={i}>
                            <p className="text-base-[18px]">
                            { r } 
                          </p>
                        </li>
                      ))
                    }
                  </ul>
                  
                </div>
              </li>
            ))
          : ""
          ))
        }
          
        </ul>
      

      </div>
    
  )
}
