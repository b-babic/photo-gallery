import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const CollectionsPage: FunctionComponent<Props> = (): ReactElement => {
  return (
    <div>
      <h2>Collections page here</h2>
      <Link to="/category/2">Go to details page</Link>
    </div>
  );
};
