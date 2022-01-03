import TimerStyles from "./GameTimer.module.css";

const GameTimer = () => {
  const min = 10;
  const sec = 1;
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
