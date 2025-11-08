import React, { useState, use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, photoURL, email, password });

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        console.log("User created:", result.user);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Register your account
          </h1>

          {/* Error message UI */}
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
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
              />
            </div>

            <button type="submit" className="btn btn-neutral w-full mt-2">
              Register
            </button>

            <p className="text-center text-sm mt-4 font-semibold">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
