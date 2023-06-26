import Lottie from "lottie-react";
import bannerimg from "../../../assets/lotties/banner1.json";
import BannerText from "./BannerText";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-row-reverse gap-10 pb-10 items-center justify-between">
      <div className="w-full md:w-[50%]">
        <Lottie animationData={bannerimg} loop={true} />
      </div>
      <div className="w-full md:w-[50%]">
        <BannerText />
      </div>
    </div>
  );
};

export default Home;
