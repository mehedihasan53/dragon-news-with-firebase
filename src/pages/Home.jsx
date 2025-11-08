import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <div>
      <LoginForm></LoginForm>
      {/* return <Navigate to={"/category/1"}></Navigate> */}
    </div>
  );
};

export default Home;
