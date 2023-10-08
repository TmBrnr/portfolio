import React from 'react';


const Noise = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    pointerEvents: 'none',
    filter: 'brightness(1.2)', // Adjust to your preference
  };

  return <div className={`crt `} style={containerStyle}></div>;

};


export default Noise;

