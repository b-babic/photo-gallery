import React, { FunctionComponent, ReactElement } from 'react';

import type { Route } from 'modules/root/routes';
import { routes } from 'modules/root/routes';

import { MenuItem } from './components/MenuItem';

import styles from './Menu.module.css';

export const Menu: FunctionComponent = (): ReactElement => {
  return (
    <ul className={styles.Nav}>
      {routes.slice(0, routes.length - 1).map((route: Route, index: number) => {
        return (
          <MenuItem
            key={route.key}
            to={route.path}
            position={index + 1}
            label={route.title}
            description={route.description}
          />
        );
      })}
    </ul>
  );
};
