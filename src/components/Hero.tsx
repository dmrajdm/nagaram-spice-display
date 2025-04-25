import { useEffect, useState } from "react"

const images = [
  { src: "/images/hero-image-1.webp", alt: "Slide 1" },
  { src: "/images/hero-image-2.webp", alt: "Slide 2" },
  { src: "/images/hero-image-3.webp", alt: "Slide 3" },
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
    </section>
  )
}

export default Hero
