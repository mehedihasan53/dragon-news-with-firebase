// components/Categories.jsx
import React, { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("/categories.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  })
  .catch((err) => {
    console.error(err);
    return [];
  });

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div className="w-full p-3 sm:p-0">
      <h2 className="font-bold text-lg mb-4 text-center sm:text-left">
        All Categories ({categories.length})
      </h2>

      <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-none">
        {categories.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.id}`}
            className={({ isActive }) =>
              `btn border-0 w-full font-semibold text-accent text-sm sm:text-base ${
                isActive ? "bg-primary text-white" : "bg-base-100"
              }`
            }
          >
            {c.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
