export interface IAboutInteractor {
  content: {
    title: string;
    description: string[];
    buttonLabel: string;
  };
}

export const useAboutInteractor = (): IAboutInteractor => {
  return {
    content: {
      title: 'about',
      description: [
        'The Bachelor Bunny Grab-N-Go offers a simple and convenient solution for busy people.',
        'A four-meal package is delivered twice a week: two meals on one day and the remaining two on another. Delivery days are typically Monday/Wednesday or Tuesday/Thursday. Meals arrive in a branded box with containers that keep the food warm.',
      ],
      buttonLabel: 'Make an order',
    },
  };
};
