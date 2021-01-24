import React, { FunctionComponent, ReactElement } from 'react';

import styles from './GalleryItem.module.css';

interface Props {
  title: string;
  src: string;
}

export const GalleryItem: FunctionComponent<Props> = ({ src, title }: Props): ReactElement => {
  return (
    <figure key={title}>
      <img src={src} alt={title} className={styles.image} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>
  );
};
