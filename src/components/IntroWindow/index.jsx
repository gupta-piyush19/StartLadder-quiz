import React from "react";
import Button from "../Button";
import IntroWindowStyles from "./IntroWindow.module.css";

const IntroWindow = ({ setStart }) => {
  return (
    <div className={IntroWindowStyles.style}>
      <Button onClick={() => setStart(true)} text={"Start Quiz"} />
    </div>
  );
};

export default IntroWindow;
