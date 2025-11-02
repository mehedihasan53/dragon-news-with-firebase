import React from "react";
import swimming from "../../assets/swimming.png";
import playImg from "../../assets/playground.png";
import classImg from "../../assets/class.png";

const QZone = () => {
  return (
    <div className="w-full px-3 md:px-0">
      <h2 className="font-bold my-5 text-center md:text-left">Q-Zone</h2>
      <div className="bg-base-200 p-2 flex flex-col items-center gap-3 md:gap-2">
        <img
          src={swimming}
          alt="swimming"
          className="w-full md:w-auto rounded-lg"
        />
        <img
          src={classImg}
          alt="class"
          className="w-full md:w-auto rounded-lg"
        />
        <img
          src={playImg}
          alt="playground"
          className="w-full md:w-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default QZone;
