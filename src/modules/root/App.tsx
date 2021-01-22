import React, { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation } from 'modules/shared/elements/Navigation/Navigation';
import { Layout } from 'modules/shared/primitives/Layout/Layout';
import { Container } from 'modules/shared/primitives/Container/Container';

import { routes } from './routes';

export const App: FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <Navigation />

      <Layout>
        <Container>
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.key} exact path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
};
