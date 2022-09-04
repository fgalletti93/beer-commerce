
import "./styles/Button.scss";

const Button = ({ onClick, icon }) => {
  return (
    <button onClick={onClick}>
      <img className="icon" src={icon} alt={`${icon}-icon`} />
    </button>
  );
};

export default Button;
