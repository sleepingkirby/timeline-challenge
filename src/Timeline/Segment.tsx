type PlayControlsProps = {
  maxTime: number;
};

export const Segment = ({ maxTime }: PlayControlsProps) => {
  //why is width set to maxTime + 1? Because counting. The first pixel is 0ms and hence, the 100th pixel is 99ms.
  return (
    <div
      className="w-[2000px] py-2"
      data-testid="segment"
      style={{ width: `${maxTime + 1}px`}}
    >
      <div className="h-6 rounded-md bg-white/10"></div>
    </div>
  );
};
