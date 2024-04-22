import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <nav className="w-[1120px] flex justify-between items-center py-4 lg:px-5">
        <Link href="/">Indie News</Link>
        <ul className="flex gap-5 items-center">
          <Link
            href="/"
            className="hover:text-muted-foreground transition-colors"
          >
            Headlines
          </Link>
          <li>Innovation</li>
          <li>Politics</li>
          <li>Technology</li>
          <li>Startups</li>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
