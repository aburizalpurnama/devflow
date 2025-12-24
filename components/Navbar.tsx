import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="space justify-beet flex w-full flex-wrap items-center border-b-2 px-6 py-8">
        <p>Next.js</p>

        <ul className="flex flex-1 list-none items-center justify-end gap-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/project"}>
            <li>Project</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
