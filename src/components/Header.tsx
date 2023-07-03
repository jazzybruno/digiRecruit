import { useEffect, useState } from 'react';

const Head = () => {
    const [email , setEmail] = useState("jazzybruno@gmail.com");

    useEffect(()=>{
     let optionalUser = localStorage.getItem("session")
     if(optionalUser == null || optionalUser == undefined){
        
     }else{
       let user = JSON.parse(optionalUser);
       setEmail(user.email)
     }
    } , [])

    const logout = () => {
        localStorage.removeItem("session");
        window.location.href = "/login"
    }
    return ( 

        <header className="flex items-center justify-between px-4 py-2 bg-sky-700 text-white">
      <div className="text-lg font-bold">The Logo</div>
      <div className="mr-4">{email}</div>
      <button onClick={logout} className="px-4 py-2 border-2 border-white text-white rounded font-bold">Logout</button>
    </header> 

     );
}
 
export default Head;