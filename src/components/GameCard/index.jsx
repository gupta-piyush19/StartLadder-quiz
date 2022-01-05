import { useEffect, useRef, useState } from "react";
import GameTimer from "../GameTimer";
import IntroWindow from "../IntroWindow";
import GameCardStyles from "./GameCard.module.css";
import Button from "../Button";
import LottieResult from "../LottieResult";
import ResultWindow from "../ResultWindow";

const GameCard = ({ questions }) => {
  const [start, setStart] = useState("intro");
  const [gameState, setGameState] = useState(0);
  const [currQues, setCurrQues] = useState(questions[gameState]);
  const [animating, setAnimating] = useState(false);
  const [answer, setAnswer] = useState("");
  const [lottieText, setLottieText] = useState("");
  const [pause, setPause] = useState(false);

  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(0);

  const [seeSolution, setSeeSolution] = useState(false);
  const input = useRef();
  const animDiv = useRef();

  const focusInput = () => {
    input?.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, [start]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimating(true);
    setPause(true);
    if (
      answer
        ?.replace(/^\s+|\s+$/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase() === currQues.answer.toLowerCase()
    ) {
      setLottieText("Right");
      if (!seeSolution) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      setLottieText("Wrong");
    }

    setTimeout(() => {
      setAnimating(false);
      setLottieText("");
      setAnswer("");

      const newGameState = gameState + 1;
      setGameState(newGameState);
      if (newGameState < questions.length) {
        setCurrQues(questions[newGameState]);
        setPause(false);
      } else {
        setStart("end");
      }
    }, 1500);
    setSeeSolution(false);
  };

  useEffect(() => {
    if (start !== "game") return;
    input.current.disabled = true;
    animDiv.current.style.transform = `translate(-${gameState * 100}%)`;
    const id = setTimeout(() => {
      input.current.disabled = false;
      focusInput();
    }, 800);
    return () => clearTimeout(id);
  }, [currQues]);

  const resetGame = () => {
    setStart("intro");
    setGameState(0);
    setCurrQues(questions[0]);
    setScore(0);
    setAnimating(false);
    setAnswer("");
    setLottieText("");
    setPause(false);
    setSeeSolution(false);
  };

  let lottieBg = {
    background: "linear-gradient(91.23deg, #20622A 0%, #48B566 131.71%)",
  };
  if (lottieText === "Right") {
    lottieBg.background =
      "linear-gradient(91.23deg, #20622A 0%, #48B566 131.71%)";
  } else if (lottieText === "Wrong") {
    lottieBg.background =
      "linear-gradient(91.23deg, #F35325 0%, #F3AD25 131.71%)";
  } else {
    lottieBg.background =
      "linear-gradient(91.23deg, #6776ff 0%, #80ffdb 131.71%)";
  }

  return (
    <div className={GameCardStyles.card}>
      {start === "intro" && <IntroWindow setStart={setStart} />}
      {start === "game" && (
        <>
          <div className={GameCardStyles.topic}>
            <div>
              <p className={GameCardStyles.heading}>Topic</p>
              <p>{currQues?.category}</p>
            </div>
            <GameTimer pause={pause} setGameTime={setGameTime} start={start} />
          </div>
          <div className={GameCardStyles.question}>
            <p className={GameCardStyles.heading}>
              Question {gameState + 1} of {questions.length}
            </p>
            <div className={GameCardStyles.sliderContainer}>
              <div
                className={GameCardStyles.sliderDiv}
                ref={animDiv}
                style={{
                  gridTemplateColumns: `repeat(${questions.length}, 100%)`,
                }}
              >
                {questions.map((ques) => (
                  <p className={GameCardStyles.sliderQues}>{ques.question}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={GameCardStyles.result} style={{ ...lottieBg }}>
            {!animating ? (
              <>
                <p className={GameCardStyles.ans}> ANSWER </p>
                <div className={GameCardStyles.sol}>
                  <form onSubmit={handleSubmit} className={GameCardStyles.form}>
                    <input
                      type="text"
                      className={GameCardStyles.input}
                      placeholder="Type Answer..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      ref={input}
                      required
                    />
                  </form>
                  {!seeSolution ? (
                    <div className={GameCardStyles.solButton}>
                      <>
                        <p>Stuck ?</p>
                        <Button
                          onClick={() => setSeeSolution(true)}
                          text={"See Solution"}
                        />
                      </>
                    </div>
                  ) : (
                    <p className={GameCardStyles.answerReveal}>
                      {currQues.answer}
                    </p>
                  )}
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
      {start === "end" && (
        <ResultWindow
          accuracy={score / questions?.length}
          gameTime={gameTime / questions?.length}
          resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default GameCard;
