import { useState } from "react";
import { Playhead } from "./Playhead";
import { Ruler } from "./Ruler";
import { TrackList } from "./TrackList";
import { KeyframeList } from "./KeyframeList";
import { PlayControls } from "./PlayControls";

export const Timeline = () => {
  // FIXME: performance concerned
  const [time, setTime] = useState(0);
  const [maxTime, setMaxTime] = useState(2000);
  const [scrollTimeRuler, setScrollTimeRuler] = useState(0);
  const [scrollTimeKF, setScrollTimeKF] = useState(0);
  const [scrollTrackKF, setScrollTrackKF] = useState(0);
  const [scrollTrackTL, setScrollTrackTL] = useState(0);


  return (
    <div
      className="relative h-[300px] w-full grid grid-cols-[300px_1fr] grid-rows-[40px_1fr] 
    bg-gray-800 border-t-2 border-solid border-gray-700"
      data-testid="timeline"
    >
      <PlayControls time={time} setTime={setTime} maxTime={maxTime} setMaxTime={setMaxTime} />
      <Ruler time={time} setTime={setTime} maxTime={maxTime} scrollTimeKF={scrollTimeKF} setScrollTimeRuler={setScrollTimeRuler}/>
      <TrackList scrollTrackKF={scrollTrackKF} setScrollTrackKF={setScrollTrackKF} setScrollTrackTL={setScrollTrackTL}/>
      <KeyframeList scrollTimeRuler={scrollTimeRuler} setScrollTimeKF={setScrollTimeKF} scrollTrackTL={scrollTrackTL} setScrollTrackKF={setScrollTrackKF} maxTime={maxTime} />
      <Playhead time={time} />
    </div>
  );
};
