export interface IQuoteInteractor {
  content: {
    title: string;
    quote: string;
  };
}

export const useQuoteInteractor = (): IQuoteInteractor => {
  return {
    content: {
      title: 'Quote',
      quote:
        'Include in culinary excellence with bunny belles: your experience, enhanced by signature cocktails',
    },
  };
};
