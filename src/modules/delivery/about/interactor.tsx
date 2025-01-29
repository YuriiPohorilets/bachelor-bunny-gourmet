export interface IAboutInteractor {
  content: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export const useAboutInteractor = (): IAboutInteractor => {
  return {
    content: {
      title: 'About',
      description:
        'Elevate your dining experience with our exclusive service, featuring meticulously planned meals delivered, unpacked, plated, and served with a cocktail by our attentive Bunny Belles.',
      buttonLabel: 'Contact us',
    },
  };
};
