import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';

import { NavType } from '@/types';
import { ClickAwayListener, IconWrapper } from '@/components/layout';
import { BasicArrowIcon } from '@/components/icons';
import styles from './NavItem.module.scss';

type NavItemProps = {
  item: NavType;
};

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string>('');

  const isActive = pathname === item.link;
  const isOpen = openItem === item.id;
  const hasChildren = item.children && item.children.length > 0;

  const handleOpenItem = (itemId: string) => {
    setOpenItem(prevState => (prevState.includes(itemId) ? '' : itemId));
  };

  const handleCloseItem = () => setOpenItem('');

  const variants = {
    open: { height: 'auto', opacity: 1 },
    close: { height: 0, opacity: 0 },
  };

  return hasChildren ? (
    <ClickAwayListener onClickAway={handleCloseItem}>
      <li className={styles.item}>
        <span
          tabIndex={0}
          onClick={() => handleOpenItem(item.id)}
          className={clsx(styles.link, isOpen && styles.active)}
        >
          <span>{item.label}</span>

          <IconWrapper className={clsx(styles.iconWrapper, isOpen && styles.open)}>
            <BasicArrowIcon />
          </IconWrapper>
        </span>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={variants}
              initial="close"
              animate={isOpen ? 'open' : 'close'}
              exit="close"
              className={styles.list}
            >
              {item.children?.map(child => (
                <NavItem key={child.id} item={child} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ClickAwayListener>
  ) : (
    <li className={styles.item}>
      <Link href={item.link!} className={clsx(styles.link, isActive && styles.active)}>
        {item.label}
      </Link>
    </li>
  );
};
