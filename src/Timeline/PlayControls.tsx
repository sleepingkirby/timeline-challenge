import React, { useState, useCallback } from "react";


type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};



export const PlayControls = ({ time, setTime }: PlayControlsProps) => {
  const [tmpTime, setTmpTime] = useState<any>(null);

  const validateTime = (n: number, max: number) => {
    let num: number = Number(n);
    let mx: number = Number(max);
    num = num > mx ? mx : num;
    num = num < 0 ? 0 : num;
    num = Math.round(Math.round(num) / 10) * 10;
    return num;
  } 

  const onTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTmpTime(Number(e.target.value));
    },
    [setTime],
  );

  const onValidateTime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter"){
      const t = e.target as HTMLInputElement;
      setTime(validateTime(Number(tmpTime), Number(t?.max)));
      setTmpTime(null);
      }
    },
    [time, setTime, validateTime],
  );

  const onKeyDownTime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Escape"){
      setTmpTime(null);
      }
    },
    [],
  );

  const onBlurTime = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const t = e.target as HTMLInputElement;
      setTime(validateTime(Number(tmpTime), Number(t?.max)));
      setTmpTime(null);  
    },
    [time, setTime, validateTime],
  );

  const onFocusTime = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const t = e.target as HTMLInputElement;
      t.select();
    },
    [],
  );

  const onMouseTime = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const t = e.target as HTMLInputElement;
      t.select();
    },
    [],
  );

  //I can't beleive this is still a problem >>> https://github.com/facebook/react/issues/3964
  //this calls AFTER onChange event.
  const onRefTime = useCallback(
    (element: HTMLInputElement | null) => {
      if (element) {
        element.onchange = (e) => {
          if(e.target){
            const t = e.target as HTMLInputElement;
            t.select();
          }
        } 
      }
    },
    []
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
          value={tmpTime !== null ? tmpTime : time}
          onChange={onTimeChange}
          onKeyPress={onValidateTime}
          onKeyDown={onKeyDownTime}
          onBlur={onBlurTime}
          onFocus={onFocusTime}
          onMouseUp={onMouseTime}
          ref={onRefTime}
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
