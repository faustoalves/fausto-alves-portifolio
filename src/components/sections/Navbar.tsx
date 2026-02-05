"use client";

import LogoFausto from "../common/logo/LogoFausto";
import { MenuIcon } from "lucide-react";
import Menu from "../navbar/Menu";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 h-16 top-line bottom-line bg-purple-50/70 dark:bg-purple-900/70 sticky top-0 z-50 backdrop-blur-2xl ">
      <div className="w-full max-w-[1556px] h-full flex items-center px-2 justify-between mx-auto">
        <a href="/">
          <LogoFausto className="text-pink-700 dark:text-pink-100 h-6 lg:h-8 w-auto ml-2" />
        </a>
        <button
          type="button"
          className="text-pink-700 dark:text-pink-100 p-2 cursor-pointer"
          aria-label="Open menu"
        >
          <MenuIcon
            className="w-8 h-8"
            onClick={openMenu}
            aria-label="Open menu"
          />
        </button>
      </div>
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
