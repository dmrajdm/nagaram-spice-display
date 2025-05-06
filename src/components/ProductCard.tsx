
import React, { useState } from 'react';
import { Product, CartItem, calculateItemPrice } from '../data/products';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedWeight, setSelectedWeight] = useState<'100g' | '500g' | '1kg'>('100g');
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    onAddToCart({
      productId: product.id,
      quantity,
      weight: selectedWeight,
    });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${selectedWeight} of ${product.name} added`,
    });
  };

  const itemPrice = calculateItemPrice(product.price, selectedWeight);

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200">
      <div className="relative">
        {product.featured && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <span className="text-gray-800 font-bold">₹{itemPrice}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Select value={selectedWeight} onValueChange={(value: '50g' | '100g' | '500g' | '1kg') => setSelectedWeight(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50g">50g</SelectItem>
              <SelectItem value="100g">100g</SelectItem>
              <SelectItem value="500g">500g</SelectItem>
              <SelectItem value="1kg">1kg</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Qty" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>{num} pack(s)</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
