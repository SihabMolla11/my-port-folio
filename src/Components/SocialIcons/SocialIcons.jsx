import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  const [hover, setHover] = useState(false);

  return (
    <ul className=" flex  gap-10  ">
      <li>
        <Link
          onMouseEnter={() => setHover("facebook")}
          onMouseLeave={() => setHover(false)}
          className="h-full  bg-gradient-to-l from-[#D66CFF] to-[#850B76] p-3 text-2xl flex gap-2 items-center  rounded-full"
          to="https://www.facebook.com/sihab.molla.98/"
        >
          <FaFacebookF />

          {/* {hover === "facebook" ? (
            <span className="  text-[16px] font-bold">Linkedin</span>
          ) : (
            ""
          )} */}
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={() => setHover("linkedin")}
          onMouseLeave={() => setHover(false)}
          className="h-full items-center bg-gradient-to-l text-2xl from-[#D66CFF]  to-[#850B76] p-3  rounded-full flex gap-2"
          to="https://www.linkedin.com/in/sihabmollabd71/"
        >
          <FaLinkedinIn />
          {/* {hover === "linkedin" ? (
            <span className="  text-[16px] font-bold">Linkedin</span>
          ) : (
            ""
          )} */}
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={() => setHover("github")}
          onMouseLeave={() => setHover(false)}
          className="h-full items-center text-2xl bg-gradient-to-l from-[#D66CFF] to-[#850B76] p-3  rounded-full flex gap-2"
          to="https://github.com/SihabMolla11"
        >
          <PiGithubLogoFill />
          {/* {hover === "github" ? (
            <span className="  text-[16px] font-bold">Linkedin</span>
          ) : (
            ""
          )} */}
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
