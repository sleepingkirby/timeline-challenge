import React, { useCallback, useEffect } from "react";

type PlayControlsProps = {
  scrollTrackKF: number;
  setScrollTrackKF: (scrollTrackKF: number) => void;
  setScrollTrackTL: (scrollTrackTL: number) => void;
};

export const TrackList = ({ scrollTrackKF, setScrollTrackKF, setScrollTrackTL}: PlayControlsProps) => {

  const onScroll = useCallback(
    () => {
      if(scrollRef?.current){
        setScrollTrackTL(scrollRef.current.scrollTop);
      }
    },
    [setScrollTrackKF, setScrollTrackTL],
  );


  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if(scrollRef?.current){
        scrollRef.current.scrollTop = scrollTrackKF;
        setScrollTrackTL(scrollTrackKF);
      }
    },
    [scrollTrackKF],
  );


  return (
    <div
      className="grid grid-flow-row auto-rows-[40px]
      border-r border-solid border-r-gray-700 
      overflow-auto"
      data-testid="track-list"
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div className="p-2">
        <div>Track A</div>
      </div>
      <div className="p-2">
        <div>Track B</div>
      </div>
      <div className="p-2">
        <div>Track C</div>
      </div>
      <div className="p-2">
        <div>Track D</div>
      </div>
      <div className="p-2">
        <div>Track E</div>
      </div>
      <div className="p-2">
        <div>Track F </div>
      </div>
      <div className="p-2">
        <div>Track G</div>
      </div>
      <div className="p-2">
        <div>Track H</div>
      </div>
      <div className="p-2">
        <div>Track I </div>
      </div>
      <div className="p-2">
        <div>Track J</div>
      </div>
    </div>
  );
};
