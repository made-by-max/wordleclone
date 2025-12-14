import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
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
