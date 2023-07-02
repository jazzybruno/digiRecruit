import homePhoto from "../images/home.png"
import "../assets/Othercss.css"
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";
import Me from "../images/me.jpg"
import { AvatarGroup } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LargeAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
  }));
  

const HomeComponent = () => {

    useEffect(()=>{
        AOS.init({
          duration: 750,
        });
      } , [])

    return (  
        <div className="align items-center justify-center p-5 w-[100%]">
        {/* the image photo */}
            <div id="mainDiv" className="flex items-center justify-center w-[100%]">
            <div data-aos="fade-up"  className="w-[70%] bg-white-200  p-20 flex flex-col space-y-24">
                <div>
                <h1><span className=" text-customPink">World's</span> Best & Trusted Recruitment Site!</h1>
                <p className="text-xl my-5 font-bold text-black" >Where people seeking jobs fuel their life long careers</p>
                <a href="#" className="bg-customPink font-bold px-6 py-3 rounded-md text-white cursor-pointer transition duration-700 ease-in-out border-2 border-white shadow-md  ">Get Started</a>
                </div>
                <div>
                <h2 className="my-2 font-bold text-xl text-black">New Job Seekers</h2>
                <div className="flex gap-4">
                <AvatarGroup    max={5}>
        <LargeAvatar alt="Remy Sharp" src={Me} />
         <LargeAvatar alt="Travis Howard" src={Me}/>
         <LargeAvatar alt="Cindy Baker" src={Me} />
         <LargeAvatar alt="Agnes Walker"  src={Me}/>
         <LargeAvatar alt="Trevor Henderson"  src={Me} />
         </AvatarGroup>
                </div>
                </div>
            </div>
            <div data-aos="fade-up"  className="w-[50%] flex flex-row h-[80vh] items-start">
                <img src={homePhoto} alt="" />
            </div>
            </div>
        </div>
    );
}
 
export default HomeComponent;