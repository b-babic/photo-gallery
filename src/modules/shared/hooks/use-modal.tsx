import { useCallback, useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenModal = useCallback(() => setOpen(true), []);
  const onCloseModal = useCallback(() => setOpen(false), []);

  return {
    open,
    onOpenModal,
    onCloseModal,
  };
};
