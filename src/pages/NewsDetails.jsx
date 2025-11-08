import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="mt-4 w-11/12 mx-auto">
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Main content */}
        <section className="lg:col-span-9">
          <h2 className="font-bold text-xl mb-4">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
