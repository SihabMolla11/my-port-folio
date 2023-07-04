import Contract from "../Contract/Contract";
import Projects from "../Projects/Projects";
import About from "./About/About";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import "./body.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
    });
  }, []);

  return (
    <div className="bg-image">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
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
  );
};

export default Body;
