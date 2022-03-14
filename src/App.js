// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step from "./components/Step";
import { useState } from "react";

function App() {
  const [steps, setSteps] = useState([
    { direction: "right", instructions: "turn right at street", distance: 3.2 },
    {
      direction: "continue",
      instructions: "continue at other street",
      distance: 32,
    },
    { direction: "left", instructions: "turn left at mailbox", distance: 332 },
    {
      direction: "right",
      instructions: "turn right at street",
      distance: 33,
    },
  ]);

  return (
    <div className="App">
      <h1>test eric</h1>

    <form ></form>

      <div className="nav w-100 d-flex justify-content-evenly">
        <div className="w-75 mx-auto">
          {steps.map((item, i) => {
            return (
              <step
                key={i}
                direction={item.direction}
                instrucitons={item.instructions}
                distance={item.distance}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
