export interface IHeroInteractor {
  content: {
    title: string;
    label: string;
    description: string[];
    buttonLabel: string;
  };
}

export const useHeroInteractor = (): IHeroInteractor => {
  return {
    content: {
      title: 'Catering & Events',
      label: 'The first meal is free',
      description: [
        'Bachelor Bunny Gourmet offers more than just food and event management; it brings an ',
        'experience to male-themed events. Perfect for bachelor parties, cigar nights, and sports gatherings, our catering adds gourmet sophistication. Our tastefully dressed Bunny Belles ensure memorable, high-class service.',
      ],
      buttonLabel: 'Contact us',
    },
  };
};
