import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} =useLoaderData();
   
    return (
        <div>
            <h1 className='font-semibold my-2'>Dragon News Home</h1>
            <h1 className='text-gray-400'>{news.length} News Found</h1>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;