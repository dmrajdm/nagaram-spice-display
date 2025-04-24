
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-spice-beige/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-spice-brown">
              Nagaram <span className="text-spice-red">Masala</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Premium Spices for Authentic Flavors</p>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#" className="hover:text-spice-red transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-spice-red transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-spice-red transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-spice-red transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
