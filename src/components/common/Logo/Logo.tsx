import { IconWrapper } from '@/components/layout';
import { CrownIcon } from '@/components/icons';
import styles from './Logo.module.scss';

interface IProps {
  showLabel?: boolean;
}

export const Logo: React.FC<IProps> = ({ showLabel }) => {
  return (
    <a href="/" aria-label="Logo" className={styles.logo}>
      <IconWrapper className={styles.iconWrapper}>
        <CrownIcon />
      </IconWrapper>

      {showLabel && <span className={styles.label}>BBG</span>}
    </a>
  );
};
