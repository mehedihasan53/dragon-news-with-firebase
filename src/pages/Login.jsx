import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Login your account
          </h1>
          <form className="space-y-4" aria-label="Login form">
            <div>
              <label className="label" htmlFor="email">
                <span className="label-text font-medium">Email address</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="password">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            <div className="text-right">
              <a href="#" className="link link-hover text-sm">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-neutral w-full mt-2" type="submit">
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4 font-semibold">
            Don’t have an account?{" "}
            <Link to={"/auth/register"}>
              <span className="text-blue-600">Register</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
