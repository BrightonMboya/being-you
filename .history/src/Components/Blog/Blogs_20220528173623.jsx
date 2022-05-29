import React from "react";
import BlogCard from "./BlogCard";
import blog from "../../assets/blog.png";

const Blogs = () => {
  return (
    <div>
      <div>
        <h3>Blog Posts</h3>
        <div>
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
            description="ooking for ways to reduce back pain during an episode of 
            discomfort or manage your bad back in a more effective manner? Check out this guide from..."
          />
        </div>

        
      </div>
    </div>
  );
};

export default Blogs;
