import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

import { Header, SmoothScroll } from '@/components/layout';

interface IProps extends React.PropsWithChildren {}

export const RootLayout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <>
      <SmoothScroll>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            key={pathname}
          >
            <Header />
            <motion.main>{children}</motion.main>
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </>
  );
};
