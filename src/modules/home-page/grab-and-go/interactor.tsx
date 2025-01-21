import Content1Img from '@/assets/images/home/grab-and-go/content-1.jpg';
import Content2Img from '@/assets/images/home/grab-and-go/content-2.jpg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IGrabAndGoInteractor {
  matches: {
    isDesktop: boolean;
  };

  content: {
    title: string;
    subtitle: string;
    description: string;
    images: { id: string; alt: string; width: number; height: number; src: string }[];
  };
}

export const useGrabAndGoInteractor = (): IGrabAndGoInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },

    content: {
      title: 'About',
      subtitle: 'Grab & Go',
      description:
        'Your convenient solution for busy days: four gourmet meals delivered in two batches during the week, tailored to your lifestyle. Enjoy delicious meals without the hassle.',
      images: [
        {
          id: 'grab-and-go-content-1',
          alt: 'Content image 1',
          width: 940,
          height: 557,
          src: Content1Img.src,
        },
        {
          id: 'grab-and-go-content-2',
          alt: 'Content image 2',
          width: 467,
          height: 478,
          src: Content2Img.src,
        },
      ],
    },
  };
};
