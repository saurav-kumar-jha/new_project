

export const Project = (props)=>{
    return(
        <>
          <div className="h-auto max-h-96 min-h-72 w-64 border rounded py-3 px-4 text-center my-2 mx-3 ">
            <img className="h-48 w-52 object-cover border-transparent border rounded cursor-pointer" src={props.img} alt="project.jpeg" />
            <p className="font-serif text-sm text-white" ><strong>ABOUT: </strong> {props.about} </p>
            <button className="h-8 w-24 px-2 py-1 border rounded text-yellow-100 border-transparent bg-zinc-900 hover:border-white outline-none my-2 " title="click to see the project"><a className="no-underline hover:underline text-white hover:text-red-900" href={props.link}>SEE</a></button>
          </div>
        </>
    )
}