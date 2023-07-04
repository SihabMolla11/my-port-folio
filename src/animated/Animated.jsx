import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Animated = ({ number }) => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      {counter && <CountUp start={0} end={number} duration={2} delay={0} />}
    </ScrollTrigger>
  );
};

export default Animated;
