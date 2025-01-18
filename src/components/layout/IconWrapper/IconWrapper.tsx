import clsx from 'clsx';
import styles from './IconWrapper.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string | string[];
}

export const IconWrapper: React.FC<IProps> = ({ children, className }) => {
  return <span className={clsx(styles.iconWrapper, className)}>{children}</span>;
};
