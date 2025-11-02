import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn join-item bg-base-100  gap-2  justify-start ">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn join-item  gap-2  bg-base-100 justify-start ">
            <FaInstagram></FaInstagram> Instagram
          </button>
          <button className="btn join-item  gap-2  bg-base-100 justify-start ">
            <FaTwitter></FaTwitter> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
