"use client";

import React, { useEffect, useState } from "react";
import LogoFausto from "../common/logo/LogoFausto";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const handleToggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <nav className="w-full flex items-center justify-between p-4 top-line bottom-line bg-purple-50/50 dark:bg-purple-900/50 sticky top-0 z-50 backdrop-blur-2xl ">
      <LogoFausto className="text-pink-700 dark:text-pink-100 h-8 w-auto" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleToggleTheme}
          className="text-xs uppercase tracking-wide text-purple-700 dark:text-purple-200"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
