import { useState } from "react";
import GameTimer from "../GameTimer";
import IntroWindow from "../IntroWindow";
import GameCardStyles from "./GameCard.module.css";

const GameCard = ({ questions }) => {
  const [start, setStart] = useState(false);
  return (
    <div className={GameCardStyles.card}>
      {!start && <IntroWindow setStart={setStart} />}
      {start && <GameTimer />}
    </div>
  );
};

export default GameCard;
