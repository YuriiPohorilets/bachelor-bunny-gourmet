import { motion } from 'motion/react';

import { CrownIcon } from '@/components/icons';
import styles from './Crown.module.scss';

interface IProps {
  animate?: boolean;
}

export const Crown: React.FC<IProps> = ({ animate = false }) => {
  return (
    <motion.div
      animate={{ scale: animate ? [0.9, 1.1, 0.9] : 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
      className={styles.icon}
    >
      <CrownIcon />
    </motion.div>
  );
};
