import { FunctionComponent, ReactElement } from 'react';

interface Props {}

export const HomePage: FunctionComponent<Props> = (): ReactElement => {
  return (
    <main role="main">
      <h2>Homepage here</h2>
    </main>
  );
};
