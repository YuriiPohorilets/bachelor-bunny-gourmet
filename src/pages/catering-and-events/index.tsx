import Head from 'next/head';

import { BgWrapper } from '@/components/common';
import { About, Faq, Hero, Quote, Team } from '@/modules/events';
import { Footer } from '@/modules/footer';
import HeroImage from '@/assets/images/events/hero_bg.jpg';
import FooterImage from '@/assets/images/events/footer_bg.jpg';

const CateringAndEventsPage = () => {
  const heroBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),
    url('${HeroImage.src}')`;

  return (
    <>
      <Head>
        <title>Catering & Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta
          name="description"
          content="Bachelor Bunny Gourmet offers more than just food and event management; it brings an experience to male-themed events. Perfect for bachelor parties, cigar nights, and sports gatherings, our catering adds gourmet sophistication. Our tastefully dressed Bunny Belles ensure memorable, high-class service."
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

export default CateringAndEventsPage;
