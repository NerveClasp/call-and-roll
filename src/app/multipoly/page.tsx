import Header from "@/components/Header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import "./page.scss";
import Link from "next/link";
import Dice from "@/components/Dice";
import { cells, players } from "@/lib/constants";

function Page() {
  return (
    <>
      <Header links={[{ name: "Multypoly", href: "/multipoly" }]} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4 flex gap-4 justify-center">
            {/* @TODO: do some clever calculations here later, for now this will do */}
            <div className="wrapper">
              <div className="board grid grid-cols-7 grid-rows-7 h-full gap-1">
                {cells.map((cell) => (
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
                            color: cell.color?.includes("light")
                              ? "black"
                              : "white",
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
              {players.map((player) => (
                <Card key={player.id} className="items-center">
                  <CardTitle className="text-lg mb-2 flex items-center gap-2">
                    <span>{player.icon}</span> {player.name}
                  </CardTitle>
                  <CardContent className="flex flex-col gap-2">
                    <div>Money: ${player.money}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
