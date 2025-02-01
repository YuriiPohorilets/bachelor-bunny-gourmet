import Head from 'next/head';
import { About, Community, Hero, Menu, OurTeam, Story } from '@/modules/about-us-page';
import { Footer } from '@/modules/footer';
import { BgWrapper } from '@/components/common';
import FooterImage from '@/assets/images/about/footer_bg.jpg';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta
          name="description"
          content="Crafting gourmet delights, personalized for your lifestyle"
        />
      </Head>

      <Hero />
      <About />
      <Story />
      <OurTeam />

      <BgWrapper background={`url('${FooterImage.src}')`}>
        <Menu />
        <Community />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default AboutUsPage;
