import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectCardData } from "../../constants";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>

      <div className="container">
        {ProjectCardData.map((card) => {
          return <ProjectCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
