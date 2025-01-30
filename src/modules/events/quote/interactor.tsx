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
        "Our charming bunny bells, tastefully dressed to complement your event's theme, ensure a high-class servicethat will impress your guests",
    },
  };
};
