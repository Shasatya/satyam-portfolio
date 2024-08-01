import "./Home.scss";
import { logo } from "../../assets";
import { Button } from "../../components/index";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-top">
        <img src={logo} alt="" />
        <Button label={"Contact Me"} href={"contact"} />
      </div>
      <div className="home-middle">
        <h1>
          Satyam Sharma <br />
          Full Stack Developer
        </h1>
        <p>
          Comprehensive development solutions for tech startups and established
          enterprises seeking robust and scalable applications. Transforming
          ideas into reality.
        </p>
        <div className="home-btns">
          <Button label={"Let's Connect"} href={"contact"} />
          <Button label={"View Resume"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
