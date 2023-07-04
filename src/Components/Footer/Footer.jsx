import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="my-container text-center px-4 py-20">
      <div className="flex w-full items-center justify-center gap-10">
        <Link
          className="text-[#b3b1b1] p-3 text-xl border-2 border-[#b3b1b1] rounded-full hover:text-black hover:bg-[#b3b1b1]"
          to="https://www.facebook.com/sihab.molla.98"
          target="_blanc"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="text-[#b3b1b1] p-3 text-xl border-2 border-[#b3b1b1] rounded-full hover:text-black hover:bg-[#b3b1b1]"
          to="https://www.linkedin.com/in/sihabmollabd71"
          target="_blanc"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="text-[#b3b1b1] p-3 text-xl border-2 border-[#b3b1b1] rounded-full hover:text-black hover:bg-[#b3b1b1]"
          to="https://twitter.com"
          target="_blanc"
        >
          <FaTwitter />
        </Link>
        <Link
          className="text-[#b3b1b1] p-3 text-xl border-2 border-[#b3b1b1] rounded-full hover:text-black hover:bg-[#b3b1b1]"
          to="https://github.com/SihabMolla11"
          target="_blanc"
        >
          <FiGithub />
        </Link>
      </div>
      <div>
        <FooterMenu />
      </div>
      <small className="text-[#b3b1b1]">
        Copyright © 2023 - All right reserved by Sihab Uddin Molla
      </small>
    </div>
  );
};

export default Footer;
