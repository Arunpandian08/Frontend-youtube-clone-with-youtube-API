import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({sidebarEx}) => {

    const [category,setCategory] = useState(0)

    return (
        <div>
            <Sidebar sidebarEx={sidebarEx} category={category} setCategory={setCategory} />
            <div className={`container ${sidebarEx?'':'large-container'}`}>
                <Feed category={category} />
            </div>
        </div>
        
    );
};

export default Home;