import { Container } from '@/components/layout';
import { Copyright, Social, ToTopButton } from '@/components/common';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import styles from './Footer.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Footer: React.FC<IProps> = () => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return (
    <footer className={styles.footer} id="footer">
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.copyWrapper}>
            <Copyright />
            {isDesktop ? <ToTopButton /> : <Social />}
          </div>
        </div>
      </Container>
    </footer>
  );
};
