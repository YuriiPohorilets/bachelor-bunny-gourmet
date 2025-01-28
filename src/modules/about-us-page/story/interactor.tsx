export interface IStoryInteractor {
  content: {
    title: string;
    description: string[];
    label: string;
  };
}

export const useStoryInteractor = (): IStoryInteractor => {
  return {
    content: {
      title: "Here's a little story",
      description: [
        'After seven successful years in graphic design and visual communications, Sophie felt unfulfilled managing her ',
        'boutique design firm. She decided to pursue a new venture and launched Bachelor Bunny Gourmet, a catering company specializing in office meals. The idea for Bachelor Bunny Gourmet came to Sophie while observing construction workers eating from a food truck near her condo. She prepared and distributed 20 ',
        'free packed lunches to the workers, which quickly led to 10 purchase orders the very next day. This initial success inspired Sophie to dedicate herself to her new gourmet catering concept.',
        'Since its inception, Bachelor Bunny Gourmet has experienced significant growth, thanks to client support and feedback. Sophie is excited about the future and looks forward to expanding her business even further.',
      ],
      label: 'Photo of construction',
    },
  };
};
