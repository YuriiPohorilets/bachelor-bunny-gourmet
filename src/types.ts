export enum PagePath {
  Home = '/',
  AboutUs = '/about-uu',
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
  label: string;
  link?: PagePath;
  children?: NavType[];
};
