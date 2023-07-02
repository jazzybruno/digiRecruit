import AboutComponent from "../components/AboutComponet";
import AssuranceComponent from "../components/AssuranceComponent";
import FeedBackComponent from "../components/FeedBackComponent";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import StatisticsComponent from "../components/StatisticsComponent";

const HomePage = () => {
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  ">
            <Header></Header>
            <HomeComponent></HomeComponent>
            <AboutComponent></AboutComponent>
            <StatisticsComponent></StatisticsComponent>
            <AssuranceComponent></AssuranceComponent>
            <FeedBackComponent></FeedBackComponent>
        </div>
     );
}
 
export default HomePage;