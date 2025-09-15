// src/data/offeringsData.ts
export interface Offering {
  title: string;
  description: string;
  imagePath: string;
  buttonText: string;
  link: string;
}

export const offeringsData: Offering[] = [
  {
    title: "Dine-In Menu",
    description: "Explore our lunch, dinner, and beverage selections, crafted with passion.",
    imagePath: "@/assets/dish-1.jpg",
    buttonText: "View The Menu",
    link: "/menu",
  },
  {
    title: "Catering & To-Go",
    description: "Bring the unforgettable flavors of NAJA to your home or next event.",
    imagePath: "@/assets/catering-platter-top-down.png",
    buttonText: "Explore Catering",
    link: "/catering",
  },
  {
    title: "Private Events",
    description: "Host your celebration in our elegant space, tailored to your every need.",
    imagePath: "@/assets/catering-event-guests.png",
    buttonText: "Host Your Event",
    link: "/catering",
  },
];