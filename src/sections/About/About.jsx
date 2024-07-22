import Text from "../../components/Text/Text";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <Text textLabel={"About Me"} />
      <p>
        <span>
          Full-stack developer with over a year of experience in web and mobile
          applications.
        </span>{" "}
        Skilled in front-end and back-end development, database management, and
        optimizing user experience. Effective in agile environments,
        contributing to project success, and
        <span> continuously learning new technologies.</span>
      </p>
    </section>
  );
};

export default About;
