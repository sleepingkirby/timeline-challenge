type PlayControlsProps = {
  maxTime: number;
};

export const Segment = ({ maxTime }: PlayControlsProps) => {
  // TODO: resize based on time

  return (
    <div
      className="w-[2000px] py-2"
      data-testid="segment"
      style={{ width: `${maxTime}px`}}
    >
      <div className="h-6 rounded-md bg-white/10"></div>
    </div>
  );
};
