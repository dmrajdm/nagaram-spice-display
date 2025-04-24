
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-[url('https://images.unsplash.com/photo-1582045253062-f63cfbd45bcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-spice-brown/90 backdrop-blur-sm"></div>
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-spice-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-white">Connect With Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Continue the Nagarathar tradition of warm hospitality. We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-spice-gold">Our Heritage Home</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-spice-gold text-white p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-white/80">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-spice-gold text-white p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-white/80">info@nagarammasala.store</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-spice-gold text-white p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Address</h4>
                  <p className="text-white/80">123 Chettinad Street<br/>Karaikudi, Tamil Nadu 630001<br/>India</p>
                </div>
              </div>
              
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mt-6">
                <p className="text-white/90 italic text-sm">
                  "In the tradition of Nagarathar hospitality, we welcome your questions and feedback. 
                  Our doors are always open, just as they were in the ancestral homes of Chettinad."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md border border-spice-gold/20">
            <h3 className="text-2xl font-bold mb-4 font-playfair text-spice-brown">Send us a message</h3>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-gold/30 focus:border-spice-gold outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-gold/30 focus:border-spice-gold outline-none transition"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-gold/30 focus:border-spice-gold outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="bg-spice-red hover:bg-spice-red/90 text-white font-medium py-3 px-4 rounded-md transition-colors w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
