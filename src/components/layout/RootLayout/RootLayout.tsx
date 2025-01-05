import { Footer, Header, SmoothScroll } from '@/components/layout';

type PropsType = React.PropsWithChildren & {};

export const RootLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </>
  );
};
