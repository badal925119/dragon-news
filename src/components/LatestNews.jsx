import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center gap-2 mb-4 bg-slate-200 p-2 rounded-md'>
           <p className='bg-[#D72050] text-base-100 px-3 py-1 rounded-md font-semibold'>Latest</p>
           <Marquee pauseOnHover={true} className='space-x-10'>
            <NavLink to='/'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui.</p></NavLink>
            <NavLink to='/'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui.</p></NavLink>
            <NavLink to='/'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui.</p></NavLink>
            <NavLink to='/'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui.</p></NavLink>
            <NavLink to='/'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui.</p></NavLink>
           </Marquee>
        </div>
    );
};

export default LatestNews;