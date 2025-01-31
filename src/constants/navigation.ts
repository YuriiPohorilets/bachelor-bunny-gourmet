import { NavType, PagePath } from '@/types';

export const navigation: NavType[] = [
  { id: 'page_home', label: 'Home', link: PagePath.Home },
  { id: 'page_about', label: 'About us', link: PagePath.AboutUs },
  {
    id: 'page_services',
    label: 'Services',
    children: [
      { id: 'page_grab-go', label: 'Grab & Go', link: PagePath.GrabAndGo },
      { id: 'page_delivery', label: 'In-Home Executive Delivery', link: PagePath.Delivery },
      { id: 'page_events', label: 'Catering & Events', link: PagePath.Catering },
    ],
  },
  { id: 'page_contact', label: 'Contact us', link: PagePath.ContactUs },
];
