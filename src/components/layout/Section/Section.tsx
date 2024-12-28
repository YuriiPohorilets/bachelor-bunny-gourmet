import clsx from 'clsx';
import styles from './Section.module.scss';

type PropsType = React.PropsWithChildren & {
  id?: string;
  className?: string | string[];
};

export const Section: React.FC<PropsType> = ({ children, id, className = [] }) => {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      {children}
    </section>
  );
};
