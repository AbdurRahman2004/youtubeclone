import React from 'react';
import "./home.css";
import Sidebar from '../../components/Sidebar/sidebar';
import Feed from '../../components/feed/Feed';
const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar ? "" : "large-container"}`}></div>
     <Feed /> 
    </>
  )
}

export default Home;
