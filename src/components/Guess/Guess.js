import React from "react";
import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS).map((num) => (
        <span className="cell" key={Math.random()}>
          {value ? value[num] : null}{" "}
        </span>
      ))}
    </p>
  );
}

export default Guess;
