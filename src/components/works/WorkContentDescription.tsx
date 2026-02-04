import React from "react";
import { WorkContentProps } from "@/lib/works";

type Props = {
  isOdd: boolean;
};

export const WorkContentDescription = (props: WorkContentProps & Props) => {
  const { isOdd } = props;
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${
        isOdd ? "lg:order-3" : "lg:order-1"
      }`}
    >
      WorkContentDescription {isOdd ? "isOdd" : "isEven"}
    </div>
  );
};
