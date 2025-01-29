import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import SlideImg1 from '@/assets/images/home/delivery_slide-1.jpg';
import SlideImg2 from '@/assets/images/home/delivery_slide-2.jpg';

export interface IDeliveryServiceInteractor {
  matches: { isDesktop: boolean };

  content: {
    title: string;
    description: string[];
  };

  slides: { id: string; alt: string; src: string; width: number; height: number }[];
}

export const useDeliveryServiceInteractor = (): IDeliveryServiceInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },

    content: {
      title: 'In-Home \n Executive Delivery',
      description: [
        'Experience luxury dining at home with our elevated service! Our attractive customer service - Bunny Bells not only deliver your pre-cooked dinner and pour a perfectly paired cocktail but also engage in light conversation as they plate ',
        "your meal. You're left to enjoy your dinner while they head to the next delivery. ",
      ],
    },

    slides: [
      { id: 'delivery-slide-1', alt: 'Slide 1', src: SlideImg1.src, width: 1920, height: 1100 },
      { id: 'delivery-slide-2', alt: 'Slide 2', src: SlideImg2.src, width: 1920, height: 1100 },
    ],
  };
};
