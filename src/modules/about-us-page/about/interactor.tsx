export interface IAboutInteractor {
  exampleMethod: () => Promise<void>
  children: {
    firstChild: boolean
  }
}

export const useAboutInteractor = (): IAboutInteractor => {
  return {
    exampleMethod: async () => {
    },
    children: {
      firstChild: true,
    },
  };
};
