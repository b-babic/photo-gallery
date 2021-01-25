import { useEffect, useRef, RefObject } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const useScrollLock = (
  refModal: RefObject<Element>,
  open: boolean,
  showPortal: boolean,
  blockScroll: boolean
) => {
  const oldRef = useRef<Element | null>(null);

  useEffect(() => {
    if (open && refModal.current && blockScroll) {
      oldRef.current = refModal.current;
      disableBodyScroll(refModal.current);
    }
    return () => {
      if (oldRef.current) {
        enableBodyScroll(oldRef.current);
        oldRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, showPortal, refModal]);
};
