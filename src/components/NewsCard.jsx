import React, { useState } from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, details } = news;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card bg-base-100 shadow-md  overflow-hidden border border-gray-200 max-w-[600px] mx-auto gap-4">
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-base-200">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-base">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="text-base font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>

      {/* Description */}
      <div className="px-4 py-2 text-sm text-gray-700">
        {isExpanded ? (
          <p>
            {details}{" "}
            <span
              onClick={() => setIsExpanded(false)}
              className="text-orange-500 font-medium cursor-pointer"
            >
              Show Less
            </span>
          </p>
        ) : (
          <p>
            {details.slice(0, 200)}...
            <span
              onClick={() => setIsExpanded(true)}
              className="font-medium cursor-pointer text-orange-500"
            >
              Read More
            </span>
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-2 text-sm">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="font-medium text-gray-700 ml-1">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
