import React, { useEffect, useState } from 'react';
import { checkMultiple, generateRandomNumber } from '../helpers';
import TimerContext from './TimerContext';

const timerLimit = 30
const initialNumber = generateRandomNumber();

function TimerProvider({ children }) {
  const [time, setTime] = useState(timerLimit);
  const [multiple, setMultiple] = useState(false);
  const [randomNumber, setRandomNumber] = useState(initialNumber);

  const ONE_SECOND = 1000;
  const FOUR_SECONDS = 4000;
  const TEN_SECONDS = 10000;

  useEffect(() => {
    const timeDecrement = setInterval(() => {
      setTime(time - 1);
    }, ONE_SECOND);

    return () => {
      clearInterval(timeDecrement);
    };
  }, [time]);

  useEffect(() => {
    const getRandomNumber = setInterval(() => {
      const number = generateRandomNumber();
      setRandomNumber(number);
    }, TEN_SECONDS);

    return () => {
      clearInterval(getRandomNumber);
    };
  }, [randomNumber]);

  useEffect(() => {
    const getMultiple = setInterval(() => {
      if (checkMultiple(randomNumber)) setMultiple(true);
    }, FOUR_SECONDS);

    return () => {
      clearInterval(getMultiple);
    }
  }, [randomNumber]);

  const context = {
    time,
    randomNumber,
    multiple,
  }

  return (
    <TimerContext.Provider value={ context }>
      { children }
    </TimerContext.Provider>
  );
}

export default TimerProvider;
