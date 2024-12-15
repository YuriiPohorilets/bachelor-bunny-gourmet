import { Footer, Header } from '@/components/layout';

type PropsType = React.PropsWithChildren & {};

export const RootLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
