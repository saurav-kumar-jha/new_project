import React from 'react'
const Profile = (props)=>{
    return(
        <>
            <div className="container">
                <img src={props.img} alt="profile" />
                <h2>{props.name}</h2>
                <p>{props.about} </p>
                <button onClick={alert("laude sakal dekhi hai share karega tu::")} >share</button>
            </div>
        </>
    )
}
export default Profile