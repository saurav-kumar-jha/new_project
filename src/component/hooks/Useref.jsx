import { useEffect, useRef, useState } from "react"


export const Useref = ()=>{
    const [Inputvalue,setInputvalue] = useState("")
    const count = useRef(0)
    useEffect(()=>{
        count.current = count.current + 1;
    })

    return(
        <>
          <div>
            <input type="text" value={Inputvalue} onChange={(f)=> setInputvalue( f.target.value)} />
            <h1>Count Rerendreing : {count.current}</h1>
          </div>
        </>
    )
}