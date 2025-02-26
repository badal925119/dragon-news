import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data => setCategories(data.data.news_category));
    },[])
    return (
        <div>
            <h1 className='font-semibold'>All Catagory</h1>
            <div className='flex  flex-col gap-3 my-2'>
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn hover:bg-green-400 w-full' key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;