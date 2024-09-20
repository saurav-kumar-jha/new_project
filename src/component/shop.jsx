import { useState } from "react";
import { Cart } from "./cart.jsx";
export const Shop = (props)=>{
    const[increase,setIncrease] = useState(1);
    const addbtn = ()=>{
        setIncrease(()=> increase+1)
    }
    const subbtn = ()=>{
        if(increase > 1){
            setIncrease(()=> increase - 1)
        }else{
            alert("laude 1 se kam item tu kaise order karega")
        }
    }
    const addproduct = ()=>{
        alert(`${increase} ${props.name} added to cart!`)
    }
    return(
        <>
         <div className="border rounded-md h-auto w-auto py-4 px-3 mx-14 my-10 text-center flex flex-col justify-center items-center">
            <img className="rounded hover:scale-105 transition hover:object-contain" src={props.img} alt="" />
            <h3 className="text-center text-2xl">{props.name}</h3>
            <div className="flex justify-between items-center border-2 rounded w-20 px-2 my-4">
                <span className="cursor-pointer w-5"onClick={subbtn} >-</span>
                <p>{increase}</p>
                <span className="cursor-pointer w-5" onClick={addbtn} >+</span>
            </div>
            <p className="my-4">Prize: {props.prize}rs </p>
            <button id="shop-btn" className="border-2 rounded px-2 py-2 border-black hover:border-white bg-gray-600 focus:border-red" onClick={Cart}>ADD TO CART</button>
         </div>
         <Cart img={props.img} name={props.name} item={increase} values={props.prize} />
        </>
    )
}
