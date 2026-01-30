import React from "react";
import FaIcon from "../common/logo/FaIcon";
import LogoFausto from "../common/logo/LogoFausto";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="w-full h-8 bg-linear-to-b from-purple-900/20 to-purple-900/0 absolute top-0 left-0 z-10 border-t border-purple-700/30 dark:border-purple-500/30 dark:from-purple-900/50 dark:to-purple-900/0" />

      <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-400px)] bg-linear-to-b from-purple-200 to-purple-50 dark:from-purple-800 dark:to-purple-900">
          <div className="w-full max-w-[1536px] mx-auto h-full flex flex-col items-center justify-center relative">
            <FaIcon className="min-w-[520px] h-[520px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-200 dark:text-purple-800 blur" />
            <div className="flex flex-row items-center justify-Between w-full h-full z-1">
              <LogoFausto className="h-20 w-auto  text-purple-800 dark:text-purple-100" />
              <div className="flex flex-col items-center justify-center">
                {/* Include social networks */}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-18 border-t border-purple-700/30 dark:border-purple-500/30 z-1">
              <p className="text-sm text-purple-600 dark:text-purple-400 text-center uppercase tracking-widest">
                2026 - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
