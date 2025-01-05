import { default as NextLink } from 'next/link';
import { LinkProps } from 'next/link';

import { OutwardArrowIcon } from '@/components/icons';
import styles from './Link.module.scss';

type PropsType = LinkProps &
  React.PropsWithChildren & {
    fullWidth?: boolean;
  };

export const Link: React.FC<PropsType> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest} className={styles.link}>
      <span className={styles.label}>{children}</span>

      <span className={styles.iconWrapper}>
        <OutwardArrowIcon />
      </span>
    </NextLink>
  );
};
