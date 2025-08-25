"use client";

import Disclamer from "@/components/Disclamer";
import "./page.css";

function Page() {
  return (
    <>
      <h1>Welcome to Call And Roll</h1>
      <Disclamer />

      <div className="row">
        <a href="/multipoly">
          <img
            src="/multipoly.svg"
            className="logo multipoly"
            alt="Multipoly logo"
          />
          <span>Multypoly</span>
        </a>
      </div>
    </>
  );
}

export default Page;
