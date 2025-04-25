import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Hero: React.FC = () => {
  const heroImages = [
    {
      url: "/images/spices-in-bowls-stockcake.jpg",
      title: "Authentic Flavors",
      subtitle: "From Chettinad",
    },
    {
      url: "/images/red-chili-powder.jpg",
      title: "Traditional Blends",
      subtitle: "Modern Quality",
    },
    {
      url: "/images/chettinadu_archjpg.jpg",
      title: "Premium Spices",
      subtitle: "Crafted with Heritage",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[260px] md:h-[320px]">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                  <h1 className="text-xl md:text-3xl font-bold text-white mb-1 font-playfair">
                    {image.title}
                  </h1>
                  <p className="text-sm md:text-lg text-white/90 mb-3">
                    {image.subtitle}
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <a
                      href="#products"
                      className="bg-spice-red hover:bg-spice-red/90 text-white px-5 py-2 rounded font-medium text-sm md:text-base"
                    >
                      Explore Our Spices
                    </a>
                    <a
                      href="#contact"
                      className="bg-spice-red hover:bg-spice-red/90 text-white px-5 py-2 rounded font-medium text-sm md:text-base"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
