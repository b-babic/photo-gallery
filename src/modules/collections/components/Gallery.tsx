import React, { FunctionComponent, ReactElement } from 'react';

import { GalleryItem } from 'modules/home/components/Gallery/components/GalleryItem';
import { useRandomDetails } from 'modules/home/components/Gallery/data/use-random-details';
import Masonry from 'modules/shared/elements/Masonry/Masonry';

import { Photo, useSplashBase } from '../hooks/use-splash-base';

import styles from './Gallery.module.css';

interface Props {}

export const Gallery: FunctionComponent<Props> = (): ReactElement => {
  const { loading, data, failed } = useSplashBase();
  const { hashtag, time } = useRandomDetails();

  const renderData = () => {
    return data?.map((photo: Photo) => {
      return <GalleryItem key={photo.id} src={photo.url} largeSrc={photo.large_url} hashtag={hashtag} time={time} />;
    });
  };

  return (
    <section className={styles.gallery}>
      {failed && (
        <div className={styles.status}>
          <h2 className="h2">Network error</h2>
          <p>Oops! Seems like there has been a problem with fetching images.</p>
        </div>
      )}

      {loading && (
        <div className={styles.status}>
          <h2 className="h2">Loading items ...</h2>
        </div>
      )}

      {!loading && <Masonry>{renderData()}</Masonry>}
    </section>
  );
};
