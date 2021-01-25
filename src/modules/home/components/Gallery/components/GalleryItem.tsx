import clsx from 'clsx';
import React, { FunctionComponent, ReactElement } from 'react';

import { useModal } from 'modules/shared/hooks/use-modal';

import { GalleryModal } from './GalleryModal';
import styles from './GalleryItem.module.css';

interface Props {
  title?: string;
  alt?: string;
  src: string;
  largeSrc?: string;
  hashtag: string;
  time: string;
  description?: string;
  zoomHover?: boolean;
}

export const GalleryItem: FunctionComponent<Props> = React.memo(
  ({ src, largeSrc, alt, title, description, hashtag, time, zoomHover = false }: Props): ReactElement => {
    const { open, onOpenModal, onCloseModal } = useModal();

    return (
      <>
        <button
          type="button"
          key={title}
          onClick={onOpenModal}
          className={clsx(styles.trigger, zoomHover && styles.zoom)}
        >
          <figure key={title}>
            <img src={src} alt={alt ?? title} className={styles.image} />
            {title && <figcaption className={styles.caption}>{title}</figcaption>}
          </figure>
        </button>

        <GalleryModal
          src={src}
          largeSrc={largeSrc}
          title={title ?? 'Image details'}
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
