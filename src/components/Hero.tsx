
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[url('https://images.unsplash.com/photo-1529243502159-a56c5408ec7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-opacity-30 relative">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight text-spice-brown">
              Heritage of <span className="text-spice-red">Chettinad Flavors</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Authentic masalas inspired by ancient Nagarathar traditions, sourced and crafted 
              with the same care as the grand mansions of Chettinad. A taste of our rich cultural heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" 
                className="bg-spice-red hover:bg-spice-red/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Explore Our Spices
              </a>
              <a href="#about" 
                className="border border-spice-red text-spice-red hover:bg-spice-red/10 px-6 py-3 rounded-md font-medium transition-colors">
                Our Heritage
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-3 rounded-lg shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821eec400d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Colorful spices in wooden bowls" 
                className="rounded-lg shadow-inner w-full h-auto aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-spice-gold rounded-full flex items-center justify-center text-white font-bold text-center p-2 shadow-lg transform rotate-12">
                <span>Authentic Chettinad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
