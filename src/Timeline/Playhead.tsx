type PlayheadProps = {
  time: number;
  leftLimit: number; //this is a hard-coded stye limit
  scrollTimeRuler: number;
};

export const Playhead = ({ time, leftLimit, scrollTimeRuler }: PlayheadProps) => {
  //No need for playhead right hiding as it exits the viewport anyways
  //I should also note that, if these elements were done via flexboxes and not grid, we can hide via css rather than via javascript/react
  return (
    <div
      className="absolute left-[316px] h-full border-l-2 border-solid border-yellow-600 z-10"
      data-testid="playhead"
      style={{ transform: `translateX(calc(${time - scrollTimeRuler}px - 50%))`, visibility:`${time - scrollTimeRuler < leftLimit - 316 ? 'hidden' : 'visible'}` }}
    >
      <div className="absolute border-solid border-[5px] border-transparent border-t-yellow-600 -translate-x-1.5" />
    </div>
  );
};
