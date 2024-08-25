import React from 'react';
import "./vedio.css";
import PlayVedio from '../../components/PlayVedio/PlayVedio';
import Recommended from '../../components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Vedio = () => {
   const {categoryId , videoId} = useParams();
  return (
    <div className='play-container'>
      <PlayVedio  videoId={videoId} />
      <Recommended categoryId={categoryId}/>
      
    </div>
  )
}

export default Vedio;
