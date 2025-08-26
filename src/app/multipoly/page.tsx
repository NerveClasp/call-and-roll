"use client";

import Disclamer from "@/components/Disclamer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <>
      <Link href="/">
        <Button variant="outline" className="mb-4">
          ← Back
        </Button>
      </Link>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Multypoly</h1>
          <Disclamer />
        </div>
      </div>
    </>
  );
}

export default Page;
