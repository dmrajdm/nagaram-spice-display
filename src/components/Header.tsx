
import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair text-spice-brown">
              Nagaram <span className="text-spice-red">Masala</span>
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#" className="hover:text-spice-red transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-spice-red transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-spice-red transition-colors">Heritage</a></li>
              <li><a href="#contact" className="hover:text-spice-red transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-spice-brown hover:text-spice-red">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
