import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindOus = () => {
    return (
        <div className='my-2'>
            <h1 className='font-semibold my-2'>Find Ous on</h1>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start hover:bg-green-400"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start hover:bg-green-400"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item justify-start hover:bg-green-400"><FaTwitter></FaTwitter> Twitter</button>
            </div>
            
        </div>
    );
};

export default FindOus;