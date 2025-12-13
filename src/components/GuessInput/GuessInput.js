import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState("");

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          setGuessList((prevGuess) => [...prevGuess, guess]);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter your guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          required
          minLength={NUM_OF_LETTERS}
          pattern="\w{5,5}"
          maxLength={NUM_OF_LETTERS}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
