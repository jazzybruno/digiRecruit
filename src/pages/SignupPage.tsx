import { BiLogoFacebook, BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import left from "../images/left.svg"
import right from "../images/right.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Signup = () => {

  const   [email , setEmail] = useState("");  
  const   [password , setPassword] = useState("");
  const   [inputs , setInputs] = useState("bg-white w-[100%] py-1.5 border-2 border-gray-300 rounded-md")
  const [natId , setNatId] = useState("");
  const [username , setUsername] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSignup  = (e : any) =>{
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      natId.trim() === "" ||
      username.trim() === "" ||
      email === null ||
      email === undefined ||
      password === null ||
      password === undefined ||
      natId === null ||
      natId === undefined ||
      username === null ||
      username === undefined
    ) {
      Toastify({
        text: "Please fill in all the required fields",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red"
      }).showToast();
    
       setInputs("bg-white w-[100%] py-1.5 border-2 border-red-500 rounded-md");
    }else{
    setInputs("bg-white w-[100%] py-1.5 border-2 border-gray-300 rounded-md");
    let users = localStorage.getItem("user");
    if(users == null || users == undefined){
      let users = [
        {
          email: email,
          password: password,
          natId: natId,
          username: username
        }
      ]
      localStorage.setItem("user" , JSON.stringify(users));
      Toastify({
        text: "SuccessFully Registed the User",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green"
      }).showToast();
    }else{
      let realUsers = JSON.parse(users);
      realUsers.push({
        email: email,
        password: password,
        natId: natId,
        username: username
      })

      localStorage.setItem("user" , JSON.stringify(realUsers));

      Toastify({
        text: "SuccessFully Registed the User",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green"
      }).showToast();

    }
  }
}

  const otherTypes =
    "bg-white border-2 text-sky-700 py-2 px-5 border-sky-700 rounded-xl font-bold flex flex-row gap-3 justify-center items-center";
  const loginBtn = "bg-sky-700 py-2 px-10 text-white font-bold rounded-lg";
  return (
    <div className="w-[100%] h-[100vh] bg-white flex flex-row gap-0 ">
      {/* the first images div the one in the bottom  */}
      <div className="bg-white w-[25%] flex justify-start items-end">
      <div data-aos="fade-right" className="h-[80%]"><img className="h-[100%]"  src={left} alt="" /></div>
      </div>
      {/* the forms part or div  */}
      <div data-aos="fade-up" className="bg-white w-[50%] flex flex-col justify-start items-center mt-10">
        <form action="">
          <div className="flex flex-col space-y-6">
            <div>
              {" "}
              <h1 className="text-2xl font-bold text-black text-center">
                Signup
              </h1>{" "}
            </div>

            <div>
              <label htmlFor="">Email ID</label>
              <input onChange={(e)=>{
                setEmail(e.target.value)
              }} className={inputs} type="email" name="" id="" />
            </div>

            <div>
              <label htmlFor="">UserName</label>
              <input onChange={(e)=>{
                setUsername(e.target.value)
              }} className={inputs} type="text" name="" id="" />
            </div>

            <div>
              <label htmlFor="">National ID</label>
              <input onChange={(e)=>{
                setNatId(e.target.value)
              }} className={inputs} type="text" name="" id="" />
            </div>

            <div>
              <label htmlFor="">Password</label>
              <input onChange={(e)=>{
                setPassword(e.target.value)
              }} className={inputs} type="password" name="" id="" />
            </div>

            <div className="flex flex-row w-[100%] justify-between items-center">
              <button onClick={handleSignup} className={loginBtn}>Signup</button>
              <a className="text-sky-700 font-bold cursor-pointer" href="#">
                Terms and Services
              </a>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-black font-bold">
             Already have an account?{" "}
              <span className="text-sky-700">
                <a href="/login">Login</a>
              </span>
            </p>
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex flex-row w-[100%] justify-center items-enter gap-4">
              <hr className="bg-gray-300 w-[30%] h-0.5" />
              <p className="text-black font-bold"> Or Signup with </p>
              <hr className="bg-gray-300 w-[30%] h-0.5" />
            </div>

            <div className="flex flex-row space-x-4">
              <button className={otherTypes}>
                {" "}
                <BiLogoGoogle /> Google{" "}
              </button>
              <button className={otherTypes}>
                {" "}
                <BiLogoFacebook /> Facebook
              </button>
              <button className={otherTypes}>
                {" "}
                <BiLogoGithub /> Github
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* the second image div the one in the top  */}
      <div className="bg-white w-[25%] flex justify-end items-baseline">
      <div  data-aos="fade-left" className="h-[80%]"><img className="h-[100%]"  src={right} alt="" /></div>
      </div>
    </div>
  );
};

export default Signup;
