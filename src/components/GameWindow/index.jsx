import { useEffect, useState } from "react";
import GameStyles from "./GameWindow.module.css";
import GameCard from "../GameCard";
import axios from "axios";

const GameWindow = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          "https://api.startladder.co/api/frontend/tasks"
        );
        const ques = data.task_array;
        setQuestions(ques);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);
  return (
    <div className={GameStyles.window}>
      <div>{questions?.length && <GameCard />}</div>
    </div>
  );
};

export default GameWindow;
