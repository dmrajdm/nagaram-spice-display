
import React, { useState } from 'react';
import { products, Product } from '../data/products';
import ProductCard from './ProductCard';

type Category = 'all' | 'blends' | 'singles';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);
    
  const categories: { id: Category; name: string }[] = [
    { id: 'all', name: 'All Products' },
    { id: 'blends', name: 'Masala Blends' },
    { id: 'singles', name: 'Single Spices' }
  ];

  return (
    <section id="products" className="py-16 bg-spice-beige/30 chettinad-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-spice-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-spice-brown">
            Authentic Chettinad Spices
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully sourced and expertly blended spices that bring authentic 
            Chettinad flavors to your kitchen. Each blend tells a story of our rich heritage.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1 rounded-lg shadow-sm border border-spice-beige">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-spice-red text-white'
                    : 'hover:bg-secondary text-spice-brown'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-grid animate-fade-in">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "The secret of Chettinad cuisine lies in its masterful spice blends, prepared with care and tradition."
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spice-gold to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
