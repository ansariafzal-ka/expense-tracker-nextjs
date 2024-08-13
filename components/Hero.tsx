import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="px-6 py-12 flex flex-col justify-center items-center gap-3 border-b md:h-[350px]">
      <h1 className="text-3xl text-center font-bold md:text-4xl">
        Manage Your Finances with Ease
      </h1>
      <p className="text-center sm:max-w-[500px]">
        Whether managing household expenses, tracking spending, or budgeting,
        our tool simplifies financial management.
      </p>
      <Link href="/create">
        <Button>Create Expense</Button>
      </Link>
    </section>
  );
};

export default Hero;
