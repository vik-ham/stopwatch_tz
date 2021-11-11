import Btn from '../btn/btn';
import Number_container from '../number_container/number_container';
import './form.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

function Form() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);


  const handleStart = () => {
    setWatchOn(prevState => !prevState);
    setStatus(1);
  }

  const handleResume = () => {
    handleStart();
  }

  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false);
    }
    setStatus(2);
  }

  const handleReset = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
  }

  return (
    <div className='Form'>
        <h1 className='Form_text'>Stopwatch</h1>
        <div className='Form_container'>
            <div className='Form_container_num'>
                <Number_container
                  time={time}
                />
            </div>
        </div>
        <Btn
           start={handleStart}
           stop={handleStop}
           reset={handleReset}
           resume={handleResume}
           status={status}
        />
    </div>
  );
}

export default Form;
