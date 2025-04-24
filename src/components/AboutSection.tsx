
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518983835933-39b3110446cc?q=80&w=2070&auto=format&fit=crop" 
              alt="Spice market" 
              className="rounded-lg shadow-xl w-full h-auto aspect-video object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Nagaram Masala was born from a passion for authentic Indian flavors and a desire to bring 
              the true essence of Indian spices to kitchens around the world. Our journey began generations 
              ago in the spice markets of southern India.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, we continue this tradition by carefully sourcing the finest spices and creating 
              authentic blends using time-honored techniques. Each batch is crafted with attention to detail, 
              ensuring a perfect balance of flavors.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We source only premium grade spices and test each batch for purity and potency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Authenticity</h3>
                <p className="text-sm text-muted-foreground">
                  Our recipes maintain the traditional proportions for truly authentic flavor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Freshness</h3>
                <p className="text-sm text-muted-foreground">
                  Small-batch production ensures maximum freshness and flavor intensity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-red mb-2 font-playfair">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We work directly with farmers to ensure fair compensation and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
