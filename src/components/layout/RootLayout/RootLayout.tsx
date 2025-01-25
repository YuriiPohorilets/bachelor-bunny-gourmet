import { Footer, Header, SmoothScroll } from '@/components/layout';

interface IProps extends React.PropsWithChildren {}

export const RootLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <main>{children}</main>
      </SmoothScroll>
    </>
  );
};
