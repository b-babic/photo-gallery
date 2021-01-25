import React, { FunctionComponent, ReactElement } from 'react';

import Masonry from 'modules/shared/elements/Masonry/Masonry';

import { photos, Photo } from './data/photos';
import { useRandomDetails } from './data/use-random-details';
import { GalleryItem } from './components/GalleryItem';

interface Props {}

export const Gallery: FunctionComponent<Props> = (): ReactElement => {
  const { hashtag, time } = useRandomDetails();

  return (
    <section className="section">
      <Masonry>
        {photos.map((photo: Photo) => {
          return (
            <GalleryItem
              key={photo.title}
              src={photo.src}
              title={photo.title}
              description={photo.description}
              hashtag={hashtag}
              time={time}
            />
          );
        })}
      </Masonry>
    </section>
  );
};
