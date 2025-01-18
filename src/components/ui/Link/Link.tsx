import { default as NextLink } from 'next/link';
import { LinkProps } from 'next/link';

import { OutwardArrowIcon } from '@/components/icons';
import styles from './Link.module.scss';

interface IProps extends LinkProps, React.PropsWithChildren {
  fullWidth?: boolean;
}

export const Link: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest} className={styles.link}>
      <span className={styles.label}>{children}</span>

      <span className={styles.iconWrapper}>
        <OutwardArrowIcon />
      </span>
    </NextLink>
  );
};
