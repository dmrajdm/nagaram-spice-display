
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const AboutSection: React.FC = () => {
  const features = [
    {
      image: "/images/chettinadu_archjpg.jpg",
      title: "Heritage",
      description: "Our recipes follow the Chettinad tradition of balancing bold spices with subtle aromatic notes."
    },
    {
      image: "/images/chettinadu_cusine.jpg",
      title: "Craftsmanship",
      description: "Like Athangudi tiles, our spices are handcrafted with traditional techniques."
    },
    {
      image: "/images/spice_market.jpg",
      title: "Authenticity",
      description: "Our masalas maintain the authentic proportions of the Nagarathar culinary tradition."
    },
    {
      image: "/images/spices-in-bowls-stockcake.jpg",
      title: "Community",
      description: "We support traditional spice farmers and artisans from the Chettinad region."
    }
  ];

  return (
    <section id="about" className="py-12 bg-spice-beige/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-playfair text-spice-brown text-center">The Nagarathar Heritage</h2>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 font-playfair">{feature.title}</h3>
                      <p className="text-white/90">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default AboutSection;
