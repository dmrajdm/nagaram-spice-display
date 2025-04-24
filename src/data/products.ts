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
    imageUrl: "/images/garam-masala.jpg",
    category: "blends",
    featured: true
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    description: "Vibrant yellow spice with earthy flavor and anti-inflammatory properties.",
    price: 6.49,
    imageUrl: "/images/turmeric-powder.jpg",
    category: "singles",
    featured: true
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    description: "Mild, sweet and aromatic ground coriander seeds essential for Indian cooking.",
    price: 5.99,
    imageUrl: "/images/coriander-powder.jpg",
    category: "singles",
    featured: false
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    description: "Earthy, nutty spice that adds warm flavor to many dishes.",
    price: 6.29,
    imageUrl: "/images/cumin-powder.jpg",
    category: "singles",
    featured: false
  },
  {
    id: "chaat-masala",
    name: "Chaat Masala",
    description: "Tangy, zesty blend perfect for sprinkling on fruits, salads, and chaats.",
    price: 8.49,
    imageUrl: "/images/chaat-masala.jpg",
    category: "blends",
    featured: true
  },
  {
    id: "biryani-masala",
    name: "Biryani Masala",
    description: "Aromatic blend crafted specifically for perfect biryanis and rice dishes.",
    price: 9.99,
    imageUrl: "/images/biryani-masala.jpg",
    category: "blends",
    featured: false
  },
  {
    id: "tandoori-masala",
    name: "Tandoori Masala",
    description: "Smoky, bold blend perfect for marinades and grilled dishes.",
    price: 8.99,
    imageUrl: "/images/tandoori-masala.jpg",
    category: "blends",
    featured: false
  },
  {
    id: "red-chili-powder",
    name: "Red Chili Powder",
    description: "Vibrant, hot chili powder for adding heat to any dish.",
    price: 5.99,
    imageUrl: "/images/red-chili-powder.jpg",
    category: "singles",
    featured: true
  }
];

