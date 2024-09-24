import React, { useState, useCallback, useEffect } from "react";


type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
  maxTime: number;
  setMaxTime: (maxTime: number) => void;
};



export const PlayControls = ({ time, setTime, maxTime, setMaxTime }: PlayControlsProps) => {
  const [tmpTime, setTmpTime] = useState<any>(null);
  const [tmpMaxTime, setMaxTmpTime] = useState<any>(null);
  const [toBlur, setToBlur] = useState<any>(null);

  const validateTime = (n: number) => {
    let num: number = Number(n);
    const mx: number = Number(maxTime);
    num = num > mx ? mx : num;
    num = num < 0 ? 0 : num;
    /* so there's 2 conflicting requirements here:
    - Decimal values are automatically rounded to the nearest integer
    - Current Time and Duration are always multiples of 10ms
    The first would mean that 15.6 rounds up to 16
    The second would mean that 15.6 rounds up to 20
    I'm making my best guess here as I have 2 other interviews to do and don't have time to wait for an answer.
    */
    num = Math.round( Math.round(num) / 10) * 10;
    return num;
  } 

  const validateMaxTime = (n: number, t:HTMLInputElement) => {
    let num: number = Number(n);
    const max = Number(t.max);
    const min = Number(t.min);
    num = num > max ? max : num;
    num = num < min ? min : num;
    num = Math.round( Math.round(num) / 10) * 10;
    return num;
  }


  const onTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target as HTMLInputElement;
      if(t?.dataset?.testid){
        if(t.dataset.testid === "current-time-input"){
          setTmpTime(e.target.value);
        }
        else if(t.dataset.testid === "duration-input"){
          setMaxTmpTime(e.target.value);
        }
      }
    },
    [setTmpTime],
  );

  const onKeyPressTime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter"){
        const t = e.target as HTMLInputElement;
        if(t.dataset.testid === "current-time-input"){
          if(tmpTime !== ""){
            setTime(validateTime(Number(t.value || tmpTime)));
          }
          setToBlur({"obj": t, "key": e.key});
          setTmpTime(null);
        }
        else if(t.dataset.testid === "duration-input"){
          if(tmpMaxTime !== ""){
            setMaxTime(validateMaxTime(Number(tmpMaxTime), t));
          }
          setToBlur({"obj": t, "key": e.key});
          setMaxTmpTime(null);
        }
      }
    },
    [tmpTime, setToBlur, setTmpTime, validateTime],
  );


  const onKeyDownTime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const t = e.target as HTMLInputElement;
      if(e.key === "Escape"){
        setToBlur({"obj": t, "key": e.key});
        if(t.dataset.testid === "current-time-input"){
          setTmpTime(null);
        }
        else if(t.dataset.testid === "duration-input"){
          setMaxTmpTime(null);
        }
      }
    },
    [setToBlur, setTmpTime],
  );

  const onBlurTime = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const t = e.target as HTMLInputElement;
      if(t.dataset.testid === "current-time-input"){
        if(tmpTime !== "" ){
          setTime(validateTime(Number(t.value || tmpTime)));
        }
        setTmpTime(null);
      }
      else if(t.dataset.testid === "duration-input"){
        if(tmpMaxTime !== "" ){
          setMaxTime(validateMaxTime(Number(t.value || tmpMaxTime), t));
        }
        setMaxTmpTime(null);
      }
    },
    [time, setTime, tmpTime, setTmpTime, validateTime],
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

  useEffect(() => {
    if(!toBlur){
      return;
    }
    if(toBlur !== null && (tmpTime === null || tmpMaxTime === null)){
      toBlur.obj.blur();
      setToBlur(null);
    }
  }, [tmpTime, tmpMaxTime, toBlur]);

  useEffect(() => {
    if(maxTime && maxTime < time){
      setTime(maxTime);
    }
  } ,[maxTime]);

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
          value={tmpTime !== null ? Number(tmpTime).toString() : time.toString()}
          onChange={onTimeChange}
          onKeyPress={onKeyPressTime}
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
          max={6000}
          step={10}
          value={tmpMaxTime !== null ? Number(tmpMaxTime).toString() : maxTime.toString()}
          onChange={onTimeChange}
          onKeyDown={onKeyDownTime}
          onKeyPress={onKeyPressTime}
          onBlur={onBlurTime}
          onFocus={onFocusTime}
          onMouseUp={onMouseTime}
          ref={onRefTime}
        />
        Duration
      </fieldset>
    </div>
  );
};
