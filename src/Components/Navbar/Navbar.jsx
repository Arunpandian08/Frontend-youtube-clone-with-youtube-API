import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebarEx }) => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <span className='menu_icon'onClick={()=>setSidebarEx(prev =>prev === false?true : false)}><i className="fa-solid fa-bars fa-xl"></i></span>
                <Link to='/' ><img className='logo' src={logo} alt="logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='search' />
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
            <div className="nav-right flex-div">
                <span><i className="fa-solid fa-cloud-arrow-up fa-xl"></i></span>
                <span><i className="fa-brands fa-modx fa-xl"></i></span>
                <span><i className="fa-solid fa-bell fa-xl"></i></span>
                <img className='user_icon' src={profile} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;