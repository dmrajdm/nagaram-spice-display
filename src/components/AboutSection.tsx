import React from 'react';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const AboutSection: React.FC = () => {
  const images = [
    {
      src: "/images/chettinadu_archjpg.jpg",
      title: "Chettinad Architecture",
      description: "Traditional mansions showcasing intricate craftsmanship"
    },
    {
      src: "/images/chettinadu_cusine.jpg",
      title: "Culinary Heritage",
      description: "Authentic flavors preserved through generations"
    },
    {
      src: "/images/spice_market.jpg",
      title: "Spice Market",
      description: "Carefully sourced ingredients from local markets"
    }
  ];

  return (
    <section id="about" className="py-12 bg-spice-beige/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Carousel>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image.src}
                        alt={image.title} 
                        className="rounded-lg shadow-xl w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-xl">{image.title}</h3>
                        <p className="text-white/90 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 font-playfair text-spice-brown">The Nagarathar Heritage</h2>
            <p className="text-muted-foreground mb-4">
              Nagaram Masala draws inspiration from the rich Nagarathar Chettiar heritage of Tamil Nadu. 
              Our masalas maintain authentic proportions passed down through generations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/80 border-spice-gold/30 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Heritage</h3>
                  <p className="text-sm text-muted-foreground">
                    Our recipes follow the Chettinad tradition of balancing bold spices with subtle aromatic notes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-spice-gold/30 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">
                    Like Athangudi tiles, our spices are handcrafted with traditional techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-spice-gold/30 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    Our masalas maintain the authentic proportions of the Nagarathar culinary tradition.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-spice-gold/30 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    We support traditional spice farmers and artisans from the Chettinad region.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
