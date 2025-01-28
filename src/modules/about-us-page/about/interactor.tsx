import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IAboutInteractor {
  matches: { isDesktop: boolean };
  content: {
    description: string;
    quote: string;
  };
}

export const useAboutInteractor = (): IAboutInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },
    content: {
      description:
        'Quality Standard Set by Bachelor Bunny Gourmet Rooted in Integrity, Communication, Professionalism, and High-Quality Service.',
      quote: 'We Strive to be the Most Trusted, Respected, and Appreciated Brand',
    },
  };
};
