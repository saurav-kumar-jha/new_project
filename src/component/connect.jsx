import { useState } from "react"
import { toast , ToastContainer, useToast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export const Connect = () => {
    const [formdata,setformData] = useState({name:"", email:"",phone:""})
    const formInput= (event)=>{
        setformData({
                ...formdata,
                [event.target.name] : event.target.value
        })
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        if(formdata.name === ""){
            toast.error("Fill all input fields")
        }else{
            toast.success("form submiited",{
                onClose: ()=>{
                    window.location.reload()
                }
            })
        }
    }
    return (
        <>
            <form onSubmit={submitHandler} >
                <input type="text" name="name" placeholder="Enter name" value={formdata.name} onChange={formInput} required  /><br />
                <input type="email" name="email" placeholder="Enter email"  value={formdata.email} onChange={formInput} required /><br />
                <input type="tel" name="phone" placeholder="Enter mob no" value={formdata.phone} onChange={formInput}  /><br />
                <button>SUBMIT</button>
            </form>
            <ToastContainer/>
        </>
    )
}