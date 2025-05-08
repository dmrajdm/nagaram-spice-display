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
 /** {
    id: "garam-masala",
    name: "Garam Masala",
    description: "A warm blend of cumin, coriander, cardamom, and other spices perfect for curries and rice dishes.",
    price: 599, // in INR
    imageUrl: "/images/garam-masala.jpg",
    category: "blends",
    featured: true
  },*/
 /** {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    description: "Vibrant yellow spice with earthy flavor and anti-inflammatory properties.",
    price: 649,
    imageUrl: "/images/turmeric-powder.jpg",
    category: "singles",
    featured: true
  },*/
 /** {
    id: "coriander-powder",
    name: "Coriander Powder",
    description: "Mild, sweet and aromatic ground coriander seeds essential for Indian cooking.",
    price: 599,
    imageUrl: "/images/coriander-powder.jpg",
    category: "singles",
    featured: false
  },*/
/**  {
    id: "cumin-powder",
    name: "Cumin Powder",
    description: "Earthy, nutty spice that adds warm flavor to many dishes.",
    price: 629,
    imageUrl: "/images/cumin-powder.jpg",
    category: "singles",
    featured: false
  },*/
  {
    id: "kulambu-masala",
    name: "kulambu Masala",
    description: "Tangy, zesty blend perfect for sprinkling on fruits, salads, and chaats.",
    price: 40,
    imageUrl: "/images/kulambu-masala.jpg",
    category: "blends",
    featured: true
  },
 /** {
    id: "biryani-masala",
    name: "Biryani Masala",
    description: "Aromatic blend crafted specifically for perfect biryanis and rice dishes.",
    price: 999,
    imageUrl: "/images/biryani-masala.jpg",
    category: "blends",
    featured: false
  },*/
  {
    id: "red-chili-powder",
    name: "Red Chili Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
    price: 30,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "rasam-powder",
    name: "Rasam Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
    price: 50,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "idly-powder",
    name: "Idly Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
    price: 35,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  },
  
];{
    id: "curry-leaf-powder",
    name: "Curry leaf Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
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
