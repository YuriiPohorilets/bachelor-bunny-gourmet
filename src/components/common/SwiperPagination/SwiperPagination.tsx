import clsx from 'clsx';
import styles from './SwiperPagination.module.scss';

interface IProps {
  className?: string | string[];
}

export const SwiperPagination: React.FC<IProps> = ({ className }) => {
  return <div className={clsx('pagination', className, styles.pagination)}></div>;
};
