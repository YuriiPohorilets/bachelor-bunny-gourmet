import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PropsType = React.PropsWithChildren & {
  containerId?: string;
};

export const Portal: React.FC<PropsType> = ({ children, containerId = 'root-modal' }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalContainer = document.getElementById(containerId);
    let createdByPortal = false;

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = containerId;
      createdByPortal = true;

      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);

    return () => {
      if (createdByPortal && portalContainer && portalContainer.parentNode === document.body) {
        document.body.removeChild(portalContainer);
      }
    };
  }, [containerId]);

  if (!container) return null;

  return createPortal(children, container);
};
