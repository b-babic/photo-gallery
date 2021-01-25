import React, { FunctionComponent, ReactElement } from 'react';

import { Container } from 'modules/shared/primitives/Container/Container';

import { Hero } from './components/Hero';

interface Props {}

export const CollectionsPage: FunctionComponent<Props> = (): ReactElement => {
  return (
    <main role="main">
      <Container>
        <Hero />
      </Container>
    </main>
  );
};
