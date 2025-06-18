import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import "./countdown.css";

type TimeLeft = {
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownProps = {
    date: string;
    className: string;
};

const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const now = DateTime.now().setZone("America/Los_Angeles");
    const target = DateTime.fromISO(targetDate);

    if (target <= now) {
        return { months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const months = Math.floor(target.diff(now, "months").months);
    const afterMonths = now.plus({ months });
    const diff = target.diff(afterMonths, ["days", "hours", "minutes", "seconds"]);

    const totalDays = Math.floor(diff.days);
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    const hours = Math.floor(diff.hours);
    const minutes = Math.floor(diff.minutes);
    const seconds = Math.floor(diff.seconds);

    return { months, weeks, days, hours, minutes, seconds };
};

const Countdown: React.FC<CountdownProps> = ({ date , className = ""}) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        calculateTimeLeft(date)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(date));
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

    const renderDigits = (amount: number) => {
        const padded = amount.toString().padStart(2, "0");
        return padded.split("").map((digit, idx) => (
            <div className="digit-box" key={idx}>
                {digit}
            </div>
        ));
    };

    return (
        <div className={"countdown-body" + (className !== "" ? " " + className : "")}>
            {Object.entries(timeLeft).map(([unit, amount]) => (
                <div className="countdown-box" key={unit}>
                    <div className="countdown-digits">{renderDigits(amount)}</div>
                    <div className="countdown-unit">{unit}</div>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
