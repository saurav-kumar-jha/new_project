// import Public from '/public.json'
// This is example of loop in React js How i use and how to implement

const PublicData = () => {
    const share = ()=>{
        alert('share karega laude apni shakal dekhi hai?')
    }
    return (
        <>
            <ul>
                {Public.map((current) => {
                    return (
                        <li key={current}>
                            <div className="container h-auto w-96 rounded-lg text-center m-5 px-5 py-4 bg-zinc-800 hover:bg-zinc-900 duration-500 ">
                                <img src={current.img} title={current.name} alt="profile" className="rounded-lg w-28 h-28 object-cover" />
                                <h2 className="font-bold my-1 text-center text-xl leading-8 " title={current.name}>{current.name}</h2>
                                <p className="text-sm my-2" >{current.about} </p>
                                <button className="h-auto w-auto border leading-5 hover:border-black rounded cursor-pointer outline-none border-transparent py-1 px-2 bg-gray-300 text-black font-semibold uppercase" onClick={share} >share</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default PublicData