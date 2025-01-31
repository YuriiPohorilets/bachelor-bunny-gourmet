import { useRef } from 'react';
import Swiper from 'swiper';

import SlidePlaceholderImg from '@/assets/images/home/client-placeholder.jpg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IMenuInteractor {
  swiperRef: React.MutableRefObject<Swiper | null>;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;

  matches: { isDesktop: boolean };

  content: {
    title: string;
    label: string;
  };

  slides: {
    id: string;
    name: string;
    image: string;
  }[];
}

export const useMenuInteractor = (): IMenuInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);
  const swiperRef = useRef<Swiper | null>(null);

  const handlePrevSlide = () => swiperRef.current?.slidePrev();
  const handleNextSlide = () => swiperRef.current?.slideNext();

  return {
    swiperRef,
    handlePrevSlide,
    handleNextSlide,

    matches: { isDesktop },

    content: {
      title: 'Signature dishes',
      label: '-20% off week order',
    },

    slides: [
      {
        id: '1',
        name: 'Alice Johnson',
        image: SlidePlaceholderImg.src,
      },
      {
        id: '2',
        name: 'Bob Smith',
        image: SlidePlaceholderImg.src,
      },
      {
        id: '3',
        name: 'Charlie Brown',
        image: SlidePlaceholderImg.src,
      },
      {
        id: '4',
        name: 'Diana Prince',
        image: SlidePlaceholderImg.src,
      },
    ],
  };
};
