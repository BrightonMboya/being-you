import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
        <div className='px-7 shadow-md'>
            <img src={props.image} alt="" className='mt-5 object-cover'/>
            <h3 className='mt-4 font-semibold text-base'>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default BlogCard