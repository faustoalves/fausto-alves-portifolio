import React from "react";
import { WorkContentProps } from "@/lib/works";
import StackList from "./StackList";

type Props = {
  isOdd: boolean;
};

export const WorkContentDescription = (props: WorkContentProps & Props) => {
  const { isOdd } = props;
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center order-3 py-8 lg:py-12 ${
        isOdd ? "lg:order-3" : "lg:order-1"
      }`}
    >
      <StackList {...props} />
    </div>
  );
};
