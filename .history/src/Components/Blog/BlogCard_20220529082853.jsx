import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
        <div>
            <img src={props.image} alt="" className='mt-5 object-cover px-7'/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default BlogCard