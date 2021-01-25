import React, { FunctionComponent, ReactElement } from 'react';
import { useHead } from 'hoofd';

import { Container } from 'modules/shared/primitives/Container/Container';

import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { useCollectionsPageSeo } from './data/use-collections-page-seo';

interface Props {}

export const CollectionsPage: FunctionComponent<Props> = (): ReactElement => {
  // Set basic SEO for collections page
  const { title, metas } = useCollectionsPageSeo();
  useHead({
    title,
    metas,
  });

  return (
    <main role="main">
      <Container>
        <Hero />
        <Gallery />
      </Container>
    </main>
  );
};
