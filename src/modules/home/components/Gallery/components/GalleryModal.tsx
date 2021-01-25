import React, { FunctionComponent, ReactElement } from 'react';

import { Modal } from 'modules/shared/elements/Modal/Modal';

import styles from './GalleryModal.module.css';

interface Props {
  src: string;
  title: string;
  description: string;
  hashtag: string;
  time: string;
  open: boolean;
  onCloseModal: () => void;
}

export const GalleryModal: FunctionComponent<Props> = React.memo(
  ({ src, title, description, hashtag, time, open, onCloseModal }: Props): ReactElement => {
    return (
      <Modal
        open={open}
        onClose={onCloseModal}
        ariaDescribedby="Show details of an image"
        ariaLabelledby="Image details"
        modalId="home-gallery-details"
      >
        <figure className={styles.image}>
          <img src={src} alt={title} />
          <figcaption>
            <b className={styles.title}>Description</b>
            <div className={styles.details}>
              <span># {hashtag}</span>
              <span>{time}</span>
            </div>
            <p className={styles.description}>{description}</p>
          </figcaption>
        </figure>
      </Modal>
    );
  }
);
