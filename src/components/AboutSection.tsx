
import React from 'react';
import { Card, CardContent } from './ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-spice-beige/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518983835933-39b3110446cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Spice market" 
              className="rounded-lg shadow-xl w-full h-auto aspect-video object-cover"
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img src="/images/chettinadu_archjpg.jpg" alt="Chettinad architecture" className="rounded-md h-24 object-cover" />
              <img src="images/chettinadu_cusine.jpg" alt="Traditional patterns" className="rounded-md h-24 object-cover" />
              <img src="/images/spice_market.jpg" alt="Chettinad cuisine" className="rounded-md h-24 object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-spice-brown">The Nagarathar Heritage</h2>
            <p className="text-muted-foreground mb-6">
              Nagaram Masala draws inspiration from the rich Nagarathar Chettiar heritage of Tamil Nadu. 
              For centuries, the Nagarathars were successful merchants who traveled across Southeast Asia,
              bringing back exotic spices and culinary techniques to their homeland in Chettinad.
            </p>
            <p className="text-muted-foreground mb-6">
              Like the grand mansions (Nattukottai) of Chettinad, known for their intricate craftsmanship 
              and attention to detail, our masalas are crafted with precision and care, preserving authentic 
              flavors that have been cherished for generations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
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
