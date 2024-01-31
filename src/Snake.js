// src/Snake.js

import React from 'react';
import './Snake.css';

const Snake = ({ snakeSegments }) => {
  return (
    <div>
      {snakeSegments.map((segment, index) => (
        <div key={index} className="snake-segment" style={{ top: segment.y, left: segment.x }} />
      ))}
    </div>
  );
};

export default Snake;
