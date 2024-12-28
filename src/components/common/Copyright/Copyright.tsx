import styles from './Copyright.module.scss';

export const Copyright: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <div className={styles.copyright}>
      <span>&copy;{date}</span>
      <span>Bachelor Bunny</span>
    </div>
  );
};
