"use client"

import { useState, useEffect } from 'react'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <img src={images[currentIndex]} alt="Commission" className="commission-pic" />
  )
}

export default Carousel