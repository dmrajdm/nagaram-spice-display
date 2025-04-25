import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Hero: React.FC = () => {
  const heroImages = [
    {
      url: "/images/spices-in-bowls-stockcake.jpg",
      title: "Authentic Flavors",
      subtitle: "From Chettinad"
    },
    {
      url: "/images/red-chili-powder.jpg",
      title: "Traditional Blends",
      subtitle: "Modern Quality"
    },
    {
      url: "/images/chettinadu_archjpg.jpg",
      title: "Premium Spices",
      subtitle: "Crafted with Heritage"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className={`w-full h-full relative transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0 absolute"}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
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
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-2 rounded-md font-medium transition-colors">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
