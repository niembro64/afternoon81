import React from "react";

const Step = (props) => {
  return (
    <div className="step">
      <span className="direction">
        {props.direction === "right" ? (
          <span className="direction">➡</span>
        ) : props.direct === "left" ? (
          <span className="direction">⬅</span>
        ) : (
          <span className="direction">⬆</span>
        )}
      </span>
      <h1>{props.instructions}</h1>
      <h1>{props.distance}</h1>
    </div>
  );
};

export default Step;
// test
