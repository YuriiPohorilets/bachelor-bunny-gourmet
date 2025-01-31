import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IEventsInteractor {
  matches: { isDesktop: boolean };
  content: {
    title: string;
    description: string;
  };
}

export const useEventsInteractor = (): IEventsInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },
    content: {
      title: 'Catering & Events',
      description:
        "Elevate your bachelor parties and guys' nights with Bachelor Bunny Gourmet Catering, delivering unforgettable, seamless events with a touch of sophistication.",
    },
  };
};
