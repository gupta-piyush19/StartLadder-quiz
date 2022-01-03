import ButtonStyles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={ButtonStyles.button}>{text}</button>;
};

export default Button;
