
import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        {product.featured && (
          <span className="absolute top-2 right-2 bg-spice-gold text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </span>
        )}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image w-full h-auto"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 font-playfair">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-spice-red font-bold text-lg">${product.price.toFixed(2)}</span>
          <span className="text-xs px-2 py-1 bg-secondary rounded-full">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
