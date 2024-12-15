import type { AppProps } from 'next/app';
import '@/styles/index.scss';
import { RootLayout } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
