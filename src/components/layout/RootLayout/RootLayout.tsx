import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import { Cormorant_Unicase } from 'next/font/google';

import { Header, SmoothScroll } from '@/components/layout';
import { Crown } from '@/components/common';

interface IProps extends React.PropsWithChildren {}

export const gothamPro = localFont({
  src: [
    { path: '../../../fonts/GothamPro/GothamProLight.woff', weight: '300', style: 'normal' },
    { path: '../../../fonts/GothamPro/GothamProRegular.woff', weight: '400', style: 'normal' },
  ],
  variable: '--font-gotham-pro',
});

export const centuryGothic = localFont({
  src: [
    { path: '../../../fonts/CenturyGothic/CenturyGothic.woff', weight: '400', style: 'normal' },
    { path: '../../../fonts/CenturyGothic/CenturyGothicBold.woff', weight: '500', style: 'normal' },
  ],
  variable: '--font-century-gothic',
});

export const adobeGaramond = localFont({
  src: [
    {
      path: '../../../fonts/AdobeGaramondPro/AdobeGaramondProRegular.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-adobe-garamond',
});

export const cormorantUnicase = Cormorant_Unicase({
  subsets: ['latin'],
  variable: '--font-cormorant-unicase',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const RootLayout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathname]);

  return (
    <div
      className={`${gothamPro.variable} ${centuryGothic.variable} ${adobeGaramond.variable} ${cormorantUnicase.variable}`}
    >
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            key={pathname}
          >
            <Header />

            <main>{children}</main>
          </motion.div>
        </AnimatePresence>

        <Crown animate={loading} />
      </SmoothScroll>
    </div>
  );
};
