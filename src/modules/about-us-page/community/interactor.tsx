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
      title: ' YouTube Channel',
      description: [
        "Subscribe to our channel to watch Chef Sophi create delicious dishes! Don't miss",
        'out on her amazing cooking tips, recipes, and culinary adventures. Join us and become a part of our foodie community today!',
      ],
      buttonLabel: 'Subscribe',
    },
  };
};
