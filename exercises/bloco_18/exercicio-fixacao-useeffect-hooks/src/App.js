import React, { useContext } from "react";
import TimerContext from "./context/TimerContext";

function App() {
  const { time, randomNumber, multiple } = useContext(TimerContext);

  return (
    <div>
      <label>
        Contador: 
        <p>{ time }</p>
      </label>

      <label>
        Número Aleatório
        <p>{ randomNumber }</p>
      </label>

      {
        multiple ? <p>Acertou!</p> : <p>Error! #404</p>
      }
    </div>
  );
}

export default App;
