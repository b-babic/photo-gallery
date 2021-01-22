import { ReactElement } from 'react';

import { CollectionPage } from 'modules/collection/Collection';
import { CollectionsPage } from 'modules/collections/Collections';
import { HomePage } from 'modules/home/Home';

export type Route = {
  path: string;
  key: string;
  title: string;
  component: () => ReactElement;
};

export const routes: Route[] = [
  {
    path: '/',
    key: 'home',
    title: 'Home',
    component: () => <HomePage />,
  },
  {
    path: '/categories',
    key: 'categories',
    title: 'Discover',
    component: () => <CollectionsPage />,
  },
  {
    path: '/category/:id',
    key: 'category',
    title: 'Details',
    component: () => <CollectionPage />,
  },
];
