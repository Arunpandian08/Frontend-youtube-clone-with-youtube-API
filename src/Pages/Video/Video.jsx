import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/Playvideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
    //Using params to get specific video id and category id of the video from url
    const { videoId,categoryId } = useParams();

    return (
        <div className='play-container'>
            <PlayVideo videoId={videoId} />
            <Recommended categoryId={categoryId} />
        </div>
    );
};

export default Video;
