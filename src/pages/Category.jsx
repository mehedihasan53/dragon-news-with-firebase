import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCategory(data);
    } else if (id === "1") {
      setCategory(data.filter((news) => news.others?.is_today_pick));
    } else {
      setCategory(data.filter((news) => news.category_id === parseInt(id)));
    }
  }, [id, data]);

  return (
    <div className="w-full max-w-4xl mx-auto p-3 sm:p-0">
      <h2 className="font-semibold text-lg sm:text-xl mb-4">
        Total <span className="text-red-700">{category.length}</span> news found
      </h2>

      <div className="flex flex-col gap-5">
        {category.length ? (
          category.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <p className="text-center text-gray-500">
            No news found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
