import { useEffect, useMemo, useState } from "react";
import Title from "./Title";

const Countdown = () => {
  const weddingDate = useMemo(() => new Date("2025-05-03T11:30:00"), []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  function calculateTimeLeft(weddingDate: string | number | Date) {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <>
      <div className="my-8 flex flex-col items-center">
        <Title title="Menghitung hari" />
        <div className="flex items-center justify-center gap-4 sm:gap-10">
          <div className="w-20 rounded-lg p-3 shadow-lg shadow-slate-300">
            <p className="clash-display text-2xl font-medium sm:text-3xl">
              {timeLeft.days}
            </p>
            <p>Hari</p>
          </div>
          <div className="w-20 rounded-lg p-3 shadow-lg shadow-slate-300">
            <p className="clash-display text-2xl font-medium sm:text-3xl">
              {timeLeft.hours}
            </p>
            <p>Jam</p>
          </div>
          <div className="w-20 rounded-lg p-3 shadow-lg shadow-slate-300">
            <p className="clash-display text-2xl font-medium sm:text-3xl">
              {timeLeft.minutes}
            </p>
            <p>Minit</p>
          </div>
          <div className="w-20 rounded-lg p-3 shadow-lg shadow-slate-300">
            <p className="clash-display text-2xl font-medium sm:text-3xl">
              {timeLeft.seconds}
            </p>
            <p>Saat</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
