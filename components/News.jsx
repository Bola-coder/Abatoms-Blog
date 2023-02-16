import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="mt-5">
      <span className="w-6 h-1 block bg-green-500 rounded-sm"></span>
      <h3 className="py-1 mb-7">Latest</h3>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default News;
