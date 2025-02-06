"use client"

import { useState } from 'react'

function CarouselLarge({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="Commission" className="commission-pic" />
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselLarge