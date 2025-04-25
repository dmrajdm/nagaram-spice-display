"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroImages = [
  { src: "/images/hero-image-1.webp", alt: "First slide" },
  { src: "/images/hero-image-2.webp", alt: "Second slide" },
  { src: "/images/hero-image-3.webp", alt: "Third slide" },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </section>
  )
}
