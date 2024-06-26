import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../../../../assets/logo.png";
import "./navitem.css";

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
                            <ul className="flex flex-col gap-2 pt-4 pb-8   px-8 text-left bg-[#361241dc] font-medium text-white">
                                <Link
                                    to="home"
                                    className="capitalize"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    className="capitalize"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    About
                                </Link>
                                <Link
                                    to="experience"
                                    className="capitalize"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    experience
                                </Link>
                                <Link
                                    to="skills"
                                    className="capitalize"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    skills
                                </Link>
                                <Link
                                    className="capitalize"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    projects
                                </Link>
                                <Link
                                    className="capitalize"
                                    to="contract"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    contract
                                </Link>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <div>
                {/* logo */}
                <Link
                    className=" cursor-pointer"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <div className="text-white text-4xl flex font-bold items-center gap-4  ">
                        <img src={logo} alt="" />
                        <h2>S-CODER</h2>
                    </div>
                </Link>
            </div>

            <div className="hidden md:block ">
                <ul className="flex items-start gap-6 font-medium text-white">
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className=" item-animation cursor-pointer capitalize">
                        <Link
                            to="contract"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >
                            Contracts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavItem;
