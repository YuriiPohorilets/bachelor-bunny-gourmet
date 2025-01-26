import Head from 'next/head';
import { About, Hero } from '@/modules/about-us-page';
import { Footer } from '@/modules/footer';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />
      </Head>

      <Hero />
      <About />

      <div className="about bgWrapper">
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
