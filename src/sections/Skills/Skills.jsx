import "./SkillsStyles.scss";
import { SkillsData } from "../../constants";

const Skills = () => {
  return (
    <div className="skills" id="stack">
      <div className="skills-1">
        <h1>Tech Stack</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
          dolores. Numquam nihil consequuntur ab illo officiis. Quidem nulla eos
          ex!
        </p>
      </div>
      <div className="skills-2">
        {SkillsData.map((s, i) => (
          <img src={s} key={i} alt="skill" />
        ))}
      </div>
    </div>
  );
};
export default Skills;
