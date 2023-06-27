import { BiArrowToBottom } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";

const BannerText = () => {
  return (
    <div>
      <div className="text-white font-bold ">
        <h2 className="text-lg md:text-2xl">Hello, I am</h2>
        <h2 className="text-xl mt-5 md:text-5xl">SIHAB UDDIN MOLLA</h2>

        <h2 className="text-xl md:text-4xl mt-5 ">
          <Typewriter
            words={[
              "I am a mernstack web developer",
              "I am expert on React Js",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
      </div>

      <p className="text-white font-medium text-lg mt-5">
        Welcome to my portfolio. I am a junior full stack web developer
        specializing in HTML, CSS (including CSS frameworks like Tailwind CSS
        and Bootstrap), JavaScript, React.js, Node.js, Firebase, and MongoDB.
        Passionate about crafting dynamic and user-friendly web experiences{" "}
      </p>

      <button className="my-btn">
        <a className="flex gap-2" href="sihabResume.pdf" download>
          Download resume <BiArrowToBottom className="text-2xl" />
        </a>
      </button>
    </div>
  );
};

export default BannerText;
