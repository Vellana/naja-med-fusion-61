// src/data/menuData.ts

export interface MenuCategory {
  name: string;
  description: string;
  imagePath: string;
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Appetizers",
    description: "Begin your culinary journey with our vibrant, shareable plates.",
    imagePath: "@/assets/dish-1.jpg",
  },
  {
    name: "Main Courses",
    description: "Explore the heart of our menu, featuring signature fusion dishes.",
    imagePath: "@/assets/dish-2.jpg",
  },
  {
    name: "Desserts & Coffee",
    description: "A sweet conclusion to your dining experience, crafted with care.",
    imagePath: "@/assets/dish-3.jpg",
  },
];