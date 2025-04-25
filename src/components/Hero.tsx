
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Hero: React.FC = () => {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1596040033229-a9821eec400d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      title: "Premium Spices",
      subtitle: "Crafted with Heritage"
    },
    {
      url: "/images/spices-in-bowls-stockcake.jpg",
      title: "Authentic Flavors",
      subtitle: "From Chettinad"
    },
    {
      url: "/images/red-chili-powder.jpg",
      title: "Traditional Blends",
      subtitle: "Modern Quality"
    }
  ];

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-white">
                    {image.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">
                    {image.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#products" 
                      className="bg-spice-red hover:bg-spice-red/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                      Explore Our Spices
                    </a>
                    <a href="#contact" 
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors">
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
