import { Segment } from "./Segment";
type PlayControlsProps = {
  maxTime: number;
};


export const KeyframeList = ({ maxTime }: PlayControlsProps) => {
  // TODO: implement scroll sync with `Ruler` and `TrackList`

  return (
    <div className="px-4 min-w-0 overflow-auto" data-testid="keyframe-list">
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
