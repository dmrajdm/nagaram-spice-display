import React, { useState } from 'react';
import { products, Product, CartItem, calculateItemPrice } from '../data/products';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from '@/hooks/use-toast';
import { usePersistedCart } from '../hooks/usePersistedCart';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

type Category = 'all' | 'blends' | 'singles';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [cart, setCart] = usePersistedCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);
    
  const categories: { id: Category; name: string }[] = [
    { id: 'all', name: 'All Products' },
    { id: 'blends', name: 'Masala Blends' },
    { id: 'singles', name: 'Single Spices' }
  ];

  const handleAddToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return total;
      return total + (calculateItemPrice(product.price, item.weight) * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive"
      });
      return;
    }

    const message = cart.reduce((msg, item) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return msg;
      return msg + `\n- ${product.name} (${item.weight} x ${item.quantity}) - ₹${calculateItemPrice(product.price, item.weight) * item.quantity}`;
    }, `*New Order from Nagaram Masala*\n\nOrder Details:`);

    const totalAmount = getTotalAmount();
    const whatsappMessage = `${message}\n\n*Total Amount: ₹${totalAmount}*`;
    
    const whatsappNumber = "+917339614739";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    setCart([]);
    toast({
      title: "Order Placed",
      description: "Your order details have been sent to WhatsApp.",
    });
  };

  const CartComponent = () => {
    const content = (
      <div className="mt-4 space-y-4">
        {cart.map((item, index) => {
          const product = products.find(p => p.id === item.productId);
          if (!product) return null;
          return (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">{item.weight} x {item.quantity}</p>
              </div>
              <p className="font-medium">₹{calculateItemPrice(product.price, item.weight) * item.quantity}</p>
            </div>
          );
        })}
        {cart.length > 0 ? (
          <div className="pt-4 border-t">
            <p className="font-bold text-lg mb-4">Total: ₹{getTotalAmount()}</p>
            <Button onClick={handleCheckout} className="w-full bg-gray-800 hover:bg-gray-700 text-xl py-6">
              Checkout via WhatsApp
            </Button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
    );

    return isMobile ? (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="fixed bottom-4 right-4 z-50 h-16 px-6 shadow-lg">
            <ShoppingCart className="h-6 w-6 mr-2" />
            <span className="text-lg">Cart ({cart.length})</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
          </DrawerHeader>
          {content}
        </DrawerContent>
      </Drawer>
    ) : (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-gray-800 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <section id="products" className="py-8 md:py-12 bg-white">
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
        
        <div className="flex justify-between items-center mb-10">
          <div className="inline-flex bg-white p-1 rounded-lg shadow-sm border border-gray-200">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gray-800 text-white'
                    : 'hover:bg-gray-100 text-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <CartComponent />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
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
