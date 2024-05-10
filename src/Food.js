// Food.js

import React from 'react';
import './Food.css';

const Food = ({ x, y }) => {
  return (
    <div className="food" style={{ left: `${x}px`, top: `${y}px` }}></div>
  );
};

export default Food;
