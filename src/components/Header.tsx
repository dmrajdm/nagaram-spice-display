
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3 bg-white shadow-sm sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden text-spice-brown hover:text-spice-red">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm font-medium">
                    <li><a href="#" className="hover:text-spice-red transition-colors">Home</a></li>
                    <li><a href="#products" className="hover:text-spice-red transition-colors">Products</a></li>
                    <li><a href="#about" className="hover:text-spice-red transition-colors">Heritage</a></li>
                    <li><a href="#contact" className="hover:text-spice-red transition-colors">Contact</a></li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
