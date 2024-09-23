import React, { useCallback, useEffect } from "react";
import { Segment } from "./Segment";

type PlayControlsProps = {
  maxTime: number;
  scrollTimeRuler: number;
  setScrollTimeKF: (scrollTimeKF: number) => void;
};


export const KeyframeList = ({ scrollTimeRuler, setScrollTimeKF, maxTime }: PlayControlsProps) => {
  // TODO: implement scroll sync with `Ruler` and `TrackList`

  const onScroll = useCallback(
    () => {
      if(scrollRef?.current){
        setScrollTimeKF(scrollRef.current.scrollLeft);
      }
    },
    [setScrollTimeKF],
  );

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if(scrollRef?.current){
        scrollRef.current.scrollLeft = scrollTimeRuler;
      }
    },
    [scrollTimeRuler],
  );

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
