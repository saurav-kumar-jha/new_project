import { useState } from "react"
export const State = ()=>{
    const[count,setCount] = useState(0);
    const handlebtn = ()=>{
        setCount(()=> count+1)
    }
    console.log(count);
    
    return(
        <>
          <h1 className="mx-10 my-5">{count}</h1>
          <button className="border rounded h-8 m-5 w-auto px-1 bg-green-800" onClick={handlebtn}>INCREMENT</button>
        </>
    )
}