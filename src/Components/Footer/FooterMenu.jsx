import React from "react";
import { Link } from "react-scroll";

const FooterMenu = () => {
  return (
    <>
      <ul className="flex flex-row gap-5 my-5 justify-center font-semibold text-[#b3b1b1]">
        <Link
          className=" cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className=" cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
        <Link
          className=" cursor-pointer"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          skills
        </Link>
        <Link
          className=" cursor-pointer"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          projects
        </Link>
        <Link
          className=" cursor-pointer"
          to="contract"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          contract
        </Link>
      </ul>
    </>
  );
};

export default FooterMenu;
