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
      title: 'About',
      description: [
        'Elevate your male-themed events with Bachelor Bunny Gourmet Catering/Events, delivering an unforgettable experience beyond food and seamless event management. Tailored for bachelor',
        "parties, cigar nights, sports gatherings, and any guys' night, infusing gourmet sophistication into every event.",
      ],
      buttonLabel: 'Contact us',
    },
  };
};
