/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React, { useEffect, useState, useRef } from 'react';
import ReactDom from 'react-dom';
import { CloseIcon } from './components/CloseIcon';
import { FocusTrap } from './components/FocusTrap';
import { modalManager, useModalManager } from './hooks/use-modal-manager';
import { useScrollLock } from './hooks/use-scroll-lock';

import styles from './Modal.module.css';

export const isBrowser = typeof window !== 'undefined';

export interface Props {
  open: boolean;
  blockScroll?: boolean;
  showCloseIcon?: boolean;
  focusTrapped?: boolean;
  container?: Element | null;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  modalId?: string;
  onClose: () => void;
  onEscKeyDown?: (event: KeyboardEvent) => void;
  onOverlayClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onAnimationEnd?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  open,
  blockScroll = true,
  container,
  showCloseIcon = true,
  focusTrapped = true,
  ariaDescribedby,
  ariaLabelledby,
  modalId,
  onClose,
  onEscKeyDown,
  onOverlayClick,
  onAnimationEnd,
  children,
}: Props) => {
  const refModal = useRef<HTMLDivElement>(null);
  const refShouldClose = useRef<boolean | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);

  // Lazily create the ref instance
  // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
  if (refContainer.current === null && isBrowser) {
    refContainer.current = document.createElement('div');
  }

  // The value should be false for srr, that way when the component is hydrated client side,
  // it will match the server rendered content
  const [showPortal, setShowPortal] = useState(false);

  // Hook used to manage multiple modals opened at the same time
  useModalManager(refModal, open);

  // Hook used to manage the scroll
  useScrollLock(refModal, open, showPortal, blockScroll);

  const handleOpen = () => {
    if (refContainer.current && !container && !document.body.contains(refContainer.current)) {
      document.body.appendChild(refContainer.current);
    }

    document.addEventListener('keydown', handleKeydown);
  };

  const handleClose = () => {
    if (refContainer.current && !container && document.body.contains(refContainer.current)) {
      document.body.removeChild(refContainer.current);
    }
    document.removeEventListener('keydown', handleKeydown);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    // Only the last modal need to be escaped when pressing the esc key
    if (event.keyCode !== 27 || !modalManager.isTopModal(refModal)) {
      return;
    }

    onEscKeyDown?.(event);

    onClose();
  };

  useEffect(() => {
    return () => {
      if (showPortal) {
        // When the modal is closed or removed directly, cleanup the listeners
        handleClose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPortal]);

  useEffect(() => {
    // If the open prop is changing, we need to open the modal
    // This is also called on the first render if the open prop is true when the modal is created
    if (open && !showPortal) {
      setShowPortal(true);
      handleOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (refShouldClose.current === null) {
      refShouldClose.current = true;
    }

    if (!refShouldClose.current) {
      refShouldClose.current = null;
      return;
    }

    onOverlayClick?.(event);

    onClose();

    refShouldClose.current = null;
  };

  const handleModalEvent = () => {
    refShouldClose.current = false;
  };

  const handleAnimationEnd = () => {
    if (!open) {
      setShowPortal(false);
    }

    onAnimationEnd?.();
  };

  const containerModal = container || refContainer.current;

  const overlayAnimation = open ? styles.overlayAnimationIn : styles.overlayAnimationOut;

  const modalAnimation = open ? styles.modalAnimationIn : styles.modalAnimationOut;

  return showPortal && containerModal
    ? ReactDom.createPortal(
        <div className={styles.root} data-testid="root">
          <div className={clsx(styles.backdrop, overlayAnimation)} data-testid="overlay" aria-hidden />
          <div
            role="document"
            ref={refModal}
            className={styles.container}
            data-testid="modal-container"
            onClick={handleClickOverlay}
          >
            <dialog
              className={clsx(styles.modal, modalAnimation)}
              onMouseDown={handleModalEvent}
              onMouseUp={handleModalEvent}
              onClick={handleModalEvent}
              onAnimationEnd={handleAnimationEnd}
              id={modalId}
              aria-modal="true"
              aria-labelledby={ariaLabelledby}
              aria-describedby={ariaDescribedby}
              data-testid="modal"
            >
              {focusTrapped && <FocusTrap container={refModal} />}
              {children}
              {showCloseIcon && <CloseIcon onClick={onClose} />}
            </dialog>
          </div>
        </div>,
        containerModal
      )
    : null;
};
