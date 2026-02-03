import React from "react";
import WorkHeaderItem from "./WorkHeaderItem";
import WorkHeaderColumn from "./WorkHeaderColumn";
import { WorkProps } from "@/lib/works";

const WorkHeaderAnimation = ({ client, headerImages }: WorkProps) => {
  const color =
    client === "benu"
      ? "from-[#45455F] to-[#303042]"
      : client === "kloster"
      ? "from-[#668753] to-[#547840]"
      : client === "crescimentum"
      ? "from-[#360000] to-[#190000]"
      : client === "hm"
      ? "from-[#D51030] to-[#AE0521]"
      : client === "mementry"
      ? "from-[#504462] to-[#4F4361]"
      : client === "mymc"
      ? "from-[#2B2B2B] to-[#191919]"
      : "#000000";
  return (
    <div className={`w-full h-full overflow-hidden bg-linear-to-br ${color}`}>
      <WorkHeaderColumn direction="top" index={0}>
        <WorkHeaderItem image={headerImages[0]} />
        <WorkHeaderItem image={headerImages[1]} />
        <WorkHeaderItem image={headerImages[2]} />
      </WorkHeaderColumn>
      <WorkHeaderColumn direction="bottom" index={1}>
        <WorkHeaderItem image={headerImages[3]} />
        <WorkHeaderItem image={headerImages[4]} />
        <WorkHeaderItem image={headerImages[5]} />
      </WorkHeaderColumn>
      <WorkHeaderColumn direction="top" index={2}>
        <WorkHeaderItem image={headerImages[6]} />
        <WorkHeaderItem image={headerImages[7]} />
        <WorkHeaderItem image={headerImages[8]} />
      </WorkHeaderColumn>
      <WorkHeaderColumn direction="bottom" index={3}>
        <WorkHeaderItem image={headerImages[9]} />
        <WorkHeaderItem image={headerImages[10]} />
        <WorkHeaderItem image={headerImages[11]} />
      </WorkHeaderColumn>
      <WorkHeaderColumn direction="top" index={4}>
        <WorkHeaderItem image={headerImages[0]} />
        <WorkHeaderItem image={headerImages[1]} />
        <WorkHeaderItem image={headerImages[2]} />
      </WorkHeaderColumn>
      <WorkHeaderColumn direction="bottom" index={5}>
        <WorkHeaderItem image={headerImages[3]} />
        <WorkHeaderItem image={headerImages[4]} />
        <WorkHeaderItem image={headerImages[5]} />
      </WorkHeaderColumn>
    </div>
  );
};

export default WorkHeaderAnimation;
