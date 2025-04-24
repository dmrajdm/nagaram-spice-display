
import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-spice-beige">
      <div className="relative">
        {product.featured && (
          <span className="absolute top-2 right-2 bg-spice-gold text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-spice-brown/0 to-spice-brown/30 z-0"></div>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image w-full h-auto z-0"
        />
        <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-center">
          <span className="text-white font-semibold drop-shadow-md text-lg">{product.name}</span>
          <span className="text-xs px-2 py-1 bg-white/90 rounded-full text-spice-brown">{product.category}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold font-playfair text-spice-brown">{product.name}</h3>
          <span className="text-spice-red font-bold text-lg">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground text-sm">{product.description}</p>
        <div className="mt-4 pt-4 border-t border-spice-beige/50 flex justify-between items-center">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${star <= 4 ? "text-spice-gold" : "text-gray-300"}`}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <button className="text-sm font-medium text-spice-red hover:underline flex items-center">
            Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2m0 18V2m0 18l5.447-2.724A1 1 0 0 0 15 16.382V5.618a1 1 0 0 0-.553-.894L9 2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
