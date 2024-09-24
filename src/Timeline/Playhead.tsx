type PlayheadProps = {
  time: number;
  scrollTimeRuler: number;
};

export const Playhead = ({ time, scrollTimeRuler }: PlayheadProps) => {
  
  return (
    <div
      className="absolute left-[316px] h-full border-l-2 border-solid border-yellow-600 z-10"
      data-testid="playhead"
      style={{ transform: `translateX(calc(${time - scrollTimeRuler}px - 50%))`, visibility:`${time - scrollTimeRuler < 0 ? 'hidden' : 'visible'}` }}
    >
      <div className="absolute border-solid border-[5px] border-transparent border-t-yellow-600 -translate-x-1.5" />
    </div>
  );
};
