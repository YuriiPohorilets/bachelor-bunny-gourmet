import { useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const [hover, setHover] = useState<boolean>(false);
  const ref = useRef<T>(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      node?.removeEventListener('mouseover', handleMouseOver);
      node?.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return [ref, hover];
};
