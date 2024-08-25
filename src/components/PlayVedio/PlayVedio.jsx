import React, { useEffect, useState } from 'react'
import "./PlayVedio.css"
import vedio1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, converter } from '../../Data';
import moment from 'moment';

const PlayVedio = ({ videoId }) => {

  const [apiData, setApiData] = useState(null);
  const [otherData, setOtherData] = useState(null);
  const [comment, setComment] = useState([]);


  const fetchVideoData = async () => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      const response = await fetch(url);
      if (!response.ok) throw new Error("Cannot get the vedio data from API");
      const data = await response.json()
      setApiData(data.items[0]);

    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentUrl).then(res => res.json()).then(data => setComment(data.items))
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchOtherData = async () => {
    const dataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData ? apiData.snippet.channelId : "UC_x5XG1OV2P6uZZ5FSM9Ttw"}&key=${API_KEY}`;
    await fetch(dataUrl).then(res => res.json()).then(data => setOtherData(data.items[0]));
  }


  useEffect(() => {
    fetchVideoData()
  }, [videoId])

  useEffect(() => {
    fetchOtherData()
  }, [apiData])

  return (
    <div className='play-vedio'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-vedio-info">
        <p>{apiData ? converter(apiData.statistics.viewCount) : "16k"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "a day ago"}</p>
        <div>
          <span><img src={like} alt="" />{apiData ? converter(apiData.statistics.likeCount) : "157k"}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={otherData ? otherData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Mr Beast"}</p>
          <span>{otherData ? converter(otherData.statistics.subscriberCount) : 1000} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description : "Hello "}</p>
        <hr />
        <h4>{apiData ? converter(apiData.statistics.commentCount) : 0} Comments</h4>
        {  comment.map((item,index)=>{
          return (
          <div className="comment" key={index}>
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div><h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 dayago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>{converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="" /> </div></div>
        </div>
          )

        })}
        
        
       

      </div>


    </div>
  )
}

export default PlayVedio
