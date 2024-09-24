import { useEffect, useLayoutEffect, useState } from "react"
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { toast, ToastContainer, useToast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export const Connect = () => {
    const [formdata, setformData] = useState({ name: "", email: "", phone: "", pass: "", cpass: "" })
    const formInput = (event) => {
        setformData({
            ...formdata,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (formdata.pass === formdata.cpass) {
            toast.success( "form submiited", {
                onClose: () => {
                    window.location.reload()

                }
            })
        } else {
            toast.error("Password not match")
        }
    }
    const [showpass, setshowpass] = useState(false)
    
    return (
        <>
            <form className="border border-transparent rounded h-auto w-auto px-3 py-2 text-center my-9 mx-7" onSubmit={submitHandler} >
                <h1 className="text-2xl" >CONTACT US</h1>
                <input className="h-8 w-48 bg-zinc-950 border border-transparent hover:border-white rounded outline-none px-1 py-0.5 text-sm text-white my-1 focus:shadow-lg" type="text" name="name" placeholder="Enter name" value={formdata.name} onChange={formInput} required /><br />
                <input className="h-8 w-48 bg-zinc-950 border border-transparent hover:border-white rounded outline-none px-1 py-0.5 text-sm text-white my-1 focus:shadow-lg" type="email" name="email" placeholder="Enter email" value={formdata.email} onChange={formInput} required /><br />
                <input className="h-8 w-48 bg-zinc-950 border border-transparent hover:border-white rounded outline-none px-1 py-0.5 text-sm text-white my-1 focus:shadow-lg" type="tel" name="phone" placeholder="Enter mob no" value={formdata.phone} onChange={formInput} /><br />
                <div className="h-8 w-48 flex justify-center items-center bg-zinc-950 border border-transparent hover:border-white rounded outline-none text-sm text-white my-1 focus:shadow-lg" >
                    <input className="h-8 w-44 bg-transparent border-transparent rounded outline-none px-1 py-0.5 text-sm text-white focus:shadow-lg" type={showpass ? "text" : "password"} name="pass" placeholder="Enter password" value={formdata.pass} onChange={formInput} /><br />
                    <span onClick={()=>{setshowpass((showpass)=> !showpass)}} className="border-transparent rounded cursor-pointer flex items-center justify-center h-8 w-4" >{ showpass ? <IoEyeSharp/>:<FaEyeSlash/>}</span>
                </div>
                <input className="h-8 w-48 bg-zinc-950 border border-transparent hover:border-white rounded outline-none px-1 py-0.5 text-sm text-white my-1 focus:shadow-lg" type="password" name="cpass" placeholder="Confirm password" value={formdata.cpass} onChange={formInput} /><br />
                <button className="h-auto w-auto py-1 my-1 hover:scale-105 px-3 border rounded ">SUBMIT</button>
            </form>
            <ToastContainer />
        </>
    )
}