import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    link: "Headlines",
    location: "/",
  },
  {
    id: 1,
    link: "Business",
    location: "/business",
  },
  {
    id: 1,
    link: "Entertainment",
    location: "/entertainment",
  },
  {
    id: 1,
    link: "Science",
    location: "/science",
  },
  {
    id: 1,
    link: "Sports",
    location: "/sports",
  },
  {
    id: 1,
    link: "Technology",
    location: "/technology",
  },
];

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <nav className="w-[1120px] flex justify-between items-center py-4 lg:px-5">
        <Link href="/">Indie News</Link>

        <div className="flex gap-5 items-center">
          {navLinks.map((item) => {
            return (
              <Link
                href={item.location}
                className="hover:text-muted-foreground transition-colors"
              >
                {item.link}
              </Link>
            );
          })}

          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
