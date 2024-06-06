import React from 'react';
import './styles.css'; // Import your CSS file

const Skill = ({ subject, progress }) => {
  return (
    <div className="skill">
      <div className="subject">{subject}</div>
      <div className="progress-bar">
        <div className="progress-line" style={{ maxWidth: progress }}></div>
      </div>
    </div>
  );
};

export default Skill;
