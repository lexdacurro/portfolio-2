"use client"
import useDataStore from "@/hooks/use-datastore";

export default function ExperienceList() {
  
  const { items } = useDataStore();
  
  return (
    <div className="container lg:w-3/4 sm:w-auto">
        <div className="text-[20px] font-bold underline underline-offset-8"> Work Experience </div>
        
        <ul role="list" className="">
        {
          items.map((element : any) => (
            element.text == "Work Experience" ?
            element.items.map((subitem : any, subindex : any) =>(
              <li className="flex justify-between gap-x-6 py-5" key={subindex} id={subitem.link}>
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-[18px] font-semibold">
                      { subitem.text } 
                    </p>
                    <p className="mt-1 truncate text-base/5 font-light">
                      { subitem.position } 
                    </p>
                    <p className="mt-1 mb-6 truncate text-sm/5 font-light">
                      { subitem.year } | { subitem.location } 
                    </p>
                    
                    <ul className="list-disc pl-[20px] light:text-gray-800">
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
