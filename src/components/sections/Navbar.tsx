"use client";

import React, { useEffect, useState } from "react";
import LogoFausto from "../common/logo/LogoFausto";
import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [themeMode, setThemeMode] = useState<"auto" | "light" | "dark">("auto");
  const [isDark, setIsDark] = useState(false);

  const getButtonClass = (active: boolean) =>
    [
      "text-sm font-medium px-3 py-1 rounded-full border transition",
      active
        ? "border-purple-900/40 dark:border-white/40 bg-purple-900/10 dark:bg-white/10 text-purple-900 dark:text-white"
        : "border-purple-900/20 dark:border-white/20 text-purple-800 dark:text-white hover:bg-purple-900/10 dark:hover:bg-white/10",
    ].join(" ");

  return (
    <nav className="w-full flex items-center justify-between p-4 top-line bottom-line bg-purple-50/50 dark:bg-purple-900/50 sticky top-0 z-50 backdrop-blur-2xl ">
      <LogoFausto className="text-pink-700 dark:text-pink-100 h-8 w-auto" />
    </nav>
  );
};

export default Navbar;
