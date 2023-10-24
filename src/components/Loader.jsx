import React from 'react';
import './Loader.css';

const Loader = ({mess}) => {
  return (
    <div className='loader-container'>
      <div className="loader">
        <div className='loader-text'>{mess}</div>
      </div>
    </div>
  );
}

export default Loader;
