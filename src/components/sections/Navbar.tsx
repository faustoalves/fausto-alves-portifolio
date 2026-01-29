"use client";

import React, { useEffect, useState } from "react";
import LogoFausto from "../common/logo/LogoFausto";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [themeMode, setThemeMode] = useState<"auto" | "light" | "dark">(
    "auto",
  );
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light" || stored === "auto") {
      setThemeMode(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const dark =
      themeMode === "dark" ? true : themeMode === "light" ? false : media.matches;

    root.classList.toggle("dark", dark);
    setIsDark(dark);
    localStorage.setItem("theme", themeMode);

    if (themeMode !== "auto") {
      return;
    }

    const handleChange = (event: MediaQueryListEvent) => {
      root.classList.toggle("dark", event.matches);
      setIsDark(event.matches);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [themeMode]);

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
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setThemeMode("auto")}
          aria-pressed={themeMode === "auto"}
          className={getButtonClass(themeMode === "auto")}
        >
          Auto
        </button>
        <button
          type="button"
          onClick={() => setThemeMode("light")}
          aria-pressed={themeMode === "light"}
          className={getButtonClass(themeMode === "light")}
        >
          Claro
        </button>
        <button
          type="button"
          onClick={() => setThemeMode("dark")}
          aria-pressed={themeMode === "dark"}
          className={getButtonClass(themeMode === "dark")}
        >
          Escuro
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
