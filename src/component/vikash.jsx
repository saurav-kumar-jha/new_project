import { useState } from 'react'
import { BiHide } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { toast, ToastContainer } from 'react-toastify';

import './App.css'


function App() {
  const[formdata, setformData] = useState({firstname:"",secondname:"",password:"",confirmpassword:"",email:""})
  const[showpassword1, setshowPassword1] = useState(false);
  const[showpassword2, setshowPassword2] = useState(false);
  const handleChange = (event) => {
    setformData({
      ...formdata,
      [event.target.name] : event.target.value
    }
    );
  };
  const submitHandler = (event)=>{
    event.preventDefault()
    if(formdata.password === formdata.confirmpassword){
      toast.success("data submited",{
        onClose: ()=>{
          window.location.reload();
        }
      })
    }
    if(formdata.password !==formdata.confirmpassword){
      toast.error("password and confirmpassword must be same")
    }
  }

  return (
    <>
      <div className='sm:h-screen h-auto w-screen container flex flex-col items-center'>
        <h1 className='w-1/2 h-auto border-4 border-white text-neutral-600 duration-300 hover:text-sky-300 hover:border-fuchsia-400 font-extrabold text-center mt-14  text-[4vw] rounded-3xl'>Student Login</h1>
        <div >
          <form  onSubmit={submitHandler} >
            <div className='flex gap-5 mt-4 sm:flex-row flex-col'>
            <label >
              <p>First Name</p>
              <input type="text" placeholder='First Name' id='inp' name='firstname' onChange={handleChange} value={formdata.firstname} required className='input '/>
            </label>
            <br></br><br></br>
            <label >
              <p>Last Name</p>
              <input type="text" placeholder='Last Name' id='inp' name='secondname' onChange={handleChange} value={formdata.secondname} required  className='input '/>
            </label>
            </div>
            <div className='mt-4'><label >
              <p>Email address</p>
              <input type="email" placeholder='Email' id='inp' name='email' onChange={handleChange} value={formdata.email} required  className='input '/>
            </label></div>
            <div className='flex gap-5 mt-4 sm:flex-row flex-col'>
            <label >
              <p>Password</p>
              <div className='flex content-evenly'><input id='pass' type={showpassword1 ? 'text' : 'password'} placeholder='Password' name='password' onChange={handleChange} value={formdata.password} required  className='input '/>
               <span className='bg-black text-white pt-3 rounded-r-lg' onClick={()=>setshowPassword1((prev)=>!prev)}>{showpassword1 ? < GrView style={{width:'35px' }}/> : < BiHide style={{width:'35px' }}/>}</span></div>
            </label>
            <label >
              <p>confirm password</p>
              <div className='  flex content-evenly'><input id='pass' type={showpassword2 ? 'text' : 'password'} placeholder='confirm password' name='confirmpassword' onChange={handleChange} value={formdata.confirmpassword} required  className='input '/>
              <span className='bg-black text-white pt-3 rounded-r-lg outline-none' onClick={()=>setshowPassword2((prev)=>!prev)}>{showpassword2 ? < GrView style={{width:'35px' }}/> : < BiHide style={{width:'35px' }}/>}</span></div>
            </label>
            </div>
            <button className='sm:none mb-10 w-1/2 h-[35px] rounded-sm text-white font-extrabold bg-blue-700 mt-24 ml-20'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
