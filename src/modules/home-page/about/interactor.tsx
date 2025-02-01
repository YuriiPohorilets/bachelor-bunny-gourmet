import { useRef, useState } from 'react';
import { MotionValue, useScroll, useTransform } from 'motion/react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import Image from '@/assets/images/home/about_content.png';

export interface IAboutInteractor {
  sectionRef: React.RefObject<HTMLElement>;
  photoY: MotionValue<number>;

  matches: { isDesktop: boolean; isTablet: boolean };

  content: {
    title: string;
    description: string[];
    image: { alt: string; width: number; height: number; src: string };
  };

  descriptionExpanded: boolean;
  handleDescriptionExpandToggle: () => void;
}

export const useAboutInteractor = (): IAboutInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);
  const isTablet = useMediaQuery(MediaQuery.Tablet);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0.3 1', '1 0'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [130, 0]);

  const [descriptionExpanded, setDescriptionExpanded] = useState<boolean>(false);

  const handleDescriptionExpandToggle = () => setDescriptionExpanded(prevState => !prevState);

  return {
    sectionRef,
    photoY,
    matches: { isDesktop, isTablet },

    content: {
      title: 'Indulge in gourmet elegance, tailored for the modern gentleman',
      description: [
        "Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don't have time to cook. We offer you the convenience and luxury of homestyle, gourmet meals delivered right to your doorstep. ",
        'We offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives.',
      ],
      image: { alt: 'Dish', width: 1000, height: 1000, src: Image.src },
    },

    descriptionExpanded,
    handleDescriptionExpandToggle,
  };
};
