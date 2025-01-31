export interface ICommunityInteractor {
  content: {
    title: string;
    description: string[];
    buttonLabel: string;
  };
}

export const useCommunityInteractor = (): ICommunityInteractor => {
  return {
    content: {
      title: 'Become a member of the Bachelor club',
      description: [
        "Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered, unpacked, plated, and served by our team, elevating your dining experience and making you part of an elite group.",
        'Indulge in the Art of Mastery, where success is crafted and leisure is defined in the exclusive realm of the Modern Gentleman.',
      ],
      buttonLabel: 'Join the club',
    },
  };
};
