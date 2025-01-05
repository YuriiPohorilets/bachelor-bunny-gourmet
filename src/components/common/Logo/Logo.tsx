import { IconWrapper } from '@/components/layout';
import { CrownIcon } from '@/components/icons';
import styles from './Logo.module.scss';

type LogoProps = {
  showLabel?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ showLabel }) => {
  return (
    <a href="/" aria-label="Logo" className={styles.logo}>
      <IconWrapper className={styles.iconWrapper}>
        <CrownIcon />
      </IconWrapper>

      {showLabel && <span className={styles.label}>BBG</span>}
    </a>
  );
};
