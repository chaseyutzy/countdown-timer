import React from "react";
import PropTypes from "prop-types";
import CountdownBox from "./CountdownBox";

const Countdown = ({ ticker }) => {
  return (
    <div className="countdownWrap">
      <h2 className="leadText white">WE&apos;RE LAUNCHING SOON</h2>
      <CountdownBox key="countdown-box-1" number={ticker.days} label="days" />
      <CountdownBox key="countdown-box-2" number={ticker.hours} label="hours" />
      <CountdownBox
        key="countdown-box-3"
        number={ticker.minutes}
        label="minutes"
      />
      <CountdownBox
        key="countdown-box-4"
        number={ticker.seconds}
        label="seconds"
      />
    </div>
  );
};

CountdownBox.propTypes = {
  ticker: PropTypes.object,
};

export default Countdown;
