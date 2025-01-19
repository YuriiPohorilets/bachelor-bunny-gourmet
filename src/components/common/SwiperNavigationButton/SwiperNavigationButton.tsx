import clsx from 'clsx';

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
    <button
      id={id}
      type="button"
      aria-label={`${direction} slide`}
      onClick={onClick}
      className={clsx(styles.button, styles[direction], styles[size])}
    >
      <SliderArrowIcon />
    </button>
  );
};
