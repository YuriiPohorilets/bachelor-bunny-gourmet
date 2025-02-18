import Head from 'next/head';

import { Footer, Form } from '@/modules/contact-us';
import { BgWrapper } from '@/components/common';
import { Container } from '@/components/layout';
import BgImage from '@/assets/images/contact-us/contact-us_bg.jpg';
import styles from './index.module.scss';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicons/favicon.svg" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bachelor Bunny Gourmet" />
        <link rel="manifest" href="favicons/site.webmanifest" />

        <meta
          name="description"
          content="Bachelor Bunnies, already equip with strong positive work ethic principals, are trained to excel in customer service, and maintain high moral throughout the entire experience. Contact us to see what we have available."
        />
      </Head>

      <BgWrapper background={`url('${BgImage.src}')`} className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.innerWrapper}>
            <Form />
            <Footer />
          </div>
        </Container>
      </BgWrapper>
    </>
  );
};

export default ContactUsPage;
