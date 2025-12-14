import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
    if (guess === answer) {
      console.log("you win");
    }
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
