import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IHeroInteractor {
  matches: { isDesktop: boolean };
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const useHeroInteractor = (): IHeroInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },
    content: {
      title: 'Sophia Jennings',
      subtitle: 'Owner & Head chef',
      description: 'Crafting gourmet delights, personalized for your lifestyle',
    },
  };
};
