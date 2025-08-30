"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Dice from "@/components/Dice";
import { cells, players } from "@/lib/constants";
import "./Junior.scss";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Player } from "@/lib/types";

export default function Junior() {
  const [board, setBoard] = useState(cells);
  const [gamePlayers, setGamePlayers] = useState(players);

  const handleMoneyChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    player: Player,
  ) => {
    const newMoney = parseInt((e.target as HTMLInputElement).value, 10);
    if (!isNaN(newMoney)) {
      setGamePlayers((prevPlayers) =>
        prevPlayers.map((p) =>
          p.id === player.id ? { ...p, money: p.money + newMoney } : p,
        ),
      );
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="board grid grid-cols-7 grid-rows-7 h-full gap-1">
          {board.map((cell) => (
            <Card
              key={cell.id}
              className={`flex flex-col items-center justify-center border p-2 ${cell.className}`}
            >
              <CardTitle className="text-sm mb-1">{cell.label}</CardTitle>
              <CardContent className="flex flex-col items-center">
                {cell.icon && (
                  <span className="text-2xl mb-1">{cell.icon}</span>
                )}
                {cell.price && (
                  <span
                    className={`text-xs font-bold w-full`}
                    style={{
                      backgroundColor: cell.color || "black",
                      color: cell.color?.includes("light") ? "black" : "white",
                    }}
                  >
                    ${cell.price}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-64">
        <Card>
          <Link
            href="/multipoly/rules"
            className="text-blue-600 hover:underline"
          >
            Read the rules
          </Link>
        </Card>
        <Card className="p-4 text-center">
          <Dice />
        </Card>
        {gamePlayers.map((player) => (
          <Card key={player.id} className="items-center">
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              <span>{player.icon}</span> {player.name}
            </CardTitle>
            <CardContent className="flex flex-col gap-2">
              <div>Money: ${player.money}</div>
            </CardContent>
            <CardFooter className="w-full">
              <Input
                type="number"
                placeholder="Add money"
                className="w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleMoneyChange(e, player);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
