import { Container } from '@/components/layout';
import { Copyright } from '@/components/common';
import styles from './Footer.module.scss';

type PropsType = React.PropsWithChildren & {};

export const Footer: React.FC<PropsType> = ({ children }) => {
  return (
    <footer className={styles.footer} id="footer">
      <Container className={styles.container}>
        <Copyright />
      </Container>
    </footer>
  );
};
