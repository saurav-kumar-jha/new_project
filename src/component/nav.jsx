const Navbar = ()=>{
    return(
        <>
            <div className="h-14 md:lg flex justify-around items-center z-10 bg-zinc-700 w-screen m-auto px-2 py-3">
                <div>
                    <p>LOGO</p>
                </div>
                <ul className="flex justify-around items-center h-14 w-auto gap-2">
                    <li className="mx-1 text-base cursor-pointer h-9 flex items-center font-semibold border-transparent border hover:border-black hover:rounded rounded w-auto px-1 hover:bg-slate-600"><a href="/">HOME</a></li>
                    <li className="mx-1 text-base cursor-pointer h-9 flex items-center font-semibold border-transparent border hover:border-black hover:rounded rounded w-auto px-1 hover:bg-slate-600"><a href="/about">ABOUT</a></li>
                    <li className="mx-1 text-base cursor-pointer h-9 flex items-center font-semibold border-transparent border hover:border-black hover:rounded rounded w-auto px-1 hover:bg-slate-600">SKILL</li>
                    <li className="mx-1 text-base cursor-pointer h-9 flex items-center font-semibold border-transparent border hover:border-black hover:rounded rounded w-auto px-1 hover:bg-slate-600"><a href="/connect">CONNECT</a></li>
                </ul>
            </div>
           
        </>
    )
}
export default Navbar