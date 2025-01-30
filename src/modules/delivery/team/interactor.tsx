import { useRef } from 'react';
import Swiper from 'swiper';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import Slide1Img from '@/assets/images/delivery/team_slide-1.jpg';
import Slide2Img from '@/assets/images/delivery/team_slide-2.jpg';
import Slide3Img from '@/assets/images/delivery/team_slide-3.jpg';

export interface ITeamInteractor {
  swiperRef: React.MutableRefObject<Swiper | null>;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;

  matches: { isDesktop: boolean };

  content: {
    title: string;
    description: string[];
  };
  slides: {
    id: string;
    name: string;
    image: string;
  }[];
}

export const useTeamInteractor = (): ITeamInteractor => {
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
      title: 'Our Bunny Bells',
      description: [
        'Not only are your dinner meals organized and scheduled to your approval, but they are also delivered, unpacked, plated, and served to you with a cocktail by our beautiful Bunny Bells.',
        "Joining 'The Bachelor's Club' makes you part of an elite group of gentlemen enjoying this luxury experience while freeing up time to focus on other important matters. We learn your favorite foods, cocktails, and snacks to appeal to your appetite, aiming to gain your trust and loyalty through impeccable service and convenience, building a lasting relationship one bite at a time!",
      ],
    },

    slides: [
      { id: 'team-slide-1', name: 'Sophia Jennings', image: Slide1Img.src },
      { id: 'team-slide-2', name: 'Sophia Jennings', image: Slide2Img.src },
      { id: 'team-slide-3', name: 'Sophia Jennings', image: Slide3Img.src },
    ],
  };
};
