// src/components/PromotionalSlideshow.tsx
import { useState, useEffect } from 'react';

import promo1 from '@/assets/promo-1.png';
import promo2 from '@/assets/promo-2.png';
import promo3 from '@/assets/promo-3.png';

interface PromoProps {
  currentSlide: number;
}

const promoImageMap: { [key: string]: string } = {
  '@/assets/promo-1.png': promo1,
  '@/assets/promo-2.png': promo2,
  '@/assets/promo-3.png': promo3,
};

const promotionalContent = [
  { id: 1, imagePath: '@/assets/promo-1.png', title: "Weekend Specials!", description: "Discover our chef's rotating seasonal creations." },
  { id: 2, imagePath: '@/assets/promo-2.png', title: "Live Music Fridays", description: "Enjoy enchanting melodies with your dinner." },
  { id: 3, imagePath: '@/assets/promo-3.png', title: "Craft Cocktails", description: "Unique drinks from our expert mixologists." },
];

const PromotionalSlideshow: React.FC<PromoProps> = ({ currentSlide }) => {
  return (
    <div className="shadow-xl rounded-lg">
      <div className="relative rounded-lg overflow-hidden isolate transform-gpu outline outline-1 outline-transparent">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promotionalContent.map((promo) => (
            <div key={promo.id} className="w-full flex-shrink-0 relative">
              <img 
                src={promoImageMap[promo.imagePath]}
                alt={promo.title}
                className="w-full h-64 object-cover object-center"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 pt-10 text-white backdrop-blur-sm"
                style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }}
              >
                <h3 className="text-xl font-bold font-montserrat drop-shadow-md">{promo.title}</h3>
                <p className="text-sm font-lato opacity-90">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalSlideshow;