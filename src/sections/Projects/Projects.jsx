import "./Projects.scss";
import { ProjectCardData } from "../../constants";
import { Text, ProjectCard } from "../../components/index";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Text textLabel={"Projects"} />
      <div className="container">
        {ProjectCardData.map((card) => {
          return <ProjectCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
