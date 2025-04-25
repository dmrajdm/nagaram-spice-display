
import { useState, useEffect } from 'react';
import { CartItem } from '../data/products';

export const usePersistedCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return [cart, setCart] as const;
};
