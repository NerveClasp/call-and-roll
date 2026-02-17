"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  BoardCard,
} from "@/components/ui/card";
import Link from "next/link";
import Dice from "@/components/Dice";
import { cells, players } from "@/lib/constants";
import "./Junior.scss";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Player } from "@/lib/types";
import { Button } from "@/components/ui/button";

const ACTIVE_BORDER = "border-yellow-500";

export default function Junior() {
  const [turn, setTurn] = useState(0); // index of the current player's turn
  const [board, setBoard] = useState(cells);
  const [gamePlayers, setGamePlayers] = useState(players);
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const playersPositionsDict: { [key: number]: Player[] } = {};
  gamePlayers.forEach((player) => {
    if (!playersPositionsDict[player.position]) {
      playersPositionsDict[player.position] = [];
    }
    playersPositionsDict[player.position].push(player);
  });

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

  const onCellClick = (cellIndex: number) => {
    setSelectedCell(cellIndex);
  };

  function handlePlayerTurn(player: Player): void {
    if (selectedCell === null) return;
    const currentCell = board[selectedCell];
    if (
      currentCell.type === "property" &&
      currentCell.owner &&
      currentCell.owner !== player.id
    ) {
      // Property is owned by another player, pay rent
      const owner = gamePlayers.find((p) => p.id === currentCell.owner);
      if (owner) {
        const rent = currentCell.price || 0;
        if (player.money >= rent) {
          setGamePlayers((prevPlayers) =>
            prevPlayers.map((p) => {
              if (p.id === player.id) return { ...p, money: p.money - rent };
              if (p.id === owner.id) return { ...p, money: p.money + rent };
              return p;
            }),
          );
        } else {
          alert(`${player.name} does not have enough money to pay rent!`);
          return;
        }
      }
    } else if (currentCell.type === "property" && !currentCell.owner) {
      // Property is unowned, buy it
      const price = currentCell.price || 0;
      if (player.money >= price) {
        setGamePlayers((prevPlayers) =>
          prevPlayers.map((p) =>
            p.id === player.id ? { ...p, money: p.money - price } : p,
          ),
        );
        setBoard((prevBoard) =>
          prevBoard.map((cell, index) =>
            index === selectedCell ? { ...cell, owner: player.id } : cell,
          ),
        );
      } else {
        console.log(
          `${player.name} does not have enough money to buy this property!`,
        );
      }
    }

    setGamePlayers((prevPlayers) =>
      prevPlayers.map((p) =>
        p.id === player.id ? { ...p, position: selectedCell } : p,
      ),
    );

    setTurn((prevTurn) => (prevTurn + 1) % gamePlayers.length);
    setSelectedCell(null);
  }

  return (
    <>
      <div className="wrapper">
        <div className="board grid grid-cols-7 grid-rows-7 h-full gap-1">
          {board.map((cell, cellIndex) => (
            <BoardCard
              key={cell.id}
              className={`board-card border ${cell.className} ${
                playersPositionsDict[cellIndex] ? "bg-yellow-900" : ""
              } ${selectedCell === cellIndex ? ACTIVE_BORDER : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => onCellClick(cellIndex)}
            >
              <div className="board-card-header block">
                {cell.price && (
                  <span
                    className={`block text-l font-bold w-full rounded-xl mt-1 px-1`}
                    style={{
                      backgroundColor: cell.color || "black",
                      color:
                        cell?.textColor ??
                        (cell.color?.includes("light") ? "black" : "white"),
                    }}
                  >
                    ${cell.price}{" "}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center">
                {cell.icon && (
                  <span className="flex text-2xl">
                    {cell.icon}{" "}
                    {cell?.owner &&
                      gamePlayers.find((p) => p.id === cell?.owner)?.icon}
                  </span>
                )}
              </div>
              <div className="flex space-x-1 justify-center items-center">
                {playersPositionsDict[cellIndex]?.map((player) => (
                  <span
                    className={`text-2xl ${players[turn].id === player.id ? "animate-pulse bg-yellow-400 rounded-2xl p-1" : ""}`}
                    key={player.id}
                    title={player.name}
                  >
                    {player.icon}
                  </span>
                ))}
              </div>
            </BoardCard>
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
        {gamePlayers.map((player, playerIndex) => (
          <Card
            key={player.id}
            className={`items-center gap-1 ${turn === playerIndex ? ACTIVE_BORDER : ""}`}
          >
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              <span>{player.icon}</span> {player.name}
            </CardTitle>
            <CardContent className="flex flex-col gap-2">
              <div>Money: ${player.money}</div>
            </CardContent>
            <CardFooter className="w-full flex flex-col">
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
              <Button
                className="w-full mt-2"
                onClick={() => handlePlayerTurn(player)}
                disabled={turn !== playerIndex}
              >
                Make a Move
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
