"use client";

import Disclamer from "@/components/Disclamer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <main className="container">
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back
        </Button>
      </Link>
      <h1>Multypoly</h1>
      <Disclamer />
    </main>
  );
}

export default Page;
