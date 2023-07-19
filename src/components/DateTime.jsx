import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DateTime = ({ timestamp }) => {
  const date = moment.unix(timestamp);
  return <span>{date.fromNow()}</span>; // Displays the time as relative from now.
};

DateTime.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default DateTime;
