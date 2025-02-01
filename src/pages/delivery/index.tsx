import Head from 'next/head';

import { BgWrapper } from '@/components/common';
import { About, Faq, Hero, Quote, Team } from '@/modules/delivery';
import { Footer } from '@/modules/footer';
import HeroImage from '@/assets/images/delivery/hero_bg.jpg';
import FooterImage from '@/assets/images/delivery/footer_bg.png';

const DeliveryPage = () => {
  const heroBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),
    url('${HeroImage.src}')`;

  return (
    <>
      <Head>
        <title>In-Home Executive Delivery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta
          name="description"
          content="A charming Bunny Belle brings an elevated dining experience straight to your door, gracefully engaging in light conversation as she plates your pre-cooked meal and serves a perfectly paired cocktail, adding a touch of luxury to your evening."
        />
      </Head>

      <BgWrapper background={heroBg}>
        <Hero />
        <Quote />
      </BgWrapper>

      <About />

      <BgWrapper background={`url('${FooterImage.src}')`}>
        <Team />
        <Faq />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default DeliveryPage;
