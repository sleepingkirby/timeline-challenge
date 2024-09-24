import { useState } from "react";
import { Playhead } from "./Playhead";
import { Ruler } from "./Ruler";
import { TrackList } from "./TrackList";
import { KeyframeList } from "./KeyframeList";
import { PlayControls } from "./PlayControls";

export const Timeline = () => {
  // FIXME: performance concerned
  /*Not for the time being. This is suppose to be, as per Mumu Li, a 1 to 2 hour challenege.
  There's no way I can:
  - run tests and measurements to see where its taking the longest
  - reduce variables
  - refactor code and css
  - offload work from javascript and react to CSS
  - implement memos properly
  And do understand and do all the tasks in the challenge in 1~2 hours
  */
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
      <Playhead time={time} scrollTimeRuler={scrollTimeRuler} leftLimit={300}/>
    </div>
  );
};
