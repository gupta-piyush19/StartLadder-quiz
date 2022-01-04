import React from "react";
import Button from "../Button";
import ResultWindowStyles from "./ResultWindow.module.css";

const IntroWindow = ({ accuracy, gameTime, resetGame }) => {
  const getFormattedNumber = (num) => {
    return Number.isInteger(num) ? num : num.toFixed(2);
  };
  accuracy = getFormattedNumber(accuracy * 100);
  gameTime = getFormattedNumber(gameTime);

  return (
    <div className={ResultWindowStyles.style}>
      <div className={ResultWindowStyles.stats}>
        <div>
          <p>{accuracy}%</p>
          <p>Accuracy</p>
        </div>
        <div>
          <p>{gameTime}s</p>
          <p>Avg Speed</p>
        </div>
      </div>
      <Button onClick={resetGame} text={"Play Again"} />
    </div>
  );
};

export default IntroWindow;
