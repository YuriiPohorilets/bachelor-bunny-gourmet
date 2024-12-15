import { NavType, PagePath } from '@/types';

export const navigation: NavType[] = [
  { label: 'Home', link: PagePath.Home },
  { label: 'About us', link: PagePath.AboutUs },
  {
    label: 'Services',
    children: [
      { label: 'Grab & Go', link: PagePath.GrabAndGo },
      { label: 'In-Home Executive Delivery', link: PagePath.Delivery },
      { label: 'Catering & Events', link: PagePath.Catering },
    ],
  },
  { label: 'Contact us', link: PagePath.ContactUs },
];
