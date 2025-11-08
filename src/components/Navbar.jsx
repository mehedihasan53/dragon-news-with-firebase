import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("handle logout");
    logOut()
      .then(() => {
        console.log("user log out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="left-nav">{user && user.email}</div>
      <div className="main flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="right-nav flex gap-2">
        <img src={`${user ? user.photoURL : userIcon}`} alt="" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
