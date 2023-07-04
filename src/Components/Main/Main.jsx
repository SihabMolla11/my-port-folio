import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className=" overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div className="bg-[#151029d7]">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
