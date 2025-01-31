import clsx from 'clsx';
import styles from './SwiperPagination.module.scss';

interface IProps {
  id: string;
  className?: string | string[];
}

export const SwiperPagination: React.FC<IProps> = ({ id, className }) => {
  return <div id={id} className={clsx('pagination', className, styles.pagination)}></div>;
};
