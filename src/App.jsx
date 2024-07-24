import "./App.scss";
import { Element } from "react-scroll";
import {
  Contact,
  Home,
  Projects,
  Stack,
  About,
  Footer,
} from "./sections/index";
import { Navigator } from "./components";

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
      <Footer />
    </>
  );
};

export default App;
