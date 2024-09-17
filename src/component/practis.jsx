import { useState } from "react";

const User = [
    {name:"Alice",age:25},
    {name:"Bob",age:30},
    {name:"Charlie",age:35},
    {name:"Angles",age:45},
    {name:"Saurav",age:19}
];

// this is by map function ---------------------------



export const Pratice = ()=>{
    return(
        <>
            {User.map((current)=>{
                return(
                    <>
                     <div className="border rounded h-20 m-5 p-4" key={current} >
                        <h1 >{current.name}</h1>
                        <h2>{current.age}</h2>
                     </div>
                        
                    </>
                )
            })}
            <Nextperson/>
        </>
    )
}

// this is by usestate ---------------------------------


const Nextperson = ()=>{
    const [increaseP , setIncrease] = useState(0);
    console.log(User.length);
    const next = ()=>{
        if(increaseP < User.length - 1){
            setIncrease(()=> increaseP + 1)
        }else{
            alert("No more entities")
        }
    }
    return(
        <>
          <div>
             <div className="border rounded h-20 m-5 p-4">
                <h1 >{User[increaseP].name}</h1>
                <h2>{User[increaseP].age}</h2>
              </div>
              <button className="border rounded h-8 w-auto px-4 py-2" onClick={next}>next</button>
          </div>
        </>
    )
}