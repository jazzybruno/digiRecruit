import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const FooterComponent = () => {
  const iconsStyle = "text-4xl text-white";
  return (
    <div className="w-[100%] bg-[#0b182c] text-white flex flex-row justify-center items-center">
      <div className="w-[40%] flex flex-col justify-start p-10 space-y-12 ">
        <div className="flex flex-col space-y-2">
          {" "}
          <p className=" text-white font-bold text-xl">
            Subscribe to our newsletter
          </p>
          <div>
            <input
              type="text"
              name=""
              id=""
              value={"Enter the Email?"}
              className="p-2 w-[50%] bg-[#242e42] rounded-sm text-white"
            />
            <button className=" bg-sky-700 py-2 px-5 rounded-sm border-2 ml-2 font-bold">
              Submit
            </button>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold text-white">
            Follow us on social media
          </p>
          <div className="flex flex-row justify-start items-center space-x-5">
            <BiLogoFacebookCircle className={iconsStyle} />
            <BiLogoInstagram className={iconsStyle} />
            <BiLogoLinkedin className={iconsStyle} />
            <BiLogoTwitter className={iconsStyle} />
          </div>
        </div>
      </div>
      <div className="w-[60%] flex flex-row p-20 space-x-20">
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-bold ">Services</h1>
          <p className=" font-extralight">Email Marketing</p>
          <p className=" font-extralight">Campaigns</p>
          <p className=" font-extralight">Campaigns</p>
          <p className=" font-extralight">Bradings</p>
          <p className=" font-extralight">Offline</p>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-bold ">About</h1>
          <p className=" font-extralight">Our Story</p>
          <p className=" font-extralight">Benefits</p>
          <p className=" font-extralight">Teams</p>
          <p className=" font-extralight">Careers</p>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-bold ">Navigation</h1>
          <p className=" font-extralight">Email Marketing</p>
          <p className=" font-extralight">Campaigns</p>
          <p className=" font-extralight">Campaigns</p>
          <p className=" font-extralight">Bradings</p>
          <p className=" font-extralight">Offline</p>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-bold ">Help</h1>
          <p className=" font-extralight">FAQs</p>
          <p className=" font-extralight">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
