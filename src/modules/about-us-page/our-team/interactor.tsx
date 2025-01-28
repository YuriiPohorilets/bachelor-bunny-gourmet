import TeamImage from '@/assets/images/about/team/team.jpg';

export interface IOurTeamInteractor {
  content: {
    title: string;
    image: { alt: string; src: string; width: number; height: number };
  };
}

export const useOurTeamInteractor = (): IOurTeamInteractor => {
  return {
    content: {
      title: 'Our team',
      image: { alt: 'Our team', src: TeamImage.src, width: 1920, height: 1080 },
    },
  };
};
