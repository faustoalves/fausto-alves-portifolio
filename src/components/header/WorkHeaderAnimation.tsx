"use client";
import React, { useState } from "react";
import WorkHeaderItem from "./WorkHeaderItem";
import WorkHeaderColumn from "./WorkHeaderColumn";
import { WorkProps } from "@/lib/works";
import WorkHeaderSplashClient from "./WorkHeaderSplashClient";

const WorkHeaderAnimation = (props: WorkProps) => {
  const { client, headerImages } = props;
  const [nextAnimation, setNextAnimation] = useState(false);
  const color =
    client === "benu"
      ? "from-[#242430] to-[#46475F]"
      : client === "kloster"
      ? "from-[#7A9664] to-[#465937]"
      : client === "crescimentum"
      ? "from-[#7E2B5D] to-[#4F002F]"
      : client === "hm"
      ? "from-[#C03033] to-[#72291A]"
      : client === "mementry"
      ? "from-[#00A8B0] to-[#008A91]"
      : client === "mymc"
      ? "from-[#FFA702] to-[#EF7015]"
      : "#000000";
  return (
    <>
      <WorkHeaderSplashClient
        setNextAnimation={setNextAnimation}
        nextAnimation={nextAnimation}
        {...props}
      />

      {nextAnimation && (
        <div
          className={`w-full h-full absolute top-0 left-0 overflow-hidden bg-linear-to-br ${color}`}
        >
          <WorkHeaderColumn direction="top" index={0}>
            <WorkHeaderItem image={headerImages[0]} index={0} direction="top" />
            <WorkHeaderItem image={headerImages[1]} index={1} direction="top" />
            <WorkHeaderItem image={headerImages[2]} index={2} direction="top" />
          </WorkHeaderColumn>
          <WorkHeaderColumn direction="bottom" index={1}>
            <WorkHeaderItem
              image={headerImages[3]}
              index={5}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[4]}
              index={4}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[5]}
              index={3}
              direction="bottom"
            />
          </WorkHeaderColumn>
          <WorkHeaderColumn direction="top" index={2}>
            <WorkHeaderItem image={headerImages[6]} index={6} direction="top" />
            <WorkHeaderItem image={headerImages[7]} index={7} direction="top" />
            <WorkHeaderItem image={headerImages[8]} index={8} direction="top" />
          </WorkHeaderColumn>
          <WorkHeaderColumn direction="bottom" index={3}>
            <WorkHeaderItem
              image={headerImages[9]}
              index={11}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[10]}
              index={10}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[11]}
              index={9}
              direction="bottom"
            />
          </WorkHeaderColumn>
          <WorkHeaderColumn direction="top" index={4}>
            <WorkHeaderItem
              image={headerImages[0]}
              index={12}
              direction="top"
            />
            <WorkHeaderItem
              image={headerImages[1]}
              index={13}
              direction="top"
            />
            <WorkHeaderItem
              image={headerImages[2]}
              index={14}
              direction="top"
            />
          </WorkHeaderColumn>
          <WorkHeaderColumn direction="bottom" index={5}>
            <WorkHeaderItem
              image={headerImages[3]}
              index={17}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[4]}
              index={16}
              direction="bottom"
            />
            <WorkHeaderItem
              image={headerImages[5]}
              index={15}
              direction="bottom"
            />
          </WorkHeaderColumn>
        </div>
      )}
    </>
  );
};

export default WorkHeaderAnimation;
