import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [numGuesses, setNumGuesses] = React.useState(0);

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
    setNumGuesses((num) => num + 1);
    console.log(numGuesses + "guesses");
    if (guess === answer) {
      console.log("you win");
      setGameStatus("won");
    }

    if (guess !== answer && numGuesses >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
  }
  console.log(gameStatus);
  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <HappyBanner numGuesses={numGuesses} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
