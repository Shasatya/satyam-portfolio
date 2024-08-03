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
import { Navigator, Loader } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default App;
