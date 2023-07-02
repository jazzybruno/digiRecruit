const ReadyToStartComponent = () => {
    return ( 
        <div className="w-[100%] h-[50vh] bg-white flex justify-center items-center">
            <div className="w-[80%] h-[70%] flex justify-center items-center bg-[#ee6370] rounded-3xl"> 
                <div className="w-[50%] flex justify-center items-center">
                    <h1 className="text-white font-bold w-[80%]">Are you ready to start Right now!</h1>
                </div>
                <div className="w-[50%] flex justify-center items-center gap-5">
                    <a className="px-5 py-3.5 bg-white rounded-lg text-[#ee6370] font-bold border-2 border-[#ee6370]" href="#">Get Started</a>
                    <a className="px-5 py-3 text-white rounded-lg bg-[#ee6370] font-bold  border-2 border-white" href="#">Contact Us</a>
                </div>
            </div>
            </div>
     );
}
 
export default ReadyToStartComponent;