import React from "react";

function GuessList({ guessList }) {
  return (
    <div>
      <div className="guess-results">
        {guessList.map((guess) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {guess}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GuessList;
