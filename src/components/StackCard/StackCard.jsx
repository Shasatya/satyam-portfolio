import "./StackCard.scss";
import PropTypes from "prop-types";

const StackCard = ({ cardKey, title, icons }) => {
  return (
    <div className="stack-card" key={cardKey}>
      <p>{title}</p>
      <div className="card">
        {icons.map((i) => (
          <img src={i} alt={i} key={i} />
        ))}
      </div>
    </div>
  );
};

StackCard.propTypes = {
  cardKey: PropTypes.number,
  title: PropTypes.string,
  icons: PropTypes.array,
};

export default StackCard;
