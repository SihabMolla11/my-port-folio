import { useState } from "react";
import NavItem from "./Navbar/NavItem";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeScroll);

  return (
    <div className="fixed w-full z-10 drop-shadow-md ">
      <div
        className={`my-container ${
          scroll && "navbar-active"
        } transition duration-300 ease-in-out `}
      >
        <NavItem />
      </div>
    </div>
  );
};

export default Header;
