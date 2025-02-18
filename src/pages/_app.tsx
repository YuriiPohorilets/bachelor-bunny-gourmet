import type { AppProps } from 'next/app';

import { RootLayout } from '@/components/layout';
import '@/styles/index.scss';
import '@/styles/base.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
