import AboutComponent from "../components/AboutComponet";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";

const HomePage = () => {
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  ">
            <Header></Header>
            <HomeComponent></HomeComponent>
            <AboutComponent></AboutComponent>
        </div>
     );
}
 
export default HomePage;