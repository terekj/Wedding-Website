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
	className?: string;
	units?: (keyof TimeLeft)[];
};

const calculateRawTimeLeft = (targetDate: string): TimeLeft => {
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

const redistributeOmittedUnits = (
	timeLeft: TimeLeft,
	units: (keyof TimeLeft)[]
): Partial<TimeLeft> => {
	const result: Partial<TimeLeft> = {};
	const fullOrder: (keyof TimeLeft)[] = [
		"months",
		"weeks",
		"days",
		"hours",
		"minutes",
		"seconds",
	];

	let carry = 0;

	for (let i = 0; i < fullOrder.length; i++) {
		const unit = fullOrder[i];
		const value = timeLeft[unit] + carry;

		if (units.includes(unit)) {
			result[unit] = value;
			carry = 0;
		} else {
			// collapse this value into the next smaller unit
			let multiplier = 1;
			if (unit === "months") multiplier = 4.34524 * 7 * 24 * 60 * 60; // approx seconds in month
			else if (unit === "weeks") multiplier = 7;
			else if (unit === "days") multiplier = 24;
			else if (unit === "hours") multiplier = 60;
			else if (unit === "minutes") multiplier = 60;
			else if (unit === "seconds") multiplier = 1;

			carry = value * multiplier;
		}

		// convert carry to next unit's type
		if (i + 1 < fullOrder.length && carry > 0) {
			const nextUnit = fullOrder[i + 1];
			if (unit === "weeks" && nextUnit === "days") {
				carry = value * 7;
			} else if (unit === "days" && nextUnit === "hours") {
				carry = value * 24;
			} else if (unit === "hours" && nextUnit === "minutes") {
				carry = value * 60;
			} else if (unit === "minutes" && nextUnit === "seconds") {
				carry = value * 60;
			} else {
				carry = 0; // fallback
			}
		}
	}

	return result;
};

const Countdown: React.FC<CountdownProps> = ({
	date,
	className = "",
	units = ["months", "weeks", "days", "hours", "minutes", "seconds"],
}) => {
	const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>(() =>
		redistributeOmittedUnits(calculateRawTimeLeft(date), units)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(redistributeOmittedUnits(calculateRawTimeLeft(date), units));
		}, 1000);
		return () => clearInterval(interval);
	}, [date, units]);

	const renderDigits = (amount: number) => {
		const padded = amount.toString().padStart(2, "0");
		return padded.split("").map((digit, idx) => (
			<div className="digit-box" key={idx}>
				{digit}
			</div>
		));
	};

	return (
		<div className={"countdown-body" + (className ? " " + className : "")}>
			{units.map((unit) => (
				<div className="countdown-box" key={unit}>
					<div className="countdown-digits">
						{renderDigits(timeLeft[unit] ?? 0)}
					</div>
					<div className="countdown-unit">{unit}</div>
				</div>
			))}
		</div>
	);
};

export default Countdown;
