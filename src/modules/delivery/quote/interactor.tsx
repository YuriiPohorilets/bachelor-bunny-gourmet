export interface IQuoteInteractor {
  exampleMethod: () => Promise<void>
  children: {
    firstChild: boolean
  }
}

export const useQuoteInteractor = (): IQuoteInteractor => {
  return {
    exampleMethod: async () => {
    },
    children: {
      firstChild: true,
    },
  };
};
