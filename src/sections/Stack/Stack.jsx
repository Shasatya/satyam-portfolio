import "./Stack.scss";
import { StackData } from "../../constants";
import { Text, StackCard } from "../../components/index";

const Stack = () => {
  return (
    <div className="stack">
      <div className="stack-1">
        <Text textLabel={"Tech Stack"} />
        <p>Building Blocks and Advanced Tools for Analysis and Processing</p>
      </div>
      <div className="stack-2">
        {StackData.map((s) => (
          <StackCard key={s.key} cardKey={s.key} {...s} />
        ))}
      </div>
    </div>
  );
};
export default Stack;
