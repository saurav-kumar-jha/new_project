import { useEffect, useState } from "react"

export const Toggle = ()=>{
    const [Switch, setSwitch] = useState()
    useEffect(()=>{
      console.log("changed")
    },[Switch])
    return(
        <>
          <div className='h-20 w-48 border-white border radius'>
            <div className="h-16 w-16 border flex justify-center items-center border-zinc-700 rounded-full mx-2 my-2 cursor-pointer" id={Switch?"on":"off"} onClick={()=>{setSwitch((Switch) => !Switch)}} >
                <span>{Switch?"ON":"OFF"}</span>
            </div>
          </div>
        </>
    )
}