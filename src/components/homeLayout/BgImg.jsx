import React from "react";
import bg from "../../assets/bg.png";

const BgImg = () => {
  return (
    <div className="w-full px-3 md:px-0">
      <img
        src={bg}
        alt="background"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default BgImg;
