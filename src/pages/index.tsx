import Head from 'next/head';
import {
  About,
  Services,
  Hero,
  GrabAndGo,
  DeliveryService,
  Events,
  OurClients,
  Community,
} from '@/modules/home-page';
import { Footer } from '@/modules/footer';
import { BgWrapper } from '@/components/common';
import FooterImage from '@/assets/images/home/footer_bg.jpg';

const HomePage = () => {
  const footerBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('${FooterImage.src}')`;

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta name="description" content="Delicious meals delivered to your door" />
      </Head>

      <Hero />
      <About />
      <Services />
      <GrabAndGo />
      <DeliveryService />
      <Events />
      <OurClients />

      <BgWrapper background={footerBg}>
        <Community />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default HomePage;
