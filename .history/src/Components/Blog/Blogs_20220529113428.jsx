import React from "react";
import BlogCard from "./BlogCard";
import blog from "../../assets/blog.png";

const Blogs = () => {
  return (
    <div>
      <div className="mt-[7vh]">
        <h3 className="text-center font-semibold text-lg md:text-lg">Blog Posts</h3>
        <div className="md:grid grid-cols-3">
          <BlogCard
            image={blog}
            title="Stay positive this blue monday"
            description="Looking for ways to reduce back pain during an episode of 
            discomfort or manage your bad back in a more effective manner? Check out this guide from..."
          />
          <BlogCard
            image={blog}
            title="5 tips to reduce back pain"
            description="Looking for ways to reduce back pain during an episode of 
            discomfort or manage your bad back in a more effective manner? Check out this guide from..."
          />
          <BlogCard
            image={blog}
            title="how scary movies can help us relax"
            description="Looking for ways to reduce back pain during an episode of 
            discomfort or manage your bad back in a more effective manner? Check out this guide from..."
          />
        </div>

        <div className="flex items-center justify-center mb-5">
          <button className="mt-7 bg-[#C87073] text-white px-4 py-2 rounded-sm shadow-md">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
