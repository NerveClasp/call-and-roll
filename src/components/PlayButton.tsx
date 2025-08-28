import Link from "next/link";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const PlayButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} passHref>
      <Button className="w-full">
        <Play className="w-4 h-4 mr-2" />
        Play Now
      </Button>
    </Link>
  );
};
export default PlayButton;
