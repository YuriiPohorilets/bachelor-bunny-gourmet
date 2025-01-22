import { default as NextLink } from 'next/link';
import { LinkProps } from 'next/link';
import clsx from 'clsx';

import { OutwardArrowIcon } from '@/components/icons';
import styles from './Link.module.scss';

interface IProps extends LinkProps, React.PropsWithChildren {
  fullWidth?: boolean;
  className?: string | string[];
}

export const Link: React.FC<IProps> = ({ children, fullWidth, ...rest }) => {
  return (
    <NextLink {...rest} className={clsx(styles.link, fullWidth && styles.fullWidth)}>
      <span className={styles.label}>{children}</span>

      <span className={styles.iconWrapper}>
        <OutwardArrowIcon />
      </span>
    </NextLink>
  );
};
