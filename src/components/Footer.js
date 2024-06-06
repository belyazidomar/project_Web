import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <footer style={footerStyle}>
      <p>
        &copy; {new Date().getFullYear()} Bel-Yazid Omar
      </p>
      <p>
        Last Updated: {currentTime}
      </p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '1em',
  background: '#282c34',
  color: 'white',
  left: '0',
  bottom: '0',
  marginTop: '50px',
  width: '100%',
};

export default Footer;
