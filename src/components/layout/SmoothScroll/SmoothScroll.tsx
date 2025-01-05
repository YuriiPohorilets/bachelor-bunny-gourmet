import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from '@/libs/react-lenis';

type PropsType = React.PropsWithChildren & {};

export const SmoothScroll: React.FC<PropsType> = ({ children }) => {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    if (lenis.isScrolling) lenis.stop();

    window.scrollTo({ top: 0, behavior: 'instant' });
    lenis.start();
  }, [lenis, pathname]);

  return (
    <ReactLenis root options={{ duration: 2, lerp: 0 }}>
      {children}
    </ReactLenis>
  );
};
