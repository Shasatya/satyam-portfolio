import "./App.scss";
import {
  Contact,
  Home,
  Projects,
  Skills,
  StarsCanvas,
} from "./sections/index";
const App = () => {
  return (
    <>
      <section>
        <Home />
      </section>
      <Skills />
      <Projects />
      <section>
        <Contact />
      </section>
      <StarsCanvas />
    </>
  );
};

export default App;
