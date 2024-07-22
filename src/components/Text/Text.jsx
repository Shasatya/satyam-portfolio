import "./Text.scss";
import { star } from "../../assets";
import PropTypes from "prop-types";

const Text = ({ textLabel }) => {
  return (
    <div className="text">
      <img src={star} alt="" />
      <h2>{textLabel}</h2>
    </div>
  );
};

Text.propTypes = {
    textLabel: PropTypes.string.isRequired,
};

export default Text;
