import { useRef } from 'react';
import Swiper from 'swiper';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import SlidePlaceholderImg from '@/assets/images/home/client-placeholder.jpg';

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
    rate: number;
    comment: string;
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
      title: 'Our clients',
      description: [
        'Enhance your male-themed events with Bachelor Bunny Gourmet Catering/Events. We go beyond just providing food and seamless event management; we deliver an ',
        "unforgettable experience. Our premier catering service is tailored for bachelor parties, cigar nights, sports gatherings, and any guys' night, infusing a touch of gourmet sophistication into every event",
      ],
    },

    slides: [
      {
        id: '1',
        name: 'Alice Johnson',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.The service was fantastic! Everything was handled smoothly and exceeded my expectations.',
      },
      {
        id: '2',
        name: 'Bob Smith',
        rate: 4,
        image: SlidePlaceholderImg.src,
        comment:
          'Overall, it was a good experience. There were a few minor delays, but the team handled them well.',
      },
      {
        id: '3',
        name: 'Charlie Brown',
        rate: 3,
        image: SlidePlaceholderImg.src,
        comment:
          'An average experience. Some aspects were good, while others could use significant improvement.',
      },
      {
        id: '4',
        name: 'Diana Prince',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'Absolutely fantastic! I was thoroughly impressed by the level of professionalism and attention to detail.',
      },
      {
        id: '5',
        name: 'Ethan Hunt',
        rate: 2,
        image: SlidePlaceholderImg.src,
        comment:
          'The service was below my expectations. Communication could have been better, and there were unnecessary delays.',
      },
      {
        id: '6',
        name: 'Fiona Gallagher',
        rate: 1,
        image: SlidePlaceholderImg.src,
        comment:
          'Extremely disappointing experience. The team was unresponsive, and the service was far from satisfactory.',
      },
      {
        id: '7',
        name: 'George Lopez',
        rate: 4,
        image: SlidePlaceholderImg.src,
        comment:
          'Good service overall, and the pricing was fair. I would recommend it to friends, but there’s room for improvement.',
      },
      {
        id: '8',
        name: 'Hannah Baker',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'Excellent experience! Everything was seamless, and I couldn’t have asked for better service.',
      },
      {
        id: '9',
        name: 'Ian Wright',
        rate: 3,
        image: SlidePlaceholderImg.src,
        comment:
          'The service was okay. I liked some parts, but other aspects didn’t meet my expectations.',
      },
      {
        id: '10',
        name: 'Jack Daniels',
        rate: 0,
        image: SlidePlaceholderImg.src,
        comment:
          'No comments provided. It seems the user didn’t have a strong opinion about the service, either positive or negative.',
      },
      {
        id: '11',
        name: 'Karen Walker',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'An outstanding experience from start to finish! The team went above and beyond to ensure everything was perfect.',
      },
      {
        id: '12',
        name: 'Leo Messi',
        rate: 4,
        image: SlidePlaceholderImg.src,
        comment:
          'Very good service, but there were a couple of hiccups along the way that kept it from being perfect.',
      },
      {
        id: '13',
        name: 'Mia Wallace',
        rate: 3,
        image: SlidePlaceholderImg.src,
        comment:
          'It was fine. I didn’t encounter any major issues, but it didn’t leave a lasting impression either.',
      },
      {
        id: '14',
        name: 'Nathan Drake',
        rate: 2,
        image: SlidePlaceholderImg.src,
        comment:
          'Subpar experience. The service didn’t match the promises made, and I was left quite dissatisfied.',
      },
      {
        id: '15',
        name: 'Olivia Pope',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'Truly an exceptional service! The staff was friendly, attentive, and ensured every detail was taken care of.',
      },
      {
        id: '16',
        name: 'Patrick Star',
        rate: 1,
        image: SlidePlaceholderImg.src,
        comment:
          'Terrible experience. Nothing was handled properly, and I felt completely let down by the service provided.',
      },
      {
        id: '17',
        name: 'Quincy Adams',
        rate: 0,
        image: SlidePlaceholderImg.src,
        comment:
          'No comments provided. It’s unclear what the user’s experience was like, as they didn’t leave feedback.',
      },
      {
        id: '18',
        name: 'Rachel Green',
        rate: 4,
        image: SlidePlaceholderImg.src,
        comment:
          'I enjoyed the experience overall. There were a couple of minor issues, but they were resolved quickly.',
      },
      {
        id: '19',
        name: 'Steve Rogers',
        rate: 5,
        image: SlidePlaceholderImg.src,
        comment:
          'Absolutely flawless! Everything went according to plan, and the entire process was incredibly smooth.',
      },
      {
        id: '20',
        name: 'Tina Fey',
        rate: 2,
        image: SlidePlaceholderImg.src,
        comment:
          'Not great. I expected much more given the high price, but unfortunately, the service didn’t deliver.',
      },
    ],
  };
};
