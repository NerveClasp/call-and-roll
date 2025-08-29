import Link from "next/link";
import React from "react";
import Disclaimer from "./Disclaimer";

export default function Header({
  links,
}: {
  links?: Array<{ name: string; href: string }>;
}) {
  return (
    <header className="border-b  backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="transition-colors">
            <h1 className="text-2xl font-bold">Call and Roll</h1>
          </Link>
          <nav className="flex space-x-4">
            {links?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Disclaimer />
        </div>
      </div>
    </header>
  );
}
