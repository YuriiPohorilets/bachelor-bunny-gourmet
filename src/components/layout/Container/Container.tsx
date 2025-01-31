import clsx from 'clsx';
import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string | string[];
}

export const Container: React.FC<IProps> = ({ children, className = [] }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
