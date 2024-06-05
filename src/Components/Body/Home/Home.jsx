import Lottie from "lottie-react";
import banner_animation from "../../../assets/lotties/developer_animation.json";
import BannerText from "./BannerText";

const Home = () => {
    return (
        <div className="py-8 my-container flex flex-col md:flex-row md:flex-row-reverse gap-10 items-center justify-between">
            <div data-aos="fade-down" className="w-full md:w-[50%]">
                <Lottie animationData={banner_animation} loop={true} />
            </div>
            <div className="w-full md:w-[50%]" data-aos="fade-up">
                <BannerText />
            </div>
        </div>
    );
};

export default Home;
