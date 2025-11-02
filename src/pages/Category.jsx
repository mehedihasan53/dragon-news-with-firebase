import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(id, data);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategory(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategory(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategory(filteredNews);
    }
  }, [id, data]);

  return <div>Total {category.length} news found</div>;
};

export default Category;
