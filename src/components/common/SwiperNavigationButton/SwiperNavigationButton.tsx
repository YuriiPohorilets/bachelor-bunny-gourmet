import clsx from 'clsx';
import { motion } from 'motion/react';

import { SliderArrowIcon } from '@/components/icons';
import styles from './SwiperNavigationButton.module.scss';

interface IProps {
  id?: string;
  onClick: () => void;
  direction: 'prev' | 'next';
  size: 'small' | 'medium' | 'large';
}

export const SwiperNavigationButton: React.FC<IProps> = ({ id, onClick, direction, size }) => {
  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      type="button"
      aria-label={`${direction} slide`}
      onClick={onClick}
      className={clsx(styles.button, styles[direction], styles[size])}
    >
      <SliderArrowIcon />
    </motion.button>
  );
};
