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
      title: 'In-Home Executive Delivery',
      label: 'The first meal is free',
      description: [
        'A charming Bunny Belle brings an elevated dining experience straight to your door, gracefully ',
        'engaging in light conversation as she plates your pre-cooked meal and serves a perfectly paired cocktail, adding a touch of luxury to your evening.',
      ],
      buttonLabel: 'Contact us',
    },
  };
};
