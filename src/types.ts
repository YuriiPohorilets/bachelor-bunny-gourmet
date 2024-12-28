export enum PagePath {
  Home = '/',
  AboutUs = '/about-us',
  GrabAndGo = '/grab-and-go',
  Delivery = '/delivery',
  Catering = '/catering-and-events',
  ContactUs = '/contact-us',
}

export enum MediaQuery {
  Tablet = '(min-width: 768px)',
  Desktop = '(min-width: 1280px)',
}

export type NavType = {
  id: string;
  label: string;
  link?: PagePath;
  children?: NavType[];
};
