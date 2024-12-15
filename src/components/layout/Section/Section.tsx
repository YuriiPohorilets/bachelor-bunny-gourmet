import styles from './Section.module.scss';

type PropsType = React.PropsWithChildren & {
  id?: string;
};

export const Section: React.FC<PropsType> = ({ children, id }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};
