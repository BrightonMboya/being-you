import React from 'react'
import BlogCard from './BlogCard'
import blog from '../../assets/blog.png'

const Blogs = () => {
  return (
    <div>
        <div>
            <h3>Blog Posts</h3>
            <div>
                <BlogCard
                image={blog}
                
                />
            </div>
        </div>
    </div>
  )
}

export default Blogs