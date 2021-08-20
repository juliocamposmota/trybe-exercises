import React, { useContext } from "react";
import TimerContext from "./context/TimerContext";

function App() {
  const { time } = useContext(TimerContext);

  return (
    <div>
      <p>{ time }</p>
    </div>
  );
}

export default App;
