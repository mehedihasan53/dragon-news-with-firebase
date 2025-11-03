import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import BgImg from "./BgImg";

const RightAside = () => {
  return (
    <div>
      <div
        className="w-full bg-base-100  
       md:w-auto px-3 md:px-0
      "
      >
        <SocialLogin />
        <FindUs />
        <QZone />
      </div>
      <div className="w-full sm:p-5">
        <BgImg />
      </div>
    </div>
  );
};

export default RightAside;
