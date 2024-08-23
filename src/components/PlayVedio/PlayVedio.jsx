import React from 'react'
import "./PlayVedio.css"
import vedio1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";



const PlayVedio = () => {
  return (
    <div className='play-vedio'>
        <video src={vedio1} controls autoPlay muted></video>
        <h3>Best Youtube Channel To Learn Web Development</h3>
        <div className="play-vedio-info">
            <p>150k Views &bull; 2days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel That makes easy</p>
            <p>Subsribe Greatstack to watch more vedio</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div><h3>Jack Nick <span>1 dayago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a maxime, quisquam deleniti ipsum suscipit id in magnam excepturi aperiam. Assumenda vel repellendus perferendis? Eveniet!</p>
                <div className="comment-action">
                  <img src={like} alt="" /> <span>244</span>
                  <img src={dislike} alt="" /> </div></div>
            </div><div className="comment">
                <img src={user_profile} alt="" />
                <div><h3>Jack Nick <span>1 dayago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a maxime, quisquam deleniti ipsum suscipit id in magnam excepturi aperiam. Assumenda vel repellendus perferendis? Eveniet!</p>
                <div className="comment-action">
                  <img src={like} alt="" /> <span>244</span>
                  <img src={dislike} alt="" /> </div></div>
            </div><div className="comment">
                <img src={user_profile} alt="" />
                <div><h3>Jack Nick <span>1 dayago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a maxime, quisquam deleniti ipsum suscipit id in magnam excepturi aperiam. Assumenda vel repellendus perferendis? Eveniet!</p>
                <div className="comment-action">
                  <img src={like} alt="" /> <span>244</span>
                  <img src={dislike} alt="" /> </div></div>
            </div><div className="comment">
                <img src={user_profile} alt="" />
                <div><h3>Jack Nick <span>1 dayago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a maxime, quisquam deleniti ipsum suscipit id in magnam excepturi aperiam. Assumenda vel repellendus perferendis? Eveniet!</p>
                <div className="comment-action">
                  <img src={like} alt="" /> <span>244</span>
                  <img src={dislike} alt="" /> </div></div>
            </div>

        </div>

      
    </div>
  )
}

export default PlayVedio
