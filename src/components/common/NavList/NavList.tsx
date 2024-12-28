import { navigation } from '@/constants/navigation';
import { NavItem } from './components';
import styles from './NavList.module.scss';

export const NavList: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigation.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
