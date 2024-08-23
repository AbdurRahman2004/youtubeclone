import React from 'react';
import "./vedio.css";
import PlayVedio from '../../components/PlayVedio/PlayVedio';
import Recommended from '../../components/Recommended/Recommended';

const Vedio = () => {
  return (
    <div className='play-container'>
      <PlayVedio />
      <Recommended />
      
    </div>
  )
}

export default Vedio;
