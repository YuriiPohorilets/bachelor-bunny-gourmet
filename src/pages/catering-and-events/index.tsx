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
        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />
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
