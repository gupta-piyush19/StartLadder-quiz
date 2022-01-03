import { useState } from "react";
import GameTimer from "../GameTimer";
import IntroWindow from "../IntroWindow";
import GameCardStyles from "./GameCard.module.css";
import Button from "../Button";
import LottieResult from "../LottieResult";

const GameCard = ({ questions }) => {
  const [start, setStart] = useState(false);
  const [gameState, setGameState] = useState(0);
  const [currQues, setCurrQues] = useState(questions[gameState]);
  const [animating, setAnimating] = useState(false);
  const [answer, setAnswer] = useState("");
  const [lottieText, setLottieText] = useState("");
  const [pause, setPause] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimating(true);
    setPause(true);
    if (answer === currQues.answer) {
      setLottieText("right");
    } else {
      setLottieText("wrong");
    }

    console.log("out", lottieText);
    setTimeout(() => {
      setAnimating(false);
      setLottieText("");
      setAnswer("");
      setGameState((prevState) => prevState + 1);
      setCurrQues(questions[gameState + 1]);
      setPause(false);
    }, 2000);
  };

  let lottieBg = {
    background: "linear-gradient(91.23deg, #20622A 0%, #48B566 131.71%)",
  };
  if (lottieText === "right") {
    lottieBg.background =
      "linear-gradient(91.23deg, #20622A 0%, #48B566 131.71%)";
  } else if (lottieText === "wrong") {
    lottieBg.background =
      "linear-gradient(91.23deg, #F35325 0%, #F3AD25 131.71%)";
  } else {
    lottieBg.background =
      "linear-gradient(91.23deg, #6776ff 0%, #80ffdb 131.71%)";
  }

  return (
    <div className={GameCardStyles.card}>
      {!start && <IntroWindow setStart={setStart} />}
      {start && (
        <>
          <div className={GameCardStyles.topic}>
            <div>
              <p className={GameCardStyles.heading}>Topic</p>
              <p>{currQues?.category}</p>
            </div>
            <GameTimer pause={pause} start={start} />
          </div>
          <div className={GameCardStyles.question}>
            <p className={GameCardStyles.heading}>
              Question {gameState + 1} of {questions.length}
            </p>
            <p>{currQues.question}</p>
          </div>
          <div className={GameCardStyles.result} style={{ ...lottieBg }}>
            {!animating ? (
              <>
                <p>ANSWER</p>
                <div className={GameCardStyles.sol}>
                  <form onSubmit={handleSubmit} className={GameCardStyles.form}>
                    <input
                      type="text"
                      className={GameCardStyles.input}
                      placeholder="Type Answer..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </form>
                  <div className={GameCardStyles.solButton}>
                    <p>Stuck ?</p>
                    <Button text={"See Solution"} />
                  </div>
                </div>
              </>
            ) : (
              <div className={GameCardStyles.lottieDiv}>
                {
                  <LottieResult
                    styles={{ height: "100%", width: "30%" }}
                    text={lottieText}
                  />
                }
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GameCard;
