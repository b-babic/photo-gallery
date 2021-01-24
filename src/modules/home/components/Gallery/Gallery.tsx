import React, { FunctionComponent, ReactElement } from 'react';

import Masonry from 'modules/shared/elements/Masonry/Masonry';

import styles from './Gallery.module.css';

import { photos, Photo } from './photos';
import { GalleryItem } from './GalleryItem';

interface Props {}

export const Gallery: FunctionComponent<Props> = (): ReactElement => {
  return (
    <section className={styles.gallery}>
      <Masonry>
        {photos.map((photo: Photo) => {
          return <GalleryItem key={photo.title} src={photo.src} title={photo.title} />;
        })}
      </Masonry>
    </section>
  );
};
