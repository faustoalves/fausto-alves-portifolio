import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Menu = ({ isOpen, closeMenu }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: "110%" }}
            animate={{ opacity: 1, x: isOpen ? "0%" : "110%" }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            id="menu"
            className="absolute flex flex-col top-0 right-0 items-start justify-start h-screen w-4/5 lg:min-w-[350px] lg:w-3/5 lg:max-w-[450px] bg-purple-50 dark:bg-purple-900 py-4 z-60 border-l border-pink-700 dark:border-purple-800 shadow-2xl"
          >
            <div className="flex items-start p-4 justify-end w-full h-auto ">
              <div
                className="flex items-center justify-center w-14 h-14 cursor-pointer  "
                onClick={closeMenu}
                aria-label="Close menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    closeMenu();
                  }
                }}
              >
                <X className="w-12 h-12 text-pink-700 hover:text-pink-900 dark:text-pink-300 dark:hover:text-pink-200" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full pb-24 lg:pb-12">
              <MenuItem label="Home" href="/" index={0} closeMenu={closeMenu} />
              <MenuItem
                label="Who I am"
                href="/#about"
                index={1}
                closeMenu={closeMenu}
              />
              <MenuItem
                label="Last Works"
                href="/#works"
                index={2}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="Benu"
                href="/benu"
                index={3}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="Klosterwald"
                href="/klosterwald"
                index={4}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="Mementry"
                href="/mementry"
                index={5}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="Mymc"
                href="/mymc"
                index={6}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="Crescimentum"
                href="/crescimentum"
                index={7}
                closeMenu={closeMenu}
              />
              <SubMenuItem
                label="HM"
                href="/hm"
                index={8}
                closeMenu={closeMenu}
              />

              <MenuItem
                label="Skills"
                href="/#skills"
                index={9}
                closeMenu={closeMenu}
              />
              <MenuItem
                label="Let's talk"
                href="/#agenda"
                index={10}
                closeMenu={closeMenu}
              />
            </div>
          </motion.div>
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            className="absolute flex flex-col top-0 right-0 w-screen h-screen bg-purple-50/70 dark:bg-purple-950/70
            backdrop-blur-2xl z-50"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MenuItem = ({
  label,
  href,
  index,
  closeMenu,
}: {
  label: string;
  href: string;
  index: number;
  closeMenu: () => void;
}) => {
  return (
    <motion.a
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.3, delay: 0.05 * index + 0.2, ease: "easeOut" }}
      href={href}
      onClick={closeMenu}
      className="text-cyan-700 dark:text-cyan-500 font-light w-full py-2 lg:py-4 px-8 hover:bg-cyan-100 dark:hover:bg-cyan-800/20"
    >
      <p className="text-2xl lg:text-5xl leading-6 lg:leading-7 uppercase">
        {label}
      </p>
    </motion.a>
  );
};
export const SubMenuItem = ({
  label,
  href,
  index,
  closeMenu,
}: {
  label: string;
  href: string;
  index: number;
  closeMenu: () => void;
}) => {
  return (
    <motion.a
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.3, delay: 0.05 * index + 0.2, ease: "easeOut" }}
      href={href}
      onClick={closeMenu}
      className="text-pink-700 dark:text-pink-500 leading-7 font-light w-full hover:bg-pink-100 dark:hover:bg-purple-800/50 py-2 lg:py-2 px-12 uppercase"
    >
      <p className="text-lg lg:text-3xl">{label}</p>
    </motion.a>
  );
};

export default Menu;
