import React from 'react';
import './Error.css';
import 'animate.css';
import avatar from '../../assets/image.png'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='error-page'>
            <div className="image-container animate__animated animate__bounceInDown">
                <img src={avatar} alt="Error-image" />
            </div>
            <div className="error-status">
                <div className="status animate__animated animate__shakeX">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>
                <div className="error-message animate__animated animate__backInUp">
                    <p>Opps...!!! Page Not Found</p>
                    <p>Please Check your search Path or Click below to go Home Page</p>
                    <button onClick={()=>navigate('/')}>Home</button>
                </div>
            </div>
        </div>
    );
};

export default Error;