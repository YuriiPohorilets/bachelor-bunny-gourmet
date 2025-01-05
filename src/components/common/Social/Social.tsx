import clsx from 'clsx';

import { social } from '@/constants/contacts';
import { IconWrapper } from '@/components/layout';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/icons';
import styles from './Social.module.scss';

type PropsType = {
  variant?: 'text' | 'icon';
  direction?: 'row' | 'column';
};

export const Social: React.FC<PropsType> = ({ variant = 'icon', direction = 'row' }) => {
  const icons = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    youtube: <YoutubeIcon />,
  };
  return (
    <ul className={clsx(styles.list, styles[direction])}>
      {social.map(item => (
        <li key={item.label} className={styles.icon}>
          <a href={item.link} target="_blank" className={styles.link}>
            {variant === 'icon' ? (
              <IconWrapper className={styles.icon}>{icons[item.name]}</IconWrapper>
            ) : (
              item.label
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};
