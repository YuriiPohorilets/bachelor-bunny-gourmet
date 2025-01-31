import SlideImage1 from '@/assets/images/grab-and-go/hero_slide-1.jpg';
import SlideImage2 from '@/assets/images/grab-and-go/hero_slide-3.jpg';
import SlideImage3 from '@/assets/images/grab-and-go/hero_slide-2.jpg';

export interface IHeroInteractor {
  content: {
    title: string;
    label: string;
    description: string;
    buttonLabel: string;
  };

  slides: {
    id: string;
    alt: string;
    width: number;
    height: number;
    src: string;
  }[];
}

export const useHeroInteractor = (): IHeroInteractor => {
  return {
    content: {
      title: 'GRAB & GO',
      label: 'The first meal is free',
      description:
        "Grab N Go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go.Our service offers quick, convenient gourmet meals, perfectly tailored, and packaged to fit into your busy lifestyle, delivered at the clients scheduled time.",
      buttonLabel: 'Make an order',
    },

    slides: [
      { id: 'slide-01', alt: 'Slide', width: 1920, height: 1080, src: SlideImage1.src },
      { id: 'slide-02', alt: 'Slide', width: 1920, height: 1080, src: SlideImage2.src },
      { id: 'slide-03', alt: 'Slide', width: 1920, height: 1080, src: SlideImage3.src },
    ],
  };
};
