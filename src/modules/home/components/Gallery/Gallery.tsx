import React, { FunctionComponent, ReactElement } from 'react';

import Masonry from 'modules/shared/elements/Masonry/Masonry';

import { GalleryItem } from './GalleryItem';

import styles from './Gallery.module.css';

import { Photo, photos } from './photos';

interface Props {}

export const Gallery: FunctionComponent<Props> = (): ReactElement => {
  return (
    <section className={styles.gallery}>
      <Masonry>
        {photos.map((photo: Photo, index: number) => {
          return <GalleryItem index={index} key={photo.title} src={photo.src} title={photo.title} />;
        })}
      </Masonry>
    </section>
  );
};
