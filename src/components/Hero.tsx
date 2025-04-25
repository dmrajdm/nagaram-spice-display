import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Hero: React.FC = () => {
  const heroImages = [
    {
      url: "/images/spices-in-bowls-stockcake.jpg", // Check this path
      title: "Authentic Flavors",
      subtitle: "From Chettinad"
    },
    {
      url: "/images/red-chili-powder.jpg", // Check this path
      title: "Traditional Blends",
      subtitle: "Modern Quality"
    },
    {
      url: "/images/chettinadu_archjpg.jpg", // Check this path
      title: "Premium Spices",
      subtitle: "Crafted with Heritage"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length);
      }, 2000);
    }

    const progressInterval = setInterval(() => {
      if (!isHovered) {
        setProgress((prev) => (prev + 1) % 100);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isHovered]);

  return (
    <section
      className="relative h-[45vh] md:h-[55vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full relative">
          {heroImages.map((image, index) => (
            <CarouselItem
              key={index}
              className={`w-full h-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${image.url})` }} // Vite handling for assets
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2 font-playfair text-white">
                    {image.title}
                  </h1>
                  <p className="text-base md:text-lg text-white/90 mb-4">
                    {image.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#products"
                      className="bg-spice-red hover:bg-spice-red/90 text-white px-6 py-2 rounded-md font-medium transition-colors">
                      Explore Our Spices
                    </a>
                    <a href="#contact"
                      className="bg-spice-red hover:bg-spice-red/90 text-white px-6 py-2 rounded-md font-medium transition-colors">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 h-1">
        <div
          className="h-full bg-spice-red"
          style={{ width: `${progress}%`, transition: "width 0.2s" }}
        />
      </div>
    </section>
  );
};

export default Hero;
