import React, { useEffect, useRef, ReactElement, cloneElement } from 'react';

interface IProps {
  onClickAway: () => void;
  children: ReactElement<any>;
}

export const ClickAwayListener: React.FC<IProps> = ({ onClickAway, children }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleClickAway = (event: MouseEvent) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
      onClickAway();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, []);

  return cloneElement(children, { ref: nodeRef });
};
