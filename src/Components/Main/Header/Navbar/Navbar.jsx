import NavItem from "./NavItem";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-4">
      <div>
        {/* logo */}
        <h2 className="text-white text-4xl flex items-center gap-2  ">
          <FaCode /> S-CODER
        </h2>
      </div>
      <NavItem />
    </div>
  );
};

export default Navbar;
