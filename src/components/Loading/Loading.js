import React from 'react';
import './Loading.css';

import loader from '../../assets/images/loader.gif';

export default (props) => {
  return (
    <div className='loading'>
      <img src={loader} alt="loader"/>
    </div>
  );
};