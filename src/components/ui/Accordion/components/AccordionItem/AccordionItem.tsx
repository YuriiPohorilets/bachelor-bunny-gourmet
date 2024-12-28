import { AnimatePresence, motion } from 'motion/react';

import styles from './AccordionItem.module.scss';

export type AccordionItemProps = React.PropsWithChildren & {
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onClick,
  children,
}) => {
  const variants = {
    close: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 },
  };

  return (
    <li className={styles.item}>
      <button type="button" aria-expanded={isOpen} onClick={onClick} className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={styles.icon} />
      </button>

      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          exit="close"
          className={styles.contentWrapper}
        >
          <p className={styles.content}>{children}</p>
        </motion.div>
      </AnimatePresence>
    </li>
  );
};
