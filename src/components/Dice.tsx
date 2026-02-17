"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const diceIcons = {
  1: "⚀",
  2: "⚁",
  3: "⚂",
  4: "⚃",
  5: "⚄",
  6: "⚅",
};

type Total = 1 | 2 | 3 | 4 | 5 | 6;

export default function Dice() {
  const [result, setResult] = useState<Total>(6);
  const [isRolling, setIsRolling] = useState(false);

  function rollDice(): Total {
    return (Math.floor(Math.random() * 6) + 1) as Total;
  }

  function handleRoll() {
    if (isRolling) return;

    setIsRolling(true);

    const interval = setInterval(() => {
      setResult(rollDice());
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setResult(rollDice());
      setIsRolling(false);
    }, 600);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`text-9xl transition-all duration-100 ${
          isRolling
            ? "animate-bounce scale-110 text-primary rotate-12"
            : "rotate-0"
        }`}
      >
        {diceIcons[result]}
      </div>

      <Button
        onClick={handleRoll}
        disabled={isRolling}
        className="w-full max-w-[200px]"
      >
        {isRolling ? "Rolling..." : "Roll Die"}
      </Button>
    </div>
  );
}
