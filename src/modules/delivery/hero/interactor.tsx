export interface IHeroInteractor {
  exampleMethod: () => Promise<void>
  children: {
    firstChild: boolean
  }
}

export const useHeroInteractor = (): IHeroInteractor => {
  return {
    exampleMethod: async () => {
    },
    children: {
      firstChild: true,
    },
  };
};
