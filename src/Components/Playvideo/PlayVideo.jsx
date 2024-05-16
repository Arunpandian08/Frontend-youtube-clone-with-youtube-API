import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import user_profile from '../../assets/profile.jpg'
import { value_converter } from '../../data';
import moment from 'moment';
// import { useParams } from 'react-router-dom';


const PlayVideo = ({ videoId }) => {
    // const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        try {
            const videoDetailsUrl = `http://localhost:3000/api/videos?id=${videoId}`;
            const response = await fetch(videoDetailsUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch video data');
            }
            const data = await response.json();
            setApiData(data.data.items[0]);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    const fetchOtherData = async () => {
        try {
            if (apiData && apiData.snippet.channelId) {
                const channelDataUrl = `http://localhost:3000/api/channel-data?channelId=${apiData.snippet.channelId}`;
                const channelResponse = await fetch(channelDataUrl);
                if (!channelResponse.ok) {
                    throw new Error('Failed to fetch channel data');
                }
                const channelData = await channelResponse.json();
                setChannelData(channelData.channelData);
            } else {
                console.error('apiData or apiData.snippet is undefined or does not contain channelId.');
            }

            const commentsUrl = `http://localhost:3000/api/video-comments?videoId=${videoId}`;
            const commentsResponse = await fetch(commentsUrl);
            if (!commentsResponse.ok) {
                throw new Error('Failed to fetch comments data');
            }
            const commentsData = await commentsResponse.json();
            setCommentData(commentsData.data.items);
        } catch (error) {
            console.error('Error fetching other data:', error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchOtherData();
        }
    }, [apiData]);

    useEffect(() => {
        let isMounted = true;
        return () => {
            isMounted = false;
        };
    }, []);
    


    return (
        <div className='play-video animate__animated animate__fadeIn'>
            {/* <video src={video} autoPlay controls muted ></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : '16K'} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}</p>
                <div>
                    <span><i className="fa-solid fa-thumbs-up fa-xl"></i> {apiData ? value_converter(apiData.statistics.likeCount) : 200}</span>
                    <span><i className="fa-solid fa-thumbs-down fa-xl"></i> </span>
                    <span><i className="fa-solid fa-share-nodes fa-xl"></i> Share</span>
                    <span><i className="fa-regular fa-bookmark fa-xl"></i> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : user_profile} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '1M'} Subscribers</span>
                </div>
                <button><i className="fa-brands fa-youtube fa-xl"></i> &nbsp;Subscribe</button>
            </div>
            <div className="video-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>
                {commentData && commentData.map((item, index) => {
                    return (
                        <div className="comment" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <i className="fa-solid fa-thumbs-up fa-xl"></i><span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <i className="fa-solid fa-thumbs-down fa-xl"></i> <span></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PlayVideo;