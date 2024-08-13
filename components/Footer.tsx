import Link from "next/link";

import { House, Feather, Contact } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-6 border-t">
      <ul className="flex flex-col justify-center items-start gap-2">
        <h1 className="text-lg font-medium">Navigation</h1>
        <li className="flex justify-start items-start gap-2 hover:translate-x-3 duration-150">
          <House width={20} height={20} />
          <Link href="#home">Home</Link>
        </li>
        <li className="flex justify-start items-start gap-2 hover:translate-x-3 duration-150">
          <Feather width={20} height={20} />
          <Link href="#features">Features</Link>
        </li>
        <li className="flex justify-start items-start gap-2 hover:translate-x-3 duration-150">
          <Contact width={20} height={20} />
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
