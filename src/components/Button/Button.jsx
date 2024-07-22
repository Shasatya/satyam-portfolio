import "./Button.scss";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";

const Button = ({ label, href }) => {
  const handleClick = async () => {
    if (label === "Resume") {
      const fileUrl = "Resume.pdf";
      const fileName = "Resume.pdf";
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);
    } else {
      scroller.scrollTo(href, {
        smooth: true,
        duration: 500,
      });
    }
  };
  return (
    <button
      className={label === "View Resume" ? "button resume" : "button"}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: "",
};

export default Button;
