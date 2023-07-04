import Lottie from "lottie-react";
import bannerimg from "../../../assets/lotties/developer.json";
import BannerText from "./BannerText";


const Home = () => {


  return (
    <div className="pt-20 my-container flex flex-col md:flex-row md:flex-row-reverse gap-10 pb-10 items-center justify-between">
      <div data-aos="fade-down" className="w-full md:w-[50%]">
        <Lottie animationData={bannerimg} loop={true} />
      </div>
      <div className="w-full md:w-[50%]" data-aos="fade-up">
        <BannerText />
      </div>
    </div>
  );
};

export default Home;
