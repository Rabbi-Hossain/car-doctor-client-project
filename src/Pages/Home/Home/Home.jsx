import About from "../About/About";
import Banner from "../Banner/Banner";
import CoreFeture from "../CoreFeture/CoreFeture";
import MeetTeam from "../MeetTeam/MeetTeam";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TimeManage from "../TimeManage/TimeManage";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TimeManage></TimeManage>
            <PopularProducts></PopularProducts>
            <MeetTeam></MeetTeam>
            <CoreFeture></CoreFeture>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;