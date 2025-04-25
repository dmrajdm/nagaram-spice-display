"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  { src: "/images/hero-image-1.webp", alt: "Slide 1" },
  { src: "/images/hero-image-2.webp", alt: "Slide 2" },
  { src: "/images/hero-image-3.webp", alt: "Slide 3" },
]

export default function ImageCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  )
}
