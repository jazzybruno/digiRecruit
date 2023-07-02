import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdMoneyOff } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaEnvira } from "react-icons/fa";

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

type Props = {
  title: string;
  body: string;
  avatar: number;
  bgcolor: string;
};

const WhyChooseComp = (props: Props) => {
  const iconSize = "text-3xl";
  return (
    <div className="flex flex-col  w-[30%] space-y-2 p-2">
      <div>
        <LargeAvatar sx={{ bgcolor: props.bgcolor, padding: "4px" }}>
          {props.avatar === 1 ? (
            <BsGlobeAmericas className={iconSize} />
          ) : props.avatar === 2 ? (
            <MdMoneyOff className={iconSize} />
          ) : props.avatar === 3 ? (
            <BiTimeFive className={iconSize} />
          ) : props.avatar === 4 ? (
            <BsPersonWorkspace className={iconSize} />
          ) : props.avatar === 5 ? (
            <GiBrain className={iconSize} />
          ) : (
            <FaEnvira className={iconSize} />
          )}
        </LargeAvatar>
      </div>

      {/* // the title of the components */}
      <div>
        <h2 className=" font-bold text-2xl">{props.title}</h2>
      </div>

      {/* // the body of the components */}
      <div>
        <p className=" text-lg">{props.body}</p>
      </div>
    </div>
  );
};

export default WhyChooseComp;
