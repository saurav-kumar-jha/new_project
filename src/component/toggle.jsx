import { useState } from "react"

export const Toggle = ()=>{
    const [Switch, setSwitch] = useState(false)
    return(
        <>
          <div className='h-20 w-48 border-white border radius'>
            <div className="h-16 w-16 border flex justify-center items-center border-zinc-700 rounded-full mx-2 my-2" onClick={()=>{setSwitch((Switch) => !Switch)}} >
                <span className={Switch?"on":"off"} >{Switch?"ON":"OFF"}</span>
            </div>
          </div>
        </>
    )
}