import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {

    const [data, setData] = useState([])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
   

    useEffect(() => {
        fetchData()
    }, [category])


    const fetchData = async () => {
        try {
            const dataUrl = `https://backend-youtube-clone-with-youtube-api.onrender.com/api/feed-videos?videoCategoryId=${category}`
            await fetch(dataUrl)
                .then(res => res.json())
                .then(data => setData(data.data.items))
        } catch (error) {
            console.log("Error Fetching Data", error);
        }
    }

    return (
        <div className="feed">
            {data && data.map((item, index) => {
                return (
                    <div className='feed-cards animate__animated animate__fadeIn' key={index} onClick={handleScroll}>
                        <Link to={`watch/${item.snippet.categoryId}/${item.id}`} className='card'>
                            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                            <h1>{item.snippet.title}</h1>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{value_converter(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Feed;