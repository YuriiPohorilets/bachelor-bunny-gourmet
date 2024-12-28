import { Menu } from '@/modules/menu';
import { Logo } from '@/components/common';
import { Container } from '@/components/layout';
import { NavList } from '@/components/common';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import styles from './Header.module.scss';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
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
