import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    const fetchData = async () => {
        try {
            const relatedVideoUrl = `http://localhost:3000/api/recommended-videos?videoCategoryId${categoryId}`;
            const response = await fetch(relatedVideoUrl);
            const data = await response.json();
            setApiData(data.data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData && apiData.map((item, index) => (
                <Link key={index}
                    className="side-video-list animate__animated animate__fadeIn"
                    to={`/watch/${item.snippet.categoryId}/${item.id}`}
                    onClick={handleScroll}>

                    <img src={item.snippet.thumbnails.medium.url} alt="" />

                    <div className="video-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p className='view'>{value_converter(item.statistics.viewCount)} views</p>
                    </div>

                </Link>
            ))}
        </div>
    );
};

export default Recommended;
