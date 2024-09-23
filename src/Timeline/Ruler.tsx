import React, { useCallback } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const Ruler = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position

  const onDragRuler = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if(e.buttons === 1 && e.button === 0){
        const t = e.target as  HTMLDivElement;
        setTime(Number(e.clientX - t.offsetLeft));
      }
    },
    [time, setTime],
  );


  const onClickRuler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const t = e.target as  HTMLDivElement;
      setTime(Number(e.clientX - t.offsetLeft));
    }, 
    [setTime],
  );

  return (
    <div
      className="px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler"
    >
      <div
        className="w-[2000px] h-6 rounded-md bg-white/25"
        data-testid="ruler-bar"
        onMouseMove={onDragRuler}
        onMouseDown={onClickRuler} 
      />
    </div>
  );
};
