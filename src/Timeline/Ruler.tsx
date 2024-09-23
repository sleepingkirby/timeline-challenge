import React, { useCallback } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const Ruler = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position

  const onDragRuler = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if(false){
      setTime(100);
      }
      console.log("time: ", time);
      console.log(e);
    },
    [time],
  );


  const onClickRuler = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      console.log(e);
    }, 
    [],
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
        onDrag={onDragRuler}
        onClick={onClickRuler} 
      />
    </div>
  );
};
