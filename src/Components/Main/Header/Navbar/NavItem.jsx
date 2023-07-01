import { Link, NavLink } from "react-router-dom";
import "./navitem.css";
import { useCallback, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import logo from "../../../../assets/logo.png";

const NavItem = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return (
    <div className="flex items-center justify-between py-4">
      <div className=" md:hidden">
        <button
          className=" text-white text-2xl p-2 border-2 border-white rounded-full"
          onClick={toggleOpen}
        >
          {open ? <MdClose /> : <FiMenu />}
        </button>

        {open && (
          <div className="absolute top-20 left-0 h-full w-full rounded-tl-lg">
            <div>
              <ul className="flex flex-col gap-2 pt-4 pb-8   px-8 text-left bg-[#008cffdc] font-medium text-white">
                <li className="   item-animation">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="item-animation  ">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="item-animation  ">
                  <NavLink to="/resume">Resume</NavLink>
                </li>
                <li className="item-animation  ">
                  <NavLink to="/project">Projects</NavLink>
                </li>
                <li className="item-animation  ">
                  <NavLink to="/contract">Contract</NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div>
        {/* logo */}
        <Link to="/">
          <div className="text-white text-4xl flex font-bold items-center gap-4  ">
            <img src={logo} alt="" />
            <h2>S-CODER</h2>
          </div>
        </Link>
      </div>

      <div className="hidden md:block ">
        <ul className="flex items-start gap-6 font-medium text-white">
          <li className=" item-animation">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="item-animation">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="item-animation">
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li className="item-animation">
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li className="item-animation">
            <NavLink to="contract">Contract</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavItem;
