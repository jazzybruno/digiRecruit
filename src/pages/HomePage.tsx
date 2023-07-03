import AboutComponent from "../components/AboutComponet";
import AssuranceComponent from "../components/AssuranceComponent";
import FeedBackComponent from "../components/FeedBackComponent";
import FooterComponent from "../components/FooterComponent";
import Header from "../components/NavBar";
import HomeComponent from "../components/HomeComponent";
import ReadyToStartComponent from "../components/ReadyToStartComponent";
import StatisticsComponent from "../components/StatisticsComponent";

const HomePage = () => {
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  ">
            <Header></Header>
            <HomeComponent/>
            <AboutComponent></AboutComponent>
            <StatisticsComponent></StatisticsComponent>
            <AssuranceComponent></AssuranceComponent>
            <FeedBackComponent></FeedBackComponent>
            <ReadyToStartComponent></ReadyToStartComponent>
            <FooterComponent></FooterComponent>
        </div>
     );
}
 
export default HomePage;