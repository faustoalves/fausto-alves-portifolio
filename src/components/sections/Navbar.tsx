"use client";

import React, { useEffect, useState } from "react";
import LogoFausto from "../common/logo/LogoFausto";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full flex items-center justify-between p-4 top-line bottom-line bg-purple-50/50 dark:bg-purple-900/50 sticky top-0 z-50 backdrop-blur-2xl ">
      <LogoFausto className="text-pink-700 dark:text-pink-100 h-8 w-auto" />
    </nav>
  );
};

export default Navbar;
