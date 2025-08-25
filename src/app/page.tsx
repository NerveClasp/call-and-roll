"use client";

import Disclamer from "@/components/Disclamer";
import "./page.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <>
      <h1 className="text-4xl mb-4">Welcome to Call And Roll</h1>
      <Disclamer />

      <div className="row">
        <Link href="/multipoly">
          <img
            src="/multipoly.svg"
            className="logo multipoly"
            alt="Multipoly logo"
          />
          <Button variant="outline" className="mb-4">
            Multypoly
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Page;
