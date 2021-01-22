import { ReactElement } from 'react';

import { CollectionPage } from 'modules/collection/Collection';
import { CollectionsPage } from 'modules/collections/Collections';
import { HomePage } from 'modules/home/Home';

export type Route = {
  path: string;
  key: string;
  title: string;
  description: string;
  component: () => ReactElement;
};

export const routes: Route[] = [
  {
    path: '/',
    key: 'home',
    title: 'Home',
    description: 'Link to home page',
    component: () => <HomePage />,
  },
  {
    path: '/categories',
    key: 'categories',
    title: 'Discover',
    description: 'Link to collections page',
    component: () => <CollectionsPage />,
  },
  {
    path: '/category/:id',
    key: 'category',
    title: 'Details',
    description: 'Link to single collection page',
    component: () => <CollectionPage />,
  },
];
