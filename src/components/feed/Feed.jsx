import React, { useEffect , useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import { API_KEY ,converter} from '../../Data';
import moment from 'moment';



const Feed = ({category , setCategory}) => {

    const [items , setItems] = useState([]);

    const fetchData = async () =>{
        const vedio_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        try{       
        const response =  await fetch(vedio_URL);
        if(!response.ok) throw new Error("Error in connecting to api");
        const data = await response.json()
        const items = data.items;
        setItems(items);
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchData();
    },[category]);
  return (
    <div className="feed">

        {items.map((item , index) => {
            return (
                <Link to={`video/${category}/${item.id}`} key={index}className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
            )
        })}
    
    
    
    
    </div>
    
  )
}

export default Feed
