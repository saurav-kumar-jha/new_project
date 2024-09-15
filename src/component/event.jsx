export const Eventhandling = ()=>{
    const handleButtonClick = (e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.type);
        
        
        alert('hey i m clicked:')
    }

    return(
        <>
            <button onClick={handleButtonClick} className="border-2 h-9 w-auto p-1 hover:rounded bg-emerald-500">click me</button>
        </>
    )
}