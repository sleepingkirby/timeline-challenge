import React, { useCallback } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const PlayControls = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement time <= maxTime

  const validateTime = (n: number, max: number) => {
    let num: number = Number(n);
    let mx: number = Number(max);
    num = num > mx ? mx : num;
    num = num < 0 ? 0 : num;
    return num;
  } 

  const onTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(Number(e.target.value));
    },
    [setTime],
  );

  const onValidateTime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter"){
      const t = e.target as HTMLInputElement;
      setTime(validateTime(time, Number(t?.max)));
      }
    },
    [time, setTime, validateTime],
  );

  const onBlurTime = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      console.log(e);
      const t = e.target as HTMLInputElement;
      setTime(validateTime(time, Number(t?.max)));
    },
    [time, setTime, validateTime],
  );


  return (
    <div
      className="flex items-center justify-between border-b border-r border-solid border-gray-700 
 px-2"
      data-testid="play-controls"
    >
      <fieldset className="flex gap-1">
        Current
        <input
          className="bg-gray-700 px-1 rounded"
          type="number"
          data-testid="current-time-input"
          min={0}
          max={2000}
          step={10}
          value={time}
          onChange={onTimeChange}
          onKeyPress={onValidateTime}
          onBlur={onBlurTime}
        />
      </fieldset>
      -
      <fieldset className="flex gap-1">
        <input
          className="bg-gray-700 px-1 rounded"
          type="number"
          data-testid="duration-input"
          min={100}
          max={2000}
          step={10}
          defaultValue={2000}
        />
        Duration
      </fieldset>
    </div>
  );
};
