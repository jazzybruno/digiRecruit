import group2 from "../images/group2.svg"
import "../assets/Othercss.css"
import Avatar from '@mui/material/Avatar';
import Me from "../images/me.jpg"

const HomeComponent = () => {
    return (  
        <div className="align items-center justify-center p-5">
        {/* the image photo */}
            <div id="mainDiv" className="flex items-center justify-center w-[100%]">
            <div className="w-[70%] bg-white-200  p-20 flex flex-col space-y-3">
                <h1 className="font-custom"><span className="text-pink-400">World's</span> Best& Trusted Recruitment Site!</h1>
                <p>Where people seeking jobs fuel their life long careers</p>
                <a className="bg-pink-400 border-0 px-5 py-2 rounded-md text-white cursor-pointer transition duration-700 ease-in-out hover:translate-y-1 hover:scale-100 hover:bg-white hover:text-pink-400 hover:border-2 hover:border-pink-400 ">Get Started</a>
                <h2>New Profiles</h2>
                <div className="flex gap-4">
                <Avatar alt="Remy Sharp" src={Me} />
                <Avatar alt="Travis Howard" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                <Avatar alt="Cindy Baker" src={Me} />
                </div>
            </div>
            <div className="w-[30%] bg-pink-400">
                <img src={group2} alt="" />
            </div>
            </div>
        </div>
    );
}
 
export default HomeComponent;