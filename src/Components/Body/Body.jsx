import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contract from "../Contract/Contract";
import Projects from "../Projects/Projects";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import "./body.css";

const Body = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
        });
    }, []);

    return (
        <div className="bg-image ">
            <div className="bg-black bg-opacity-30">
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="experience">
                    <Experience />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contract">
                    <Contract />
                </div>
            </div>
        </div>
    );
};

export default Body;
