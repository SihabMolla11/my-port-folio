import About from "./About/About";
import Home from "./Home/Home";
import "./body.css";
const Body = () => {
  return (
    <div className="bg-image">
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>resume</div>
      <div>projects</div>
      <div>contract</div>
    </div>
  );
};

export default Body;
