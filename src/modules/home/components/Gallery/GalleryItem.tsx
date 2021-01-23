import React, { FunctionComponent, ReactElement } from 'react';

import styles from './GalleryItem.module.css';

interface Props {
  title: string;
  src: string;
  index: number;
}

// since there is no good way to set cs --var in react yet.
const INITIAL_DELAY: number = 1.5;
const DELTA: number = 0.15;

export const GalleryItem: FunctionComponent<Props> = ({ src, title, index }: Props): ReactElement => {
  return (
    <figure style={{ animationDelay: `${index * DELTA + INITIAL_DELAY}s` }} key={title} className={styles.item}>
      <img src={src} alt={title} className={styles.image} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>
  );
};
