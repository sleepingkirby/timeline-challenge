import React, { useCallback, useEffect } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
  maxTime: number;
  scrollTimeKF: number;
  setScrollTimeRuler: (scrollTimeRuler: number) => void;
};

export const Ruler = ({ time, setTime, maxTime, scrollTimeKF, setScrollTimeRuler }: PlayControlsProps) => {

  const onDragRuler = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if(e.buttons === 1 && e.button === 0){
        const t = e.target as  HTMLDivElement;
        setTime(Number(e.clientX - t.offsetLeft + scrollTimeKF));
      }
    },
    [time, setTime],
  );


  const onClickRuler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const t = e.target as HTMLDivElement;
      console.log("<<<<onClickRUler: ", e.clientX, t.offsetLeft, scrollTimeKF);
      setTime(Number(e.clientX - t.offsetLeft + scrollTimeKF));
    }, 
    [setTime, scrollTimeKF],
  );

  const onScrollRuler = useCallback(
    () => {
      if(scrollRef?.current){
        setScrollTimeRuler(scrollRef.current.scrollLeft);
      }
    },
    [setScrollTimeRuler],
  );

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if(scrollRef?.current){
        scrollRef.current.scrollLeft = scrollTimeKF;
      }
      setScrollTimeRuler(scrollTimeKF);
    },
    [scrollTimeKF],
  );

  return (
    <div
      className="px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler"
      onScroll={onScrollRuler}
      ref={scrollRef}
    >
      <div
        className={`w-[2000px] h-6 rounded-md bg-white/25`}
        data-testid="ruler-bar"
        onMouseMove={onDragRuler}
        onMouseDown={onClickRuler}
        style={{ width: `${maxTime}px`}}
      />
    </div>
  );
};
