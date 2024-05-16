import React from 'react';
import './Sidebar.css';
import channel1 from '../../assets/subscribe1.png'
import channel2 from '../../assets/subscribe2.jpg'
import channel3 from '../../assets/subscribe3.jpg'
import channel4 from '../../assets/subscribe4.jpg'
import channel5 from '../../assets/subscribe5.jpg'
import channel6 from '../../assets/subscribe6.jpg'

const Sidebar = ({ sidebarEx, category, setCategory }) => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`sidebar ${sidebarEx ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => { setCategory(0); handleScroll() }}>
                    <span><i className="fa-solid fa-house-chimney fa-xl"></i></span> <p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => { setCategory(20); handleScroll() }}>
                    <span><i className="fa-solid fa-puzzle-piece fa-xl"></i></span> <p>Gaming</p>
                </div>
                <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => { setCategory(17); handleScroll() }} >
                    <span><i className="fa-solid fa-person-skiing-nordic fa-xl"></i></span> <p>Sports</p>
                </div>
                <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => { setCategory(10); handleScroll() }}>
                    <span><i className="fa-solid fa-music fa-xl"></i></span> <p>Music</p>
                </div>
                <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => { setCategory(24); handleScroll() }}>
                    <span><i className="fa-solid fa-tv fa-xl"></i></span> <p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => { setCategory(2); handleScroll() }}>
                    <span><i className="fa-solid fa-truck-monster fa-xl"></i></span> <p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => { setCategory(28); handleScroll() }}>
                    <span> <i className="fa-solid fa-microchip fa-xl"></i></span> <p>Technology</p>
                </div>
                <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => { setCategory(25); handleScroll() }}>
                    <span> <i className="fa-solid fa-newspaper fa-xl"></i></span> <p>News</p>
                </div>
                <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => { setCategory(22); handleScroll() }}>
                    <span><i className="fa-solid fa-blog fa-xl"></i></span> <p>Blogs</p>
                </div>
                <hr />
                <div className="subscribed-list">
                    <h3>subscribed</h3>
                    <div className="side-link">
                        <img src={channel1} alt="channel_profile" />
                        <p>BlackSheep</p>
                    </div>
                    <div className="side-link">
                        <img src={channel2} alt="channel_profile" />
                        <p>MikeSet</p>
                    </div>
                    <div className="side-link">
                        <img src={channel3} alt="channel_profile" />
                        <p>Media Manson</p>
                    </div>
                    <div className="side-link">
                        <img src={channel4} alt="channel_profile" />
                        <p>Finally</p>
                    </div>
                    <div className="side-link">
                        <img src={channel5} alt="channel_profile" />
                        <p>Maran</p>
                    </div>
                    <div className="side-link">
                        <img src={channel6} alt="channel_profile" />
                        <p>Siraki</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;