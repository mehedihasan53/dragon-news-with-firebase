import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Login your account
          </h1>
          <form
            onSubmit={handleLogIn}
            className="space-y-4"
            aria-label="Login form"
          >
            {/* Email */}
            <div>
              <label className="label" htmlFor="email">
                <span className="label-text font-medium">Email address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label" htmlFor="password">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
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
            {error && (
              <p className="bg-red-100 text-red-600 p-3 rounded text-sm mb-4">
                {error}
              </p>
            )}
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
