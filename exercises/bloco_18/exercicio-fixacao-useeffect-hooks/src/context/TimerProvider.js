import React, { useEffect, useState } from 'react';
import TimerContext from './TimerContext';

function TimerProvider({ children }) {
  const [time, setTime] = useState(30);

  const ONE_SECOND = 1000;

  useEffect(() => {
    const timeDecrement = setInterval(() => {
      setTime(time - 1);
    }, ONE_SECOND);

    return () => {
      clearInterval(timeDecrement);
    };
  }, [time]);

  const context = {
    time,
  }

  return (
    <TimerContext.Provider value={ context }>
      { children }
    </TimerContext.Provider>
  );
}

export default TimerProvider;
