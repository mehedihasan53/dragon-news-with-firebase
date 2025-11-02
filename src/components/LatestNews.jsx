import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee pauseOnHover={true} speed={60} className="flex gap-5">
        <p className="font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          optio!
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          optio!
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          optio!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
