import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <nav className="w-[1120px] flex justify-between items-center pt-4 lg:px-5">
        <h1>Indie News</h1>
        <ul className="flex gap-5 items-center">
          <li>Headlines</li>
          <li>Innovation</li>
          <li>Politics</li>
          <li>Technology</li>
          <li>Startups</li>
          <Button>Login</Button>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
