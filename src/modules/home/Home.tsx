import { FunctionComponent, ReactElement } from 'react';

import { Container } from 'modules/shared/primitives/Container/Container';

import { Hero } from './components/Hero/Hero';

interface Props {}

export const HomePage: FunctionComponent<Props> = (): ReactElement => {
  return (
    <main role="main">
      <Container>
        <Hero />
      </Container>
    </main>
  );
};
