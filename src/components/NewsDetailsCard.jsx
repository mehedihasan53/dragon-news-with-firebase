import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  if (!news) return null;

  const { title, details, image_url, author } = news;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* News Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-99 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{details}</p>

        {/* Button aligned left */}
        <Link
          to={`/category/${news.category_id}`}
          className="btn btn-sm bg-secondary text-white hover:bg-red-600 rounded-md px-4 py-2 ml-auto"
        >
          <FaArrowLeft />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
