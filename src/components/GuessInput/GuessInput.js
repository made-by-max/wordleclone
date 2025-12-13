import React from "react";

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
          minLength="5"
          pattern="\w{5,5}"
          maxLength="5"
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
