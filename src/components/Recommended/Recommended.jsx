import React, { useEffect, useState } from 'react';
import "./Recommended.css";
import { API_KEY, converter } from '../../Data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const [nextPage, setNextPage] = useState("CAUQAA");

    const fetchApiData = async (pageToken = nextPage) => {
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${pageToken}&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data.items);
        setNextPage(data.nextPageToken);
    };

    useEffect(() => {
        fetchApiData();
    }, [categoryId]);

    const handleVideoClick = () => {
        fetchApiData(nextPage);  
    };

    return (
        <div className='recommended'>
            {apiData.map((item, index) => (
                <Link
                    to={`/video/${categoryId}/${item.id}`}
                    key={index}
                    className="side-video-list"
                    onClick={handleVideoClick}  
                >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className='vid-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommended;
