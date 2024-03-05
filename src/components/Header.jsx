import React from "react";

const Header = () => {
  return (
    <header className="p-8 flex justify-between">
      <a href="#" className="text-xl">
        GymRat
      </a>
      <nav className="flex gap-4 items-center">
        <a href="#" className="hover:underline">
          Program
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
