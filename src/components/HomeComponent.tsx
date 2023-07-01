import group2 from "../images/group2.svg"
import "../assets/Othercss.css"
import Avatar from '@mui/material/Avatar';
import Me from "../images/me.jpg"

const HomeComponent = () => {
    return (  
        <div className="align items-center justify-center p-5">
        {/* the image photo */}
            <div id="mainDiv" className="flex items-center justify-center w-[100%]">
            <div className="w-[70%] bg-white-200  p-20 flex flex-col space-y-24">
                <div>
                <h1><span className=" text-customPink">World's</span> Best & Trusted Recruitment Site!</h1>
                <p className="text-xl my-5 font-bold text-black" >Where people seeking jobs fuel their life long careers</p>
                <a href="#" className="bg-customPink font-bold px-6 py-3 rounded-md text-white cursor-pointer transition duration-700 ease-in-out border-2 border-white shadow-md  ">Get Started</a>
                </div>
                <div>
                <h2 className="my-2 font-bold text-xl text-black">New Job Seekers</h2>
                <div className="flex gap-4">
                <Avatar alt="Remy Sharp" src={Me} />
                <Avatar alt="Travis Howard" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                </div>
                </div>
            </div>
            <div className="w-[30%] bg-pink-400">
                {/* <img src={group2} alt="" /> */}
            </div>
            </div>
        </div>
    );
}
 
export default HomeComponent;