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
  const [result, setResult] = useState<Total | null>(null);
  function rollDice(): Total {
    return (Math.floor(Math.random() * 6) + 1) as Total;
  }

  function handleRoll() {
    setResult(rollDice());
    // @TODO: handle doubles later
  }

  return (
    <>
      <Button onClick={handleRoll} className="w-full">
        Roll Die
      </Button>
      <div className="text-8xl font-extrabold">{diceIcons[result || 6]}</div>
    </>
  );
}
