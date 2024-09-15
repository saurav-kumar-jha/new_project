const Hero = ()=>{
    return(
        <>
            {/* <video  src="/src/assets/2.mp4" autoPlay loop muted></video> */}
            <div className="h-screen w-full bgColor">
                <div className="flex h-auto w-10/12 border m-auto justify-between border-transparent">
                    <div className="px-3 py-12 m-4">
                        <img className="h-80 rounded object-cover" src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="px-3 flex items-center justify-center flex-col py-16 border border-transparent font-sans m-4">
                        <h1 className="font-serif font-semibold text-2xl text-left" >Hello I'M SAURAV KR JHA</h1>
                        <p className="text-center font-mono">WEB-DEVELOPER,JAVA DEVELOPER</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero