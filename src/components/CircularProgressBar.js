import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CircularProgressBar = ({ percentage, text }) => {
  return (
    <>
    <div style={{ width: 150, height: 150, margin: '5px 55px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#d03645',
          trailColor: '#808080',
        })}
      />
      
      <div style={{ textAlign: 'center', marginTop: 10 }}>{text}</div>
    </div>
    </>
  );
};

export default CircularProgressBar;
