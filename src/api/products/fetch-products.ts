import product1 from '@/assets/images/products/s1.jpg';
import product2 from '@/assets/images/products/s2.jpg';
import product3 from '@/assets/images/products/s3.jpg';
import product4 from '@/assets/images/products/s4.jpg';
import product5 from '@/assets/images/products/s5.jpg';
import product6 from '@/assets/images/products/s6.jpg';
import product7 from '@/assets/images/products/s7.jpg';
import product8 from '@/assets/images/products/s8.jpg';
import type { Product } from '@/types/Product';

const products: readonly Product[] = [
  {
    categories: ['toys'],
    colors: ['error', 'warning', 'primary', 'secondary'],
    description: 'Cuddle up with our Cute Soft Teddybear — the perfect companion for comfort and joy. Crafted from ultra-soft plush, this huggable teddy bear features a charming design that’s ideal for all ages. Whether as a gift or a cozy addition to your own collection, it’s sure to bring warmth and smiles.',
    gender: 'kids',
    id: 1,
    image: product1,
    name: 'Cute Soft Teddybear',
    offerPrice: 129,
    price: 229,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['books'],
    colors: ['lightprimary', 'success', 'lighterror', 'warning'],
    description: '"Psalms Book for Growth" offers a profound journey through the timeless wisdom of the Psalms. This inspirational guide provides reflections and insights to help you deepen your spiritual understanding and personal growth. Perfect for daily meditation and encouragement, it’s a valuable resource for anyone seeking to enrich their faith and enhance their life journey.',
    gender: 'kids',
    id: 2,
    image: product2,
    name: 'Psalms Book for Growth',
    offerPrice: 349,
    price: 449,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: 3,
    categories: ['books'],
    colors: ['lightprimary', 'primary'],
    description: 'Unlock the secrets to financial success with "The Psychology of Money". This insightful book delves into the emotional and psychological aspects of money management, offering practical wisdom and strategies for achieving financial well-being. Discover how your mindset can influence your financial decisions and learn to make smarter choices for a more prosperous future.',
    gender: 'male',
    image: product3,
    name: 'The Psychology of Money',
    offerPrice: 599,
    price: 799,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['fashion', 'electronics', 'toys'],
    colors: ['error', 'warning', 'warning'],
    description: 'Experience superior sound with the Boat Headphones. Designed for crisp, clear audio and deep bass, these headphones offer comfortable, all-day wear with their ergonomic fit. Whether you\'re at home or on the move, enjoy immersive sound quality and stylish design. Perfect for music lovers and everyday listening.',
    gender: 'kids',
    id: 4,
    image: product4,
    name: 'Boat Headphone',
    offerPrice: 899,
    price: 999,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['electronics'],
    colors: ['warning', 'lightprimary'],
    description: 'Discover productivity and style with our sleek Notebook. Featuring a high-resolution display, smooth keyboard, and powerful performance, it’s perfect for work, study, or on-the-go tasks. Its lightweight design and long battery life make it the ideal companion for any lifestyle.',
    gender: 'male',
    id: 5,
    image: product5,
    name: 'Notebook',
    offerPrice: 1299,
    price: 1599,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['fashion', 'kitchen'],
    colors: ['primary', 'warning'],
    description: 'Unleash the ultimate gaming experience with our Gaming Console. Packed with cutting-edge technology and a sleek design, it delivers stunning graphics and lightning-fast performance. With a vast library of games and seamless connectivity, it’s your gateway to endless entertainment. Upgrade your playtime today!',
    gender: 'male',
    id: 6,
    image: product6,
    name: 'Gaming Console',
    offerPrice: 499,
    price: 599,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['fashion'],
    colors: ['error', 'secondary', 'primary', 'warning'],
    description: 'Elevate your style with the Red Velvet Dress — a show-stopping piece in rich, luxurious velvet. Featuring a flattering fit, sleeveless design, and knee-length cut, this dress combines elegance with modern sophistication. Perfect for any formal or festive occasion, it promises to make you the center of attention.',
    gender: 'female',
    id: 7,
    image: product7,
    name: 'Red Valvet Dress',
    offerPrice: 299,
    price: 499,
    rating: Math.floor(Math.random() * 6),
  },
  {
    categories: ['fashion'],
    colors: ['lightsuccess', 'primary', 'success'],
    description: 'Step into style with our Shoes for Girls —perfectly crafted for comfort and charm. These versatile shoes feature a sleek design, supportive fit, and durable materials, making them ideal for everyday adventures and special occasions alike. Available in a variety of colors and patterns, they’re sure to be a favorite in any wardrobe.',
    gender: 'female',
    id: 8,
    image: product8,
    name: 'Shoes for Girls',
    offerPrice: 640,
    price: 870,
    rating: Math.floor(Math.random() * 6),
  }
];

export const fetchProducts = async () => {
  return new Promise<readonly Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  })
}