import ButtonStyles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={ButtonStyles.button}>
      {text}
    </button>
  );
};

export default Button;
