
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight">
              Discover the Essence of <span className="text-spice-red">Indian Flavors</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Authentic, premium masalas sourced directly from the heart of India. 
              Transform your cooking with our carefully crafted spice blends.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" 
                className="bg-spice-red hover:bg-spice-red/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Explore Products
              </a>
              <a href="#about" 
                className="border border-spice-red text-spice-red hover:bg-spice-red/10 px-6 py-3 rounded-md font-medium transition-colors">
                Our Story
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821eec400d?q=80&w=2070&auto=format&fit=crop" 
              alt="Colorful spices in wooden bowls" 
              className="rounded-lg shadow-xl w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
