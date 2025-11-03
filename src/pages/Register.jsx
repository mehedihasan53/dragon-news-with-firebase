import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Register your account
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label" htmlFor="name">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="photo">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                id="photo"
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="email">
                <span className="label-text font-medium">Email</span>
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

            <div className="flex items-center space-x-2 pt-2">
              <input id="terms" type="checkbox" className="checkbox" />
              <label htmlFor="terms" className="text-sm">
                Accept <span className="font-semibold">Term & Conditions</span>
              </label>
            </div>

            <button type="button" className="btn btn-neutral w-full mt-2">
              Register
            </button>
            <p className="text-center text-sm mt-4 font-semibold">
              Already have an account?{" "}
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-blue-600">Login</span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
