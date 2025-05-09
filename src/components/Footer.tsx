
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spice-brown text-white pt-12 pb-6 relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-repeat-x opacity-20"></div>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <div className="w-10 h-10 bg-spice-gold/30 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-spice-gold rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-playfair">Nagaram Masala</h3>
            </div>
            <p className="mb-4 text-white/80 max-w-md">
              Bringing authentic Chettinad flavors to kitchens worldwide, honoring the 
              Nagarathar tradition of spice blending perfected over generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-spice-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-spice-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-spice-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-playfair text-spice-gold">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Home
              </a></li>
              <li><a href="#products" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Products
              </a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Heritage
              </a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Contact
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-playfair text-spice-gold">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Shipping
              </a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Returns
              </a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                FAQs
              </a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-spice-gold/70">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                Privacy
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; {currentYear} Nagaram Masala. Honoring the Nagarathar spice legacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
