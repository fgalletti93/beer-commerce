import clearIcon from "../../assets/clear-symbol-removebg-preview.png";
import "./styles/Button.scss";

const Button = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      className="clear-icon"
      src={clearIcon}
      alt="clear-button"
    />
  );
};

export default Button;
