import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2  text-gray-700">
      <img src={logo} alt="logo" />
      <p className="text-accent">Journalism Without Fear or Favorite</p>
      <p className="text-accent text-xl">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
