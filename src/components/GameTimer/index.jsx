import { useEffect, useState } from "react";
import TimerStyles from "./GameTimer.module.css";

const GameTimer = () => {
  const [sec, setSec] = useState("00");
  const [min, setMin] = useState("00");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const secondCounter = counter % 60;
      const minuteCounter = Math.floor(counter / 60);

      const computedSecond =
        String(secondCounter).length === 1
          ? `0${secondCounter}`
          : secondCounter;
      const computedMinute =
        String(minuteCounter).length === 1
          ? `0${minuteCounter}`
          : minuteCounter;

      setSec(computedSecond);
      setMin(computedMinute);
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div className={TimerStyles.timer}>
      <div className="min">
        <div className="min-value">{min}</div>
        <div className="min-text">MIN</div>
      </div>
      <div className="sep">:</div>
      <div className="sec">
        <div className="sec-value">{sec}</div>
        <div className="sec-text">SEC</div>
      </div>
    </div>
  );
};

export default GameTimer;
