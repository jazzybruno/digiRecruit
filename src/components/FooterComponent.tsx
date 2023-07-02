const FooterComponent = () => {
    return ( 
        <div className="w-[100%] bg-[#0b182c] text-white flex flex-row justify-center items-center">
            <div className="w-[40%] flex flex-col ">
              <div>  <p>Subscribe to our newsletter</p>
                <div>
                    <input type="text" name="" id="" />
                    <button>Submit</button>
                </div>
                </div>
                <div>
                    <p>Follow us on social media</p>
                    <div className="flex flex-row justify-start items-center~">
                        <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                        <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                        <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                        <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                        </div>
                </div>
            </div>
            <div className="w-[60%] flex flex-col">Hello World this is the second part</div>
        </div>
     );
}
 
export default FooterComponent;