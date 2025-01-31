import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery, PagePath } from '@/types';

export interface IFooterInteractor {
  matches: { isDesktop: boolean };
  content: {
    logo: string[];
    description: string;
    buttonLabel: string;
  };
  nav: {
    label: string;
    list: { title: string; url: string; target: '_blank' | '_self' }[];
  }[];
}

export const useFooterInteractor = (): IFooterInteractor => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return {
    matches: {
      isDesktop,
    },
    content: {
      logo: ['Bachelor bunny', 'gourmet'],
      description: 'Contact us to see what we have available.',
      buttonLabel: 'Contact us',
    },
    nav: [
      {
        label: 'Navigation',
        list: [
          { title: 'Home', url: PagePath.Home, target: '_self' },
          { title: 'About us', url: PagePath.AboutUs, target: '_self' },
          { title: 'Contact us', url: PagePath.ContactUs, target: '_self' },
          { title: 'Grab & Go', url: PagePath.GrabAndGo, target: '_self' },
          { title: 'In-Home Executive Delivery', url: PagePath.Delivery, target: '_self' },
          { title: 'Catering & Events', url: PagePath.Catering, target: '_self' },
        ],
      },
      {
        label: 'Business enquiries',
        list: [
          {
            title: 'Food@BachelorBunny.com',
            url: 'mailto:food@bachelorbunny.com',
            target: '_blank',
          },
          { title: '(866) 698-2607', url: 'tel:8666982607', target: '_blank' },
          { title: '312.722.2526', url: 'fax:312.722.2526', target: '_blank' },
        ],
      },
      {
        label: 'Follow us',
        list: [
          { title: 'YouTube', url: 'https://www.youtube.com/@SophiSummers', target: '_blank' },
          { title: 'Instagram', url: 'https://www.instagram.com/bachelorbunny', target: '_blank' },
          { title: 'Facebook', url: 'https://www.facebook.com/Bachelorbunny', target: '_blank' },
        ],
      },
    ],
  };
};
