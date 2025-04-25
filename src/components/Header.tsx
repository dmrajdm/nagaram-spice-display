
import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePersistedCart } from '../hooks/usePersistedCart';

const Header: React.FC = () => {
  const [cart] = usePersistedCart();

  return (
    <header className="py-3 fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden text-spice-brown hover:text-spice-red">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="bg-black/80 backdrop-blur-md border-none"
              >
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm font-medium">
                    <li><a href="#" className="text-white hover:text-spice-red transition-colors">Home</a></li>
                    <li><a href="#products" className="text-white hover:text-spice-red transition-colors">Products</a></li>
                    <li><a href="#contact" className="text-white hover:text-spice-red transition-colors">Contact</a></li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl md:text-3xl font-bold font-playfair text-spice-brown">
              Nagaram <span className="text-spice-red">Masala</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#" className="hover:text-spice-red transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-spice-red transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-spice-red transition-colors">Contact</a></li>
              </ul>
            </nav>
            <a href="#products" 
              className="hidden md:flex items-center gap-2 bg-spice-brown hover:bg-spice-brown/90 text-white px-4 py-2 rounded-md font-medium transition-colors">
              <ShoppingCart size={20} />
              <span>Cart ({cart.length})</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
