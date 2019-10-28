import React from 'react';

function DateRange() {
  return (
    <div>Range date: {process.env.REACT_APP_BASE_DATE} - {process.env.REACT_APP_END_DATE}</div>
  )
}

export default DateRange;
