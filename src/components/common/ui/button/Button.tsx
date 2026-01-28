"use client";

import { useRef } from "react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { tv, type VariantProps } from "tailwind-variants";

import { motion } from "framer-motion";

const buttonStyles = tv({
  base: "relative w-full bg-purple-300/50 block overflow-hidden p-4 whitespace-nowrap text-2xl font-black uppercase sm:text-2xl md:text-3xl lg:text-3xl",
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
    size: {
      sm: "h-9 text-xs",
      md: "h-11",
      lg: "h-12 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    children?: ReactNode;
    label?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
  };

const Button = ({
  label,
  children,
  className,
  type = "button",
  disabled,
  loading,
  icon,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const DURATION = 0.4;
  const STAGGER = 0.01;
  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      // href="#test"
      className={cn(
        "relative bg-purple-300/50 block overflow-hidden whitespace-nowrap text-2xl font-black uppercase sm:text-2xl md:text-3xl lg:text-3xl",
        className,
      )}
    >
      <div className={cn("relative w-full flex items-center justify-center")}>
        {label!.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full flex items-center justify-center text-cyan-500/50 ",
        )}
      >
        {label!.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: (STAGGER * i) / 2,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.button>
  );
};

export default Button;
