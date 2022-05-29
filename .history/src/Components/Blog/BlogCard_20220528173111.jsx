import React from 'react'

const BlogCard = () => {
  return (
    <div>
        <div>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default BlogCard