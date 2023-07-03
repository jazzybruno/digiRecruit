

const Header = () => {
    return (
      <header className="bg-white flex justify-between items-center w-[93%] pt-3">
        <div className="flex flex-row bg-white gap-5 font-normal">
          <h3 className=" cursor-pointer font-bold duration-700 hover:text-blue-400 hover:font-semibold hover:translate-y-1 hover:scale-[1] hover:underline hover:underline-offset-4  ">
            Home
          </h3>
          <h3 className=" cursor-pointer font-bold duration-700 hover:text-blue-400 hover:font-semibold hover:translate-y-1 hover:scale-[1]  hover:underline hover:underline-offset-4  ">
            Why Choose Us
          </h3>
          <h3 className=" cursor-pointer font-bold duration-700 hover:text-blue-400 hover:font-semibold hover:translate-y-1 hover:scale-[1]  hover:underline hover:underline-offset-4  ">
            Subscription
          </h3>
        </div>
        {/* the logo of the site  */}
        <div>
          <h2>LOGO</h2>
        </div>
        {/* the login and sign up buttons */}
        <div className="flex flex-row bg-white gap-5 font-normal">
          <a className="border-sky-500  border-[1px] px-5 py-2 rounded-md text-sky-500 cursor-pointer transition duration-700 ease-in-out hover:scale-100 hover:bg-sky-500 hover:text-white ">
            Signup
          </a>
          <a className="bg-sky-500 border-0 px-5 py-2 rounded-md text-white cursor-pointer transition duration-700 ease-in-out  hover:bg-white hover:text-[#38b2d3] hover:border-2 hover:border-[#38b2d3] ">
            Login
          </a>
        </div>
      </header>
    );
}
 
export default Header;