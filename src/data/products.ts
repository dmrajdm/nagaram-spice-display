
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "garam-masala",
    name: "Garam Masala",
    description: "A warm blend of cumin, coriander, cardamom, and other spices perfect for curries and rice dishes.",
    price: 7.99,
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821eec400d?q=80&w=2070&auto=format&fit=crop",
    category: "blends",
    featured: true
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    description: "Vibrant yellow spice with earthy flavor and anti-inflammatory properties.",
    price: 6.49,
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900e7?q=80&w=2070&auto=format&fit=crop",
    category: "singles",
    featured: true
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    description: "Mild, sweet and aromatic ground coriander seeds essential for Indian cooking.",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1599909366516-6257a500726c?q=80&w=2070&auto=format&fit=crop",
    category: "singles",
    featured: false
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    description: "Earthy, nutty spice that adds warm flavor to many dishes.",
    price: 6.29,
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=2070&auto=format&fit=crop",
    category: "singles",
    featured: false
  },
  {
    id: "chaat-masala",
    name: "Chaat Masala",
    description: "Tangy, zesty blend perfect for sprinkling on fruits, salads, and chaats.",
    price: 8.49,
    imageUrl: "https://images.unsplash.com/photo-1596097635121-14b73004ca38?q=80&w=2070&auto=format&fit=crop",
    category: "blends",
    featured: true
  },
  {
    id: "biryani-masala",
    name: "Biryani Masala",
    description: "Aromatic blend crafted specifically for perfect biryanis and rice dishes.",
    price: 9.99,
    imageUrl: "https://images.unsplash.com/photo-1589708532758-defa7090920c?q=80&w=2070&auto=format&fit=crop",
    category: "blends",
    featured: false
  },
  {
    id: "tandoori-masala",
    name: "Tandoori Masala",
    description: "Smoky, bold blend perfect for marinades and grilled dishes.",
    price: 8.99,
    imageUrl: "https://images.unsplash.com/photo-1563599175592-c58dc214deff?q=80&w=2070&auto=format&fit=crop",
    category: "blends",
    featured: false
  },
  {
    id: "red-chili-powder",
    name: "Red Chili Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=2070&auto=format&fit=crop",
    category: "singles",
    featured: true
  }
];
