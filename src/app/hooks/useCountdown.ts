import { useState, useEffect } from "react";

const COUNTDOWN_KEY = "saleCountdownEndTime";
const COUNTDOWN_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CountdownTime {
  hours: string;
  minutes: string;
  seconds: string;
}

export const useCountdown = (): CountdownTime => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getEndTime = (): number => {
      const stored = localStorage.getItem(COUNTDOWN_KEY);

      if (stored) {
        const endTime = parseInt(stored, 10);
        const now = Date.now();

        if (endTime <= now) {
          const newEndTime = now + COUNTDOWN_DURATION;
          localStorage.setItem(COUNTDOWN_KEY, newEndTime.toString());
          return newEndTime;
        }

        return endTime;
      }

      const newEndTime = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem(COUNTDOWN_KEY, newEndTime.toString());
      return newEndTime;
    };

    const endTime = getEndTime();

    const updateCountdown = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      if (remaining === 0) {
        const newEndTime = Date.now() + COUNTDOWN_DURATION;
        localStorage.setItem(COUNTDOWN_KEY, newEndTime.toString());
        return;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};
