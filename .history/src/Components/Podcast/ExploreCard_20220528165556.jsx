import React from 'react'

const ExploreCard = (props) => {
  return (
    <div className='mt-6'>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <button>{props.action}</button>
    </div>
  )
}

export default ExploreCard