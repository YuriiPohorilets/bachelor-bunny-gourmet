import clsx from 'clsx';
import styles from './IconWrapper.module.scss';

type PropsType = React.PropsWithChildren & {
  className?: string | string[];
};

export const IconWrapper: React.FC<PropsType> = ({ children, className }) => {
  return <span className={clsx(styles.iconWrapper, className)}>{children}</span>;
};
