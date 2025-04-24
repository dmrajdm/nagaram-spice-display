
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-spice-beige/30 bg-white shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="mr-3 hidden md:block">
              <div className="w-12 h-12 bg-spice-red/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-spice-red rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-playfair text-spice-brown relative">
                Nagaram <span className="text-spice-red">Masala</span>
                <span className="absolute -top-2 -right-4 text-xs text-spice-gold font-normal">™</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Chettinad's Authentic Flavors</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#" className="hover:text-spice-red transition-colors relative group overflow-hidden">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spice-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a></li>
              <li><a href="#products" className="hover:text-spice-red transition-colors relative group overflow-hidden">
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spice-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a></li>
              <li><a href="#about" className="hover:text-spice-red transition-colors relative group overflow-hidden">
                Heritage
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spice-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a></li>
              <li><a href="#contact" className="hover:text-spice-red transition-colors relative group overflow-hidden">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spice-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
