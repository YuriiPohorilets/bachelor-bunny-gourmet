import { useRef, useState } from 'react';
import Swiper from 'swiper';

import Slide1Img from '@/assets/images/home/services/slide-1.jpg';
import Slide2Img from '@/assets/images/home/services/slide-2.jpg';
import Slide3Img from '@/assets/images/home/services/slide-3.jpg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IServicesInteractor {
  matches: {
    isDesktop: boolean;
    isTablet: boolean;
  };

  content: {
    title: string;
    description: string;
  };

  slides: { id: string; alt: string; width: number; height: number; src: string }[];

  slideIdx: number;
  swiperRef: React.MutableRefObject<Swiper | null>;
  handleSlideChange: (swiper: Swiper) => void;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

const content = [
  {
    title: 'GRAB & GO',
    description: 'Your solution for busy days, with four gourmet meals delivered across two days.',
  },
  {
    title: 'In-Home Executive Delivery',
    description:
      'Luxury dining at home with beautiful Bunny Bells: delivery, cocktails, conversation.',
  },
  {
    title: 'Catering & Events',
    description: 'Elevate events with Bachelor Bunny Gourmet Catering, tailored for men.',
  },
];

export const useServicesInteractor = (): IServicesInteractor => {
  const [slideIdx, setSlideIdx] = useState<number>(0);
  const isDesktop = useMediaQuery(MediaQuery.Desktop);
  const isTablet = useMediaQuery(MediaQuery.Tablet);

  const swiperRef = useRef<Swiper | null>(null);

  const handleSlideChange = (swiper: Swiper) => {
    setSlideIdx(swiper.realIndex);
  };

  const handlePrevSlide = () => swiperRef.current?.slidePrev();
  const handleNextSlide = () => swiperRef.current?.slideNext();

  return {
    matches: {
      isDesktop,
      isTablet,
    },

    content: content[slideIdx],

    slides: [
      { id: 'slide-services-1', alt: 'Slide 1', width: 1920, height: 1080, src: Slide1Img.src },
      { id: 'slide-services-2', alt: 'Slide 2', width: 1920, height: 1080, src: Slide2Img.src },
      { id: 'slide-services-3', alt: 'Slide 3', width: 1920, height: 1080, src: Slide3Img.src },
    ],

    swiperRef,
    slideIdx,
    handleSlideChange,
    handlePrevSlide,
    handleNextSlide,
  };
};
