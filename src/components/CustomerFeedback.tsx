import Avatar from '@mui/material/Avatar';
import { BsStarFill } from 'react-icons/bs';
import me from "../images/me.jpg"
import { styled } from "@mui/material/styles";

const LargeAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
  }));

const CustomerFeedback = () => {
    return ( 
        <div className="bg-white rounded-xl shadow-md w-[30%]">
            <div className='flex  gap-5 flex-row items-center pl-10 pt-10 pb-2'>
             <LargeAvatar alt="Bemy Sharp" src={me} />
             <BsStarFill className="text-yellow-400 text-xl" />
             <p className='font-bold text-xl text-black'>4.8</p>
            </div>
            <div className='flex flex-col space-y-3 pb-10 pl-10 pr-2'>
                <h1 className='text-xl font-bold '>Customer Name</h1>
                <h1 className='text-xl'>Customer Feedback Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            </div>
        </div>
     );
}
 
export default CustomerFeedback;