import React from "react";

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
          <div className="w-full max-w-[1536px] mx-auto h-full flex items-center justify-center">
            <h1>Footer</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
