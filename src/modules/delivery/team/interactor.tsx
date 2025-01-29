export interface ITeamInteractor {
  exampleMethod: () => Promise<void>
  children: {
    firstChild: boolean
  }
}

export const useTeamInteractor = (): ITeamInteractor => {
  return {
    exampleMethod: async () => {
    },
    children: {
      firstChild: true,
    },
  };
};
