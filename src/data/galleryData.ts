// src/data/galleryData.ts
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Food' | 'Interior' | 'Events';
  title?: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '@/assets/dish-1.jpg', alt: 'Signature Appetizer', category: 'Food', title: 'Mezze Creations', description: 'A taste of tradition.' },
  { id: 2, src: '@/assets/restaurant-interior.jpg', alt: 'Main Dining Room', category: 'Interior', title: 'Our Ambiance', description: 'Warmth and community.' },
  { id: 3, src: '@/assets/dish-2.jpg', alt: 'Mediterranean Fusion Specialties', category: 'Food', title: 'Fusion at its Finest', description: 'Bold and unforgettable.' },
  { id: 4, src: '@/assets/hero-bg.jpg', alt: 'Elegant Dining Experience', category: 'Interior', title: 'An Evening at NAJA', description: 'Perfect for any occasion.' },
  { id: 5, src: '@/assets/dish-3.jpg', alt: 'Chef\'s Signature Creations', category: 'Food', title: 'Culinary Art', description: 'Crafted with passion.' },
  { id: 6, src: '@/assets/promo-1.png', alt: 'Private Wine Tasting', category: 'Events', title: 'Private Events', description: 'Host your event with us.' },
  { id: 7, src: '@/assets/promo-2.png', alt: 'Live Music Night', category: 'Events', title: 'Live Music Fridays', description: 'Vibrant and energetic.' },
  { id: 8, src: '@/assets/promo-3.png', alt: 'Craft Cocktails', category: 'Events', title: 'Handcrafted Cocktails', description: 'Unique spirits and flavors.' },
];