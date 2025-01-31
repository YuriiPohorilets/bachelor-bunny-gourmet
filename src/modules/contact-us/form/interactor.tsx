import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';

export interface IFormInteractor {
  matches: { isDesktop: boolean };
  content: {
    title: string;
    label: string;
    description: string;
  };
}

export const useFormInteractor = (): IFormInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: { isDesktop },
    content: {
      title: 'Contact us',
      label: "We're almost ready!",
      description:
        "We'll be accepting orders very soon. Be the first to know and stay ahead by signing up now.",
    },
  };
};
