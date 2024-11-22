import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


        const NewsCard = ({ news }) => {
          return (
            <div className="card   bg-base-100 overflow-hidden shadow-xl rounded-lg">
              {/* Thumbnail */}
              <figure>
                <img src={news.thumbnail_url} alt="News Thumbnail" className="w-96  h-60 object-fill rounded-lg" />
              </figure>
        
              {/* Card Body */}
              <div className="card-body ">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img src={news.author.img} alt="Author" className="w-10 h-10 rounded-full" />
                  <div>
                    <h2 className="text-sm font-semibold">{news.author.name}</h2>
                    <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                  </div>
                </div>
        
                {/* Title */}
                <h3 className="card-title text-lg font-semibold text-gray-800">{news.title}</h3>
        
                {/* Details */}
                <p className="text-sm text-gray-600 line-clamp-3">{news.details}</p>
                <Link to={`/news/${news._id}`} className='flex text-blue-600'>Read More</Link>
        
                {/* Footer */}
                <div className="card-actions mt-4 justify-between items-center">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm font-medium">{news.rating.number}</span>
                    <span className="text-xs text-gray-500">({news.rating.badge})</span>
                  </div>
        
                  {/* Views */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaEye />
                    <span className="text-sm">{news.total_view}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        
        export default NewsCard;