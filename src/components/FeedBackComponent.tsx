import "../assets/Othercss.css"
import CustomerFeedback from "./CustomerFeedback";

const FeedBackComponent = () => {
    return ( 
        <div id="feebBack" className="h-[100vh] w-[100%] flex justify-center items-center flex-col space-y-10 ">
         <div className="w-[100%] flex flex-col items-center justify-center">
         <h1 className="text-black text-xl font-bold">Client's Stories</h1>
         <h1>What Our <span className="text-black font-extrabold">Beloved Customers</span> Says</h1>
         </div>
         <div className="w-[100%] flex justify-center items-center flex-row gap-10">
            <CustomerFeedback />
            <CustomerFeedback />
            <CustomerFeedback />
         </div>
        </div>
     );
}
 
export default FeedBackComponent;