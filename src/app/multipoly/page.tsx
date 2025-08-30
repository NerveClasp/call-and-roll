import Header from "@/components/Header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import raspberry from "./raspberry.svg";
import { StaticImageData } from "next/image";
import "./page.scss";
import Link from "next/link";

type Cell = {
  id: string;
  label: string;
  className: string;
  icon?: string;
  svgIcon?: StaticImageData;
};

type SpecialCell = Cell & {
  type: "special";
  price?: never;
  color?: never;
};

type PropertyCell = (Cell & {
  type: "property";
}) &
  (
    | { color: "brown"; price: 1 }
    | { color: "lightblue"; price: 1 }
    | { color: "purple"; price: 2 }
    | { color: "orange"; price: 2 }
    | { color: "red"; price: 3 }
    | { color: "lightgreen"; price: 3 }
    | { color: "darkgreen"; price: 4 }
    | { color: "darkblue"; price: 5 }
  );

type BoardCell = SpecialCell | PropertyCell;

const cells: Array<BoardCell> = [
  {
    id: "start",
    type: "special",
    className: "start",
    label: "Start",
    icon: "⬅️",
  },
  {
    id: "dog",
    type: "property",
    className: "bottom1",
    label: "Dog",
    icon: "🐶",
    color: "brown",
    price: 1,
  },
  {
    id: "cat",
    type: "property",

    className: "bottom2",
    label: "Cat",
    icon: "🐱",
    color: "brown",
    price: 1,
  },
  {
    id: "chance1",
    type: "special",
    className: "bottom3",
    label: "Village vacation",
    icon: "❓️",
  },
  {
    id: "strawberry",
    type: "property",
    className: "bottom4",
    label: "Strawberry",
    icon: "🍓",
    color: "lightblue",
    price: 1,
  },
  {
    id: "raspberry",
    type: "property",
    className: "bottom5",
    label: "Raspberry",
    svgIcon: raspberry,
    color: "lightblue",
    price: 1,
  },
  { id: "jail", type: "special", label: "Jail", className: "jail", icon: "⛓️" },
  {
    id: "chicken",
    type: "property",
    className: "left1",
    label: "Chicken",
    icon: "🐔",
    color: "purple",
    price: 2,
  },
  {
    id: "bee",
    type: "property",
    className: "left2",
    label: "Bee",
    icon: "🐝",
    color: "purple",
    price: 2,
  },
  {
    id: "chance2",
    type: "special",
    className: "left3",
    label: "Village vacation",
    icon: "❓️",
  },
  {
    id: "watermill",
    type: "property",
    className: "left4",
    label: "Watermill",
    icon: "🛞",
    color: "orange",
    price: 2,
  },
  {
    id: "corn",
    type: "property",

    className: "left5",
    label: "Corn",
    icon: "🌽",
    color: "orange",
    price: 2,
  },
  {
    id: "parking",
    type: "special",
    className: "parking",
    label: "Parking",
    icon: "🅿️",
  },
  {
    id: "apple",
    type: "property",
    className: "top1",
    label: "Apple",
    icon: "🍎",
    color: "red",
    price: 3,
  },
  {
    id: "carrot",
    type: "property",
    className: "top2",
    label: "Carrot",
    icon: "🥕",
    color: "red",
    price: 3,
  },
  {
    id: "chance3",
    type: "special",
    className: "top3",
    label: "Village vacation",
    icon: "❓️",
  },
  {
    id: "horse",
    type: "property",
    className: "top4",
    label: "Horse",
    icon: "🐴",
    color: "lightgreen",
    price: 3,
  },
  {
    id: "pig",
    type: "property",
    className: "top5",
    label: "Pig",
    icon: "🐷",
    color: "lightgreen",
    price: 3,
  },
  {
    id: "police",
    type: "special",
    label: "Police",
    className: "police",
    icon: "👮‍♂️",
  },
  {
    id: "tractor",
    type: "property",
    className: "right1",
    label: "Tractor",
    icon: "🚜",
    color: "darkgreen",
    price: 4,
  },
  {
    id: "cow",
    type: "property",
    className: "right2",
    label: "Cow",
    icon: "🐮",
    color: "darkgreen",
    price: 4,
  },
  {
    id: "chance4",
    type: "special",
    className: "right3",
    label: "Village vacation",
    icon: "❓️",
  },
  {
    id: "market",
    type: "property",
    className: "right4",
    label: "Market",
    icon: "🏪",
    color: "darkblue",
    price: 5,
  },
  {
    id: "farm",
    type: "property",
    className: "right5",
    label: "Farm",
    icon: "👨‍🌾",
    color: "darkblue",
    price: 5,
  },
];

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
                      {cell.svgIcon && (
                        <img
                          src={cell.svgIcon.src}
                          alt={cell.label}
                          className="h-8 w-8 mb-1"
                        />
                      )}
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
              <Card className="h-64">Player 1</Card>
              <Card className="h-64">Player 2</Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
