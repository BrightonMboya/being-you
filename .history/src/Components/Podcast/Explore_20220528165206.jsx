import React from 'react'
import ExploreCard from './ExploreCard'
import book from '../../assets/book.svg'
import podcast from '../../assets/podcast.svg'
import resources from '../../assets/resources.svg'

const Explore = () => {
  return (
    <div>
        <h3>Explore</h3>
        <div>
            <ExploreCard
            img ={book}
            title='Books'
            
            
            />
        </div>

    </div>
  )
}

export default Explore