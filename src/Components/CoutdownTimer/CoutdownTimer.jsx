import React, { useState, useEffect } from "react";
import styles from './style.module.scss';

const CountdownTimer = ({ targetDate }) => {

    const {box, title} = styles;

  // Hàm tính toán thời gian còn lại
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const formatNumber = (number) => String(number).padStart(2, "0");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span className={box} key={interval} >
          {formatNumber(timeLeft[interval])} <span className={title}>{interval}</span>{" "}
        </span>
      );
    }
  });
  return timerComponents;
};

export default CountdownTimer;
