import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import BgImg from "./BgImg";

const RightAside = () => {
  return (
    <div>
      <div className="w-full bg-base-100  rounded-xl  p-2 sm:p-5">
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
