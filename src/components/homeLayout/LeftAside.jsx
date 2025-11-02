import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div className="w-full md:w-auto px-3 md:px-0">
      <Suspense
        fallback={
          <div className="flex justify-center py-6">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        }
      >
        <div className="bg-base-100 rounded-lg shadow-sm p-3 md:p-0">
          <Categories />
        </div>
      </Suspense>
    </div>
  );
};

export default LeftAside;
