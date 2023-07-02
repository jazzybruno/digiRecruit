import Avatar from "@mui/material/Avatar";
import { BsStarFill } from "react-icons/bs";
import me from "../images/me.jpg";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

const CustomerFeedback  :React.FC = () => {

  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  } , [])

  return (
    <div  data-aos="zoom-in" className="animated-div bg-white  rounded-xl shadow-md w-[30%] translate-y-4 transition-all duration-500">
      <div className="flex  gap-5 flex-row items-center pl-10 pt-10 pb-2">
        <LargeAvatar alt="Bemy Sharp" src={me} />
        <BsStarFill className="text-yellow-400 text-xl" />
        <p className="font-bold text-xl text-black">4.8</p>
      </div>
      <div className="flex flex-col space-y-3 pb-10 pl-10 pr-2">
        <h1 className="text-xl font-bold ">Customer Name</h1>
        <h1 className="text-xl">
          Customer Feedback Lorem ipsum dolor sit amet consectetur adipisicing
          elit.{" "}
        </h1>
      </div>
    </div>
  );
};

export default CustomerFeedback;
