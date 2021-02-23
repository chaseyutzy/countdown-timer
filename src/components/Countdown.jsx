import React from "react";
import CountdownBox from "./CountdownBox";

const Countdown = () => {
  return (
    <div className="countdownWrap">
      <h2 className="leadText white">WE&apos;RE LAUNCHING SOON</h2>
      <CountdownBox key="countdown-box-1" number={8} label="days" />
      <CountdownBox key="countdown-box-2" number={23} label="hours" />
      <CountdownBox key="countdown-box-3" number={55} label="minutes" />
      <CountdownBox key="countdown-box-4" number={41} label="seconds" />
    </div>
  );
};

export default Countdown;
