import styles from './Header.module.scss';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
  return <header className={styles.header}>Header</header>;
};
