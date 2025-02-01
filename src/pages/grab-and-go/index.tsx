import Head from 'next/head';
import { Footer } from '@/modules/footer';
import { About, Faq, Hero, Menu } from '@/modules/grab-and-go';
import { BgWrapper } from '@/components/common';
import FooterImage from '@/assets/images/grab-and-go/footer_bg.jpg';

const GrabAndGoPage = () => {
  const footerBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('${FooterImage.src}')`;

  return (
    <>
      <Head>
        <title>Grab & Go</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta
          name="description"
          content="Grab N Go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go.Our service offers quick, convenient gourmet meals, perfectly tailored, and packaged to fit into your busy lifestyle, delivered at the clients scheduled time."
        />
      </Head>

      <Hero />
      <Menu />
      <About />

      <BgWrapper background={footerBg}>
        <Faq />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default GrabAndGoPage;
