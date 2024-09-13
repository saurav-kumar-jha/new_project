import React from 'react' 
const Profile = (props)=>{
    return(
        <>
            <div className="container h-auto w-96 rounded-lg text-center m-5 px-5 py-4  ">
                <img src={props.img} title={props.name} alt="profile" className="rounded-lg w-28 h-28 object-cover"  />
                <h2 className="font-bold my-1 text-center text-xl">{props.name}</h2>
                <p className="text-sm my-2" >{props.about} </p>
                <button className="h-auto w-auto border hover:border-black rounded cursor-pointer outline-none border-transparent py-1 px-2 bg-gray-300 text-black font-semibold uppercase" >share</button>
            </div>
        </>
    )
}
export default Profile