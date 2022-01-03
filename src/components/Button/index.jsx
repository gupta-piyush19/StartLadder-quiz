import ButtonStyles from "./Button.module.css";

const index = ({ text }) => {
  return <button className={ButtonStyles.button}>{text}</button>;
};

export default index;
