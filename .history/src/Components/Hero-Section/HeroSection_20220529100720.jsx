import React from 'react'
import hero from '../../assets/hero.png'

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        objectPosition: 'cover',
      }}
      className="object-cover bg-cover bg-no-repeat h-[30vh] md:h-[30vh]"
    >
      <div className="flex flex-col items-center justify-center pt-[7vh]">
        <h3 className="text-center text-xl text-white font-medium py-[3vh] md:text-4xl">
          Loving Self. Embracing life. Defining purpose
        </h3>

        <button className="bg-[#C87073] text-white py-1 rounded-sm text-sm md:py-4 px-7 text-lg">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HeroSection
