import Slide1Img from '@/assets/images/home/hero/slide-1.jpg';
import Slide2Img from '@/assets/images/home/hero/slide-2.jpg';

export interface IHeroInteractor {
  content: {
    title: string[];
    subtitle: string;
    benefits: string[];
  };

  slides: { id: string; alt: string; width: number; height: number; src: string }[];
}

export const useHeroInteractor = (): IHeroInteractor => {
  return {
    content: {
      title: ['Bachelor Bunny', 'Gourmet'],
      subtitle: 'Delicious meals delivered to your door',
      benefits: [
        'Personalized\n menu',
        'Convenient\n delivery',
        'High-quality\n ingredients',
        'Individualized\n service',
        'Customer\n trust',
      ],
    },

    slides: [
      { id: 'slide-hero-1', alt: 'Slide 1', width: 1920, height: 1080, src: Slide1Img.src },
      { id: 'slide-hero-2', alt: 'Slide 2', width: 1920, height: 1080, src: Slide2Img.src },
    ],
  };
};
