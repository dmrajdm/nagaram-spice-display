export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Price in INR
  imageUrl: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "kulambu-masala",
    name: "kulambu Masala",
    description: "Spicy, flavorful mix made for perfect South Indian kulambu dishes.",
    price: 40,
    imageUrl: "/images/kulambu-masala.jpg",
    category: "blends",
    featured: true
  },
  {
    id: "sidedish-powder",
    name: "Sidedish Powder",
    description: "Bold and fiery spice to add instant taste to any recipe.",
    price: 30,
    imageUrl: "/images/sidedish-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "rasam-powder",
    name: "Rasam Powder",
    description: "Classic blend for tangy, spicy and aromatic rasam every time.",
    price: 50,
    imageUrl: "/images/rasam-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "idly-powder",
    name: "Idly Powder",
    description: "Tasty and spicy sidekick for idly and dosa lovers.",
    price: 35,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "curry-leaf-powder",
    name: "Curry leaf Powder",
    description: "Aromatic curry leaf blend that adds punch to rice and snacks.",
    price: 40,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  }
];

// Cart types
export interface CartItem {
  productId: string;
  quantity: number;
  weight: '50g' | '100g' | '500g' | '1kg';
}

export const calculateItemPrice = (basePrice: number, weight: '50g' | '100g' | '500g' | '1kg'): number => {
  switch (weight) {
    case '50g':
      return basePrice;
    case '100g':
      return basePrice * 2 ;
    case '500g':
      return basePrice * 9.5;
    case '1kg':
      return basePrice * 18;
    default:
      return basePrice;
  }
};
