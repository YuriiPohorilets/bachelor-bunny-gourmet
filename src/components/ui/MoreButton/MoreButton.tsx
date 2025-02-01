import styles from './MoreButton.module.scss';

interface IProps {
  label: string;
  onClick: () => void;
}

export const MoreButton: React.FC<IProps> = ({ label, onClick }) => {
  return (
    <button type="button" aria-label="more" onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};
