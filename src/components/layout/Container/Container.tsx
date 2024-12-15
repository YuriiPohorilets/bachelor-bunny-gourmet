import clsx from 'clsx';
import styles from './Container.module.scss';

type PropsType = React.PropsWithChildren & {
  className?: string | string[];
};

export const Container: React.FC<PropsType> = ({ children, className = [] }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
