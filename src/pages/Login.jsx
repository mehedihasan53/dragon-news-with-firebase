import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ✅ added
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        setSuccess("Login successful! ✅"); // ✅ success msg
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

          {/* ✅ success message UI */}
          {success && (
            <p className="bg-green-100 text-green-600 p-3 rounded text-sm mb-4">
              {success}
            </p>
          )}

          <form onSubmit={handleLogIn} className="space-y-4">
            <div>
              <label className="label">
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

            <div>
              <label className="label">
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
            <Link to={"/auth/register"} className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
