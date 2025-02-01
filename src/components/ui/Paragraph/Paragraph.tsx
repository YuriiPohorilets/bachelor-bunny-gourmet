import clsx from 'clsx';

import styles from './Paragraph.module.scss';

interface IProps extends React.PropsWithChildren {
  capitalize?: boolean;
  className?: string;
}

export const Paragraph: React.FC<IProps> = ({ className, children, capitalize = true }) => {
  return (
    <p className={clsx(styles.paragraph, className, capitalize && styles.capitalize)}>{children}</p>
  );
};
