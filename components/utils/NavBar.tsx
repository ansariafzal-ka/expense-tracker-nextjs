import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav
      id="home"
      className="w-full px-6 py-3 border-b flex justify-between items-center"
    >
      <Link href="/" className="text-xl font-bold">
        Expense Tracker
      </Link>
      <Link href="#contact">
        <Button>Contact Us</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
