import { AnimatePresence, motion } from 'motion/react';

interface IProps extends React.PropsWithChildren {
  open: boolean;
}

export const Collapse: React.FC<IProps> = ({ children, open }) => {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          layout
          initial={{ height: '0px', opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: '0px', opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
