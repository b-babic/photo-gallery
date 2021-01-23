import React, { FunctionComponent, ReactElement } from 'react';

import { Container } from 'modules/shared/primitives/Container/Container';

import { Hero } from './components/Hero/Hero';
import { Filters } from './components/Filters/Filters';

interface Props {}

export const HomePage: FunctionComponent<Props> = (): ReactElement => {
  return (
    <main role="main">
      <Container>
        <Hero />
        <Filters />
      </Container>
    </main>
  );
};
