import "./App.scss";
import { Element } from "react-scroll";
import {
  Contact,
  Home,
  Projects,
  Stack,
  Navigator,
  About,
} from "./sections/index";

const App = () => {
  return (
    <>
      <Navigator />
      <Element name="home">
        <Home />
      </Element>
      <About />
      <Element name="stack">
        <Stack />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default App;
