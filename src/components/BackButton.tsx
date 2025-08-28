import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <Button variant="outline" className="mb-4">
        ← Back
      </Button>
    </Link>
  );
}
