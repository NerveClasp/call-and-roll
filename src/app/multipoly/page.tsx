import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import raspberry from "./raspberry.svg";
import watermill from "./watermill.svg";
import { StaticImageData } from "next/image";

const cells: Array<
  Array<{
    id: string;
    label: string;
    icon?: string;
    svgIcon?: StaticImageData;
    color?:
      | "brown"
      | "lightblue"
      | "purple"
      | "orange"
      | "red"
      | "lightgreen"
      | "darkgreen"
      | "darkblue";
    price?: 1 | 2 | 3 | 4 | 5;
  }>
> = [
  [
    { id: "start", label: "Start" },
    { id: "dog", label: "Dog", icon: "🐶", color: "brown", price: 1 },
    { id: "cat", label: "Cat", icon: "🐱", color: "brown", price: 1 },
    { id: "chance1", label: "Village vacation", icon: "❓️" },
    {
      id: "strawberry",
      label: "Strawberry",
      icon: "🍓",
      color: "darkblue",
      price: 1,
    },
    {
      id: "raspberry",
      label: "Raspberry",
      svgIcon: raspberry,
      color: "darkblue",
      price: 1,
    },
  ],
  [
    { id: "jail", label: "Jail" },
    { id: "chicken", label: "Chicken", icon: "🐔", color: "purple", price: 2 },
    { id: "bee", label: "Bee", icon: "🐝", color: "purple", price: 2 },
    { id: "chance2", label: "Farm holiday", icon: "❓️" },
    {
      id: "watermill",
      label: "Watermill",
      svgIcon: watermill,
      color: "orange",
      price: 2,
    },
    { id: "corn", label: "Corn", icon: "🌽", color: "orange", price: 2 },
  ],
  [
    { id: "parking", label: "Parking" },
    { id: "apple", label: "Apple", icon: "🍎", color: "red", price: 3 },
    { id: "carrot", label: "Carrot", icon: "🥕", color: "red", price: 3 },
    { id: "chance3", label: "Farm holiday", icon: "❓️" },
    {
      id: "horse",
      label: "Horse",
      icon: "🐴",
      color: "lightgreen",
      price: 3,
    },
    { id: "pig", label: "Pig", icon: "🐷", color: "lightgreen", price: 3 },
  ],
  [
    { id: "police", label: "Police" },
    {
      id: "tractor",
      label: "Tractor",
      icon: "🚜",
      color: "darkgreen",
      price: 4,
    },
    { id: "cow", label: "Cow", icon: "🐮", color: "darkgreen", price: 4 },
    { id: "chance4", label: "Farm holiday", icon: "❓️" },
    {
      id: "market",
      label: "Market",
      icon: "🏪",
      color: "darkblue",
      price: 5,
    },
    { id: "farm", label: "Farm", icon: "👨‍🌾", color: "darkblue", price: 5 },
  ],
];

function Page() {
  return (
    <>
      <Header links={[{ name: "Multypoly", href: "/multipoly" }]} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4 flex items-center gap-4 justify-center">
            {/* @TODO: do some clever calculations here later, for now this will do */}
            <Card className="w-[100vh] h-[100vh]">Game</Card>
            <div className="w-64">
              <Card className="h-64 mb-4">Player 1</Card>
              <Card className="h-64 mb-4">Player 2</Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
