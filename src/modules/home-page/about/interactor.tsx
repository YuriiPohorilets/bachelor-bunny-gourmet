import { useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import Image from '@/assets/images/home/about_content.png';

export interface IAboutInteractor {
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

  const [descriptionExpanded, setDescriptionExpanded] = useState<boolean>(false);

  const handleDescriptionExpandToggle = () => setDescriptionExpanded(prevState => !prevState);

  return {
    matches: { isDesktop, isTablet },

    content: {
      title: 'Indulge in gourmet elegance, tailored for the modern gentleman',
      description: [
        'Bachelor  Bunny Gourmet is a meal delivery and catering service for busy professionals.',
        'We offer the convenience and luxury of homestyle meals delivered right to your door. Our weekly dinner delivery is tailored to each client and executed on time by our courteous representatives.',
      ],
      image: { alt: 'Dish', width: 1000, height: 1000, src: Image.src },
    },

    descriptionExpanded,
    handleDescriptionExpandToggle,
  };
};
