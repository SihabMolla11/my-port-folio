import { NavLink } from "react-router-dom";
import "./navitem.css";
import { useCallback, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const NavItem = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return (
    <div>
      <div className=" md:hidden">
        <button
          className=" text-white text-2xl p-2 border-2 border-white rounded-full"
          onClick={toggleOpen}
        >
          {open ? <MdClose /> : <FiMenu />}
        </button>

        {open && (
          <div className="absolute top-20 right-0 h-full rounded-tl-lg bg-[#00ccff]">
            <div>
              <ul className="flex flex-col gap-2 py-4 px-8 text-center  font-medium text-white">
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
