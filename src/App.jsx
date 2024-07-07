import "./App.scss";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import {
  Contact,
  Home,
  Projects,
  Stack,
  StarsCanvas,
  Navigator,
} from "./sections/index";

const App = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
      <Navigator />
      <Element name="home">
        <Home />
      </Element>
      <Element name="stack">
        <Stack />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <StarsCanvas />
    </>
  );
};

export default App;
