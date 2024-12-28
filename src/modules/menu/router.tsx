import { motion, MotionConfig } from 'motion/react';
import clsx from 'clsx';

import { IMenuInteractor } from './interactor';
import { duration, easing } from '@/utils/framer-animation';
import { NavList } from '@/components/common';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

export interface IProps {
  interactor: IMenuInteractor;
}

export const MenuRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <MotionConfig transition={{ duration: duration.md, ease: easing.common }}>
      <div className={styles.wrapper} ref={interactor.modalRef}>
        <div className={styles.buttonWrapper}>
          <span className={styles.menuLabel}>Menu</span>

          <motion.button
            type="button"
            aria-label="Menu"
            onClick={interactor.handleToggle}
            className={clsx(styles.button, interactor.open && styles.open)}
          >
            <span className={styles.buttonIcon} />
          </motion.button>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: interactor.open ? 1 : 0,
            visibility: interactor.open ? 'visible' : 'hidden',
            x: interactor.open ? 1 : '100%',
          }}
          className={clsx(styles.menu, interactor.open && styles.open)}
        >
          <div className={styles.header}>
            <span className={styles.menuLabel}>Menu</span>
          </div>

          <div className={styles.body}>
            <NavList />
          </div>

          <div className={styles.footer}>
            <Button fullWidth>Make an order</Button>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};
