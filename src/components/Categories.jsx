import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("categories.json").then((response) =>
  response.json()
);
const Categories = () => {
  const categories = use(categoryPromise);
  //   console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Categories({categories.length})</h2>

      <div className="grid grid-cols-1 gap-2 mt-5">
        {categories.map((c) => (
          <NavLink
            key={c.id}
            className="btn border-0 bg-base-100 hover:bg-base-200 font-semibold text-accent"
            to={`category/${c.id}`}
          >
            {" "}
            {c.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
