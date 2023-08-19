import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="my-container text-center px-4 py-20">
      <div className="flex w-full items-center justify-center gap-10">
        <Link className="text-white p-3 text-xl border-2 border-white rounded-full hover:text-black hover:bg-white" to="https://www.facebook.com/sihab.molla.98" target="_blanc">
          <FaFacebookF />
        </Link>
        <Link className="text-white p-3 text-xl border-2 border-white rounded-full hover:text-black hover:bg-white" to="https://www.linkedin.com/in/sihabmollabd71" target="_blanc">
          <FaLinkedinIn />
        </Link>
        <Link className="text-white p-3 text-xl border-2 border-white rounded-full hover:text-black hover:bg-white" to="https://twitter.com" target="_blanc">
          <FaTwitter />
        </Link>
        <Link className="text-white p-3 text-xl border-2 border-white rounded-full hover:text-black hover:bg-white" to="https://github.com/SihabMolla11" target="_blanc">
          <FiGithub />
        </Link>
      </div>
      <div>
        <FooterMenu />
      </div>
      <small className="text-white">Copyright © 2023 - All right reserved by Sihab Uddin Molla</small>
    </div>
  );
};

export default Footer;
