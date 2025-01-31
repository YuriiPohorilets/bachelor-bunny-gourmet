import { Menu } from '@/modules/menu';
import { Logo, NavList } from '@/components/common';
import { Container } from '@/components/layout';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Logo showLabel={!isDesktop} />

          {isDesktop ? <NavList /> : <Menu />}
        </div>
      </Container>
    </header>
  );
};
