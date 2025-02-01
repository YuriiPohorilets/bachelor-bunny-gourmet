import { MotionValue, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import Content1Img from '@/assets/images/home/grab-and-go_content-1.jpg';
import Content2Img from '@/assets/images/home/grab-and-go_content-2.jpg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IGrabAndGoInteractor {
  sectionRef: React.RefObject<HTMLElement>;
  imageTopY: MotionValue<number>;
  imageBottomY: MotionValue<number>;

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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0 1', '0.5 0'],
  });

  const imageTopY = useTransform(scrollYProgress, [0, 1], [130, 0]);
  const imageBottomY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  return {
    sectionRef,
    imageBottomY,
    imageTopY,
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
