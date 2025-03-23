import React, { useState } from "react";
import Navbar from "./Navbar";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-40 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full justify-between mx-auto px-4 flex items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className="flex items-center gap-2">
          <a href="/" className="logo flex items-center gap-2">
            <img src="/images/logo.ico" width={36} height={36} alt="Vichea" />
            <h2 className="text-white text-xl font-semibold">Chann Vichea</h2>
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <div className="hidden md:flex justify-end">
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={() => setNavOpen(false)}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
