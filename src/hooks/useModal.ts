import { useState, useEffect, useCallback, useRef } from 'react';

export const useModal = <ModalEl extends HTMLElement>({ isOpen = false }: { isOpen?: boolean }) => {
  const modalRef = useRef<ModalEl | null>(null);

  const [open, setOpen] = useState(isOpen);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const modal = modalRef.current;

    if (modal && !modal.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleEscapeKey, handleClickOutside]);

  return {
    modalRef,
    open,
    handleOpen,
    handleClose,
  };
};
