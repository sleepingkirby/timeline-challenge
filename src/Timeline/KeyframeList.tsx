import React, { useCallback, useEffect } from "react";
import { Segment } from "./Segment";

type PlayControlsProps = {
  maxTime: number;
  scrollTimeRuler: number;
  scrollTrackTL: number;
  setScrollTimeKF: (scrollTimeKF: number) => void;
  setScrollTrackKF: (scrollTrackKF: number) => void;
};


export const KeyframeList = ({ scrollTimeRuler, setScrollTimeKF, scrollTrackTL, setScrollTrackKF, maxTime }: PlayControlsProps) => {

  const onScroll = useCallback(
    () => {
      if(scrollRef?.current){
        setScrollTimeKF(scrollRef.current.scrollLeft);
        setScrollTrackKF(scrollRef.current.scrollTop);
      }
    },
    [setScrollTimeKF, setScrollTrackKF],
  );

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if(scrollRef?.current){
        scrollRef.current.scrollLeft = scrollTimeRuler;
        scrollRef.current.scrollTop = scrollTrackTL;
      }
    },
    [scrollTimeRuler, scrollTrackTL],
  );

  //I would like to note that if these segments were at 100% width and is limited by outher div for its width, there would be no need to pass in maxTime at all. Thus saving veriable setting. passing and re-rendering

  return (
    <div
      className="px-4 min-w-0 overflow-auto"
      data-testid="keyframe-list"
      onScroll={onScroll}
      ref={scrollRef}
    >
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
      <Segment maxTime={maxTime} />
    </div>
  );
};
