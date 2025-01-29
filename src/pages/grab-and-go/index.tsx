import Head from 'next/head';
import { Footer } from '@/modules/footer';
import { About, Faq, Hero, Menu } from '@/modules/grab-and-go';

const GrabAndGoPage = () => {
  return (
    <>
      <Head>
        <title>Grab & Go</title>
        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />
      </Head>

      <Hero />
      <Menu />
      <About />

      <div className="grabAndGo bgWrapper">
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default GrabAndGoPage;
