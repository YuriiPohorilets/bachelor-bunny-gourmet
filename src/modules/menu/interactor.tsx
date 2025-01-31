import { useModal } from '@/hooks/useModal';
import { useLenis } from '@/libs/react-lenis';
import { useEffect } from 'react';

export interface IMenuInteractor {
  modalRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleToggle: () => void;
}

export const useMenuInteractor = (): IMenuInteractor => {
  const { modalRef, open, handleClose, handleOpen, handleToggle } = useModal<HTMLDivElement>({});
  const lenis = useLenis();

  useEffect(() => {
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [open]);

  return {
    modalRef,
    open,
    handleClose,
    handleOpen,
    handleToggle,
  };
};
