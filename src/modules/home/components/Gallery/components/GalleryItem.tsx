import React, { FunctionComponent, ReactElement } from 'react';

import { useModal } from 'modules/shared/hooks/use-modal';

import { GalleryModal } from './GalleryModal';
import styles from './GalleryItem.module.css';

interface Props {
  title: string;
  src: string;
  hashtag: string;
  time: string;
  description: string;
}

export const GalleryItem: FunctionComponent<Props> = React.memo(
  ({ src, title, description, hashtag, time }: Props): ReactElement => {
    const { open, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <button type="button" key={title} onClick={onOpenModal} className={styles.trigger}>
          <figure key={title}>
            <img src={src} alt={title} className={styles.image} />
            <figcaption className={styles.caption}>{title}</figcaption>
          </figure>
        </button>

        <GalleryModal
          src={src}
          title={title}
          description={description}
          hashtag={hashtag}
          time={time}
          open={open}
          onCloseModal={onCloseModal}
        />
      </>
    );
  }
);
