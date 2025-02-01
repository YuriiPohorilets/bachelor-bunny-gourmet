import clsx from 'clsx';
import styles from './Section.module.scss';

interface IProps extends React.PropsWithChildren {
  id?: string;
  containerRef?: React.RefObject<HTMLElement>;
  className?: string | string[];
}

export const Section: React.FC<IProps> = ({ children, id, containerRef, className = [] }) => {
  const sectionClassNames = clsx(styles.section, className);

  return (
    <section id={id} className={sectionClassNames} ref={containerRef}>
      {children}
    </section>
  );
};
