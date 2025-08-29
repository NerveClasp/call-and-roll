import Disclaimer from "@/components/Disclaimer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PlayButton from "@/components/PlayButton";

const games: Array<{
  id: string;
  name: string;
  href: string;
  img: string;
  description: string;
}> = [
  {
    id: "multipoly",
    name: "Multipoly",
    description: "Monopoly helper for remote play",
    href: "/multipoly",
    img: "/multipoly.svg",
  },
];

function Page() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Call and Roll!
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Play tabletop games with your loved ones, no matter the distance!
        </p>

        <Disclaimer />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <Card
            key={game.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="text-center">
              <Image
                src={game.img}
                alt={game.name}
                width={64}
                height={64}
                className="mx-auto mb-2"
              />
              <CardTitle className="text-xl">{game.name}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <PlayButton href={game.href} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
