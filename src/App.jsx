import "./App.scss";
import {
  Contact,
  Home,
  Projects,
  Skills,
  StarsCanvas,
  Navigator,
} from "./sections/index";
const App = () => {
  return (
    <>
      <Navigator />
      <section>
        <Home />
      </section>
      <Skills />
      <Projects />
      <Contact />
      <StarsCanvas />
    </>
  );
};

export default App;
