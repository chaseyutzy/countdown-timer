import React from "react";
import PropTypes from "prop-types";

const CountdownBox = ({ label, number }) => {
  return (
    <div className="countdownBox">
      <div className="countdownBoxTop blueDark" />
      <h1 className="countdownNumber redSoft">{`${
        number < 10 ? 0 : ""
      }${number}`}</h1>
      <div className="countdownBoxBottom blueMedium" />
      {label.trim() && (
        <div className="countdownBoxLabelWrap">
          <p className="countdownBoxLabel blueGray">{label}</p>
        </div>
      )}
    </div>
  );
};

CountdownBox.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number.isRequired,
};

CountdownBox.defaultProps = {
  label: "",
};

export default CountdownBox;
