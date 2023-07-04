import { Link } from "react-router-dom";
import image1 from "../../../assets/about.png";
import SocialIcons from "../../SocialIcons/SocialIcons";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Animated from "../../../animated/Animated";
import DownloadResume from "../../DownloadResume/DownloadResume";

const About = () => {
  const [info, setInfo] = useState("self");

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 300,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <div className="my-container" data-aos="fade-down">
      <div>
        <h2
          className="text-center  py-10 text-4xl font-bold text-white"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <div className="hidden md:block">
          <div className=" mt-5  flex">
            <div className="w-[50%]"></div>
            <div className="w-[50%] text-white">
              <button
                onClick={() => setInfo("self")}
                className={`text-lg cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-l-lg bg-transparent ${
                  info === "self"
                    ? "bg-white text-[#8B1381]"
                    : " bg-gradient-to-l from-[#D66CFF] to-[#850B76]"
                }`}
              >
                About My Self
              </button>
              <button
                onClick={() => setInfo("pinfo")}
                className={`text-lg cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-r-lg bg-transparent ${
                  info === "pinfo"
                    ? "bg-white text-[#8B1381]"
                    : " bg-gradient-to-r from-[#D66CFF] to-[#850B76]"
                }`}
              >
                Personal Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="w-full">
          <img className=" w-full  " src={image1} alt="" />
        </div>
        <div className="w-full  text-white">
          <div className="md:hidden flex my-4">
            <button
              onClick={() => setInfo("self")}
              className={` cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-l-lg bg-transparent ${
                info === "self"
                  ? "bg-white text-[#8B1381]"
                  : " bg-gradient-to-l from-[#D66CFF] to-[#850B76]"
              }`}
            >
              About My Self
            </button>
            <button
              onClick={() => setInfo("pinfo")}
              className={` cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-r-lg bg-transparent ${
                info === "pinfo"
                  ? "bg-white text-[#8B1381]"
                  : " bg-gradient-to-r from-[#D66CFF] to-[#850B76]"
              }`}
            >
              Personal Info
            </button>
          </div>

          {info === "pinfo" && (
            <div>
              <div className="flex gap-4 md:gap-6 lg:gap-16 md:text-lg font-medium">
                <div className=" space-y-3">
                  <p className=" drop-shadow-2xl shadow-white">Name:</p>
                  <p className=" drop-shadow-2xl shadow-white">Age:</p>
                  <p className=" drop-shadow-2xl shadow-white">Nationality:</p>
                  <p className=" drop-shadow-2xl shadow-white">Address:</p>
                  <p className=" drop-shadow-2xl shadow-white">Phone:</p>
                  <p className=" drop-shadow-2xl shadow-white">E-Mail:</p>
                </div>
                <div className="space-y-3">
                  <p className=" drop-shadow-2xl shadow-white">
                    Sihab Uddin Molla
                  </p>
                  <p className="drop-shadow-2xl shadow-white">18</p>
                  <p>Bangladeshi</p>
                  <p>Dhaka, Gopalgnaj</p>

                  <p className="drop-shadow-2xl shadow-white">+8801608168147</p>
                  <p className="drop-shadow-2xl shadow-white">
                    <Link to="mailto:sihabmolla10@gmail.com">
                      sihabmolla10@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <SocialIcons />
                <div className="mt-5">
                  <DownloadResume />
                </div>
              </div>
            </div>
          )}

          {info === "self" && (
            <div className=" space-y-8">
              <h3 className="text-3xl font-bold">
                Hello, <br /> This is Sihab Uddin Molla
              </h3>
              <p className=" font-semibold">
                I am a junior Mern stack Web developer. I have 6 moth+ fo
                experience. <br />
                I have Good knowledge about some mern stack technology. I am
                expert on font end Development and comfortable. I know
                HTML-5,CSS-3 tailwind css, Bootstrap-5 javascript, My known
                Frameworks & libraries (React js, react router, firebase, Node
                js, express and mongodb). <br />
                My used some Programs & tools(VSCode, figma, git, git hub,
                firebase, netlify and vercel).
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="bg-gradient-to-l from-[#D66CFF] to-[#850B76] text-center p-4 rounded-md">
                  <p className="text-lg md:text-2xl w-56 font-bold ">
                    Completed Projects
                  </p>
                  <br />
                  <span
                    className="md:text-5xl text-3xl flex justify-center font-bold animated-number"
                    data-number={110}
                  >
                    <Animated number={28} /> +
                  </span>
                </div>
                <div className="  text-center bg-gradient-to-l from-[#D66CFF] to-[#850B76] p-4 rounded-md">
                  <p className="text-lg md:text-2xl w-56 font-bold">
                    Problem Solved
                  </p>
                  <br />
                  <span
                    className="text-2xl md:text-5xl flex justify-center font-bold animated-number"
                    data-number={110}
                  >
                    <Animated number={110} /> +
                  </span>
                </div>
              </div>
              <DownloadResume/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
