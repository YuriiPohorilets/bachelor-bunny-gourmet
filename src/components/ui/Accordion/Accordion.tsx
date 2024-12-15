import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

import { IconWrapper } from '@/components/layout';
import styles from './Accordion.module.scss';

type PropsType = {
  title: string;
  content: string;
  expanded?: boolean;
};

export const Accordion: React.FC<PropsType> = ({ title, content, expanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleExpandToggle = () => setIsExpanded(prevState => !prevState);

  return (
    <div aria-expanded={isExpanded} className={styles.item}>
      <div onClick={handleExpandToggle} className={styles.header}>
        <span className={styles.title}>{title}</span>

        <IconWrapper>+</IconWrapper>
      </div>

      <div className={styles.body}>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};
