import styles from './ToTopButton.module.scss';

export const ToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      Back to top
    </button>
  );
};
