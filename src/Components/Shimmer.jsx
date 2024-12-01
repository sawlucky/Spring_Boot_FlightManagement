import React from "react";
const Shimmer = () => {
  return (
    <div>
      <div className="animate-pulse space-y-4 p-5">
        <div className="h-48 bg-gray-300 rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};
export default Shimmer;
