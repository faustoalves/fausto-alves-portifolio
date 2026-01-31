"use client";

import React, { useEffect, useState } from "react";
import LogoFausto from "../common/logo/LogoFausto";
import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full flex items-center justify-between p-4 h-16 top-line bottom-line bg-purple-50/70 dark:bg-purple-900/70 sticky top-0 z-50 backdrop-blur-2xl ">
      <div className="w-full max-w-[1536px] h-full flex items-center  justify-start mx-auto">
        <LogoFausto className="text-pink-700 dark:text-pink-100 h-6 lg:h-8 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
