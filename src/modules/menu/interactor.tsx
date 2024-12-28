import { useModal } from '@/hooks/useModal';

export interface IMenuInteractor {
  modalRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleToggle: () => void;
}

export const useMenuInteractor = (): IMenuInteractor => {
  const { modalRef, open, handleClose, handleOpen, handleToggle } = useModal<HTMLDivElement>({});

  return {
    modalRef,
    open,
    handleClose,
    handleOpen,
    handleToggle,
  };
};
